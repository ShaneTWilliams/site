import {
	elections,
	runs,
	ridings,
	candidates,
	parties,
	parliaments,
	detailViews,
	geometries
} from '$lib/data.js';
import { PROVINCES, PARTIES_THAT_ARENT_PARTIES, PARTIES } from '$lib/constants.js';
import {
	dateLaterThan,
} from '$lib/utils.js';

export const CONSERVATIVE_PARTIES = [
	"CONSERVATIVE_1867_1942",
	"PROGRESSIVE_CONSERVATIVE_PARTY",
	"REFORM_PARTY_OF_CANADA",
	"CANADIAN_REFORM_CONSERVATIVE_ALLIANCE",
	"CONSERVATIVE_PARTY_OF_CANADA",
	"LIBERAL_CONSERVATIVE",
	"UNIONIST",
	"NATIONAL_GOVERNMENT"
];

export const LIBERAL_PARTIES = [
	"LIBERAL_PARTY_OF_CANADA",
	"OPPOSITION"
]

export const PROGRESSIVE_PARTIES = [
	"NEW_DEMOCRATIC_PARTY",
	"PROGRESSIVE",
	"COOPERATIVE_COMMONWEALTH_FEDERATION"
]

export function getNumberOfElections(type) {
    return Object.values(elections).filter(e => e.type === type).length;
}

export function getNumberOfCandidates() {
    return Object.keys(candidates).length;
}

export function getNumberOfRuns() {
	return Object.keys(runs).length;
}

export function getNumberOfWins() {
	return Object.values(runs).filter(r => r.result != "DEFEATED").length;
}

function getCandidatesByProvince(province) {
	let candidates = new Set();
	return new Set(Object.values(runs).filter(r => ridings[r.riding].province === province).map(r => r.candidate)).size;
}

export function getStatsByProvince() {
	return Object.fromEntries(Object.entries(PROVINCES)
		.map(([p, n]) => [n, {
			byelections: Object.values(elections).filter(e => e.type == "BYELECTION").filter(e => ridings[e.riding].province === p).length,
			candidates: getCandidatesByProvince(p),
			wins: Object.values(runs).filter(r => ridings[r.riding].province === p && r.result != "DEFEATED").length
		}])
		.sort((a, b) => b[1].wins - a[1].wins));
}

export function getFirstGeneralElection() {
	return Object.entries(elections)
		.filter(([_, e]) => e.type === "GENERAL")
		.sort((a, b) => dateLaterThan(a[1].date, b[1].date) ? 1 : -1)[0];
}

export function getMostRecentGeneralElection() {
	return Object.entries(elections)
		.filter(([_, e]) => e.type === "GENERAL")
		.sort((a, b) => dateLaterThan(b[1].date, a[1].date) ? 1 : -1)[0];
}

export function getMostRecentByElection() {
	return Object.entries(elections)
		.filter(([_, e]) => e.type === "BYELECTION")
		.sort((a, b) => dateLaterThan(b[1].date, a[1].date) ? 1 : -1)[0];
}

export function getNumberOfParties() {
	return Object.values(parties).filter(p => !PARTIES_THAT_ARENT_PARTIES.includes(p.name)).length;
}

export function getMostSuccessfulPartiesData() {
	let stats = Object.fromEntries(Object.entries(parties)
		.filter(([_, p]) => !PARTIES_THAT_ARENT_PARTIES.includes(p.name))
		.map(([partyId, party]) => {
			return [partyId, {
				...party,
				wins: 0,
				runs: 0
			}];
		}));
	for (let run of Object.values(runs)) {
		if (!(run.party in stats)) {
			continue;
		}
		if (run.result != "DEFEATED") {
			stats[run.party].wins++;
		}
		stats[run.party].runs++;
	}
	return Object.entries(stats)
		.sort((a, b) => b[1].wins - a[1].wins)
		.slice(0, 10);
}

export function getProportionOfRacesWonByParty(partyName) {
	const liberalPartyId = getPartyByName(partyName)[0];
	let wins = Object.values(runs).filter(run => run.result != "DEFEATED");
	let liberalWins = wins.filter(run => run.party == liberalPartyId).length;
	return liberalWins / wins.length;
}

export function getPartyByName(partyName) {
	return Object.entries(parties).find(([partyId, party]) => party.name == partyName);
}

export function getNumberOfWinners() {
	let winners = new Set();
    for (const [candidateId, candidate] of Object.entries(candidates)) {
		for (const runId of candidate.runs) {
			if (runs[runId].result != "DEFEATED") {
				winners.add(candidateId);
				break;
			}
		}
	}
	return winners.size;
}

export function getMostSuccessfulCandidates() {
	let stats = Object.fromEntries(Object.entries(candidates)
		.map(([candidateId, candidate]) => {
			return [candidateId, {
				...candidate,
				wins: 0,
				runs: 0
			}];
		}));
	for (let run of Object.values(runs)) {
		if (elections[run.election].type == "BYELECTION") {
			continue;
		}
		if (run.result != "DEFEATED") {
			stats[run.candidate].wins++;
		}
		stats[run.candidate].runs++;
	}
	return Object.entries(stats)
		.filter(([candidateId, candidate]) => candidate.wins >= 11)
		.slice(0, 15)
		.sort((a, b) => {
			const diff = b[1].wins - a[1].wins;
			return diff == 0 ? b[1].runs - a[1].runs : diff;
		});
}

export function getNumberOfWinningParties() {
	let winningParties = new Set();
	for (const run of Object.values(runs)) {
		if (run.result != "DEFEATED") {
			winningParties.add(run.party);
		}
	}
	return winningParties.size;
}

export function getPartyBarData() {
	let partySeats = {};
	for (const run of Object.values(runs)) {
		if (run.result != "DEFEATED") {
			if (!(run.party in partySeats)) {
				partySeats[run.party] = 0;
			}
			partySeats[run.party] += 1;
		}
	}
	return Object.entries(parties)
		.filter(([partyId, party]) => partyId in partySeats && !PARTIES_THAT_ARENT_PARTIES.includes(party.name))
		.sort((a, b) => partySeats[b[0]] - partySeats[a[0]])
		.map(([partyId, party]) => {
			return {
				primaryLabel: PARTIES[party.name],
				primaryLink: `/elections/parties/${partyId}`,
				count: partySeats[partyId],
				color: party.color
			}
		});
}

export function getPartyLineChartData() {
	let winningParties = new Set();
	for (const run of Object.values(runs)) {
		if (run.result != "DEFEATED") {
			winningParties.add(run.party);
		}
	}
	const OTHER_PARTIES = Array.from(winningParties)
		.filter(partyId => ![CONSERVATIVE_PARTIES, LIBERAL_PARTIES, PROGRESSIVE_PARTIES].flat().includes(parties[partyId].name) )
		.map(partyId => parties[partyId].name);

	const PARTY_GROUPS = [
		{
			label: "Conservative",
			color: "sol-blue",
			parties: CONSERVATIVE_PARTIES,
		},
		{
			label: "Liberal",
			color: "sol-red",
			parties: LIBERAL_PARTIES,
		},
		{
			label: "Progressive",
			color: "sol-green",
			parties: PROGRESSIVE_PARTIES,
		},
		{
			label: "Other",
			color: "sol-yellow",
			parties: OTHER_PARTIES
		}
	];

	const generalElections = Object.entries(elections)
		.filter(([electionId, election]) => election.type == "GENERAL")
		.sort((a, b) => a[1].date.year - b[1].date.year);

	let winsByPartyByGeneralElection = {};
	for (const [runId, run] of Object.entries(runs)) {
		if (run.result == "DEFEATED") {
			continue;
		}
		const election = elections[run.election];
		if (election.type != "GENERAL") {
			continue;
		}
		if (!(run.election in winsByPartyByGeneralElection)) {
			winsByPartyByGeneralElection[run.election] = {};
		}
		const party = parties[run.party];
		if (!(party.name in winsByPartyByGeneralElection[run.election])) {
			winsByPartyByGeneralElection[run.election][party.name] = 0;
		}
		winsByPartyByGeneralElection[run.election][party.name] += 1;
	}

	return {
        yLabels: generalElections.map(([electionId, election]) => election.date.year),
        lines: PARTY_GROUPS.map((group) => {
			return {
				label: group.label,
				data: generalElections
					.map(([electionId, election]) =>
						Object.entries(winsByPartyByGeneralElection[electionId])
							.filter(([partyName, wins]) => group.parties.includes(partyName))
							.map(([partyId, wins]) => wins)
							.reduce((partialSum, a) => partialSum + a, 0)
					),
				color: group.color
			}
		}).concat([
			{
				label: "Total Seats",
				color: "sol-dark1",
				data: generalElections
					.map(([electionId, election]) =>
						Object.entries(winsByPartyByGeneralElection[electionId])
							.map(([partyId, wins]) => wins)
							.reduce((partialSum, a) => partialSum + a, 0)
					),
			}
		])
    };
}

export function getProportionOfRacesWonByPartyList(partyList) {
	return partyList
		.map((partyName) => getProportionOfRacesWonByParty(partyName))
		.reduce((a, b) => a + b);
}
