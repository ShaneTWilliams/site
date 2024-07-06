<script>
    import Page from '$lib/components/Page.svelte';
    import Title from '$lib/components/Title.svelte';
    import Heading from '$lib/components/Heading.svelte';
    import Link from '$lib/components/Link.svelte';
    import Paragraph from '$lib/components/Paragraph.svelte';
    import Dialog from '$lib/components/Dialog.svelte';
    import HorizontalBar from '$lib/components/HorizontalBar.svelte';
    import LargeCard from '$lib/components/LargeCard.svelte';
    import LineChart from '$lib/components/LineChart.svelte';

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
    import {
        CONSERVATIVE_PARTIES,
        LIBERAL_PARTIES,
        PROGRESSIVE_PARTIES,
        getNumberOfElections,
        getNumberOfCandidates,
        getNumberOfWinners,
        getNumberOfWins,
        getStatsByProvince,
        getFirstGeneralElection,
        getMostRecentGeneralElection,
        getMostRecentByElection,
        getNumberOfParties,
        getMostSuccessfulPartiesData,
        getProportionOfRacesWonByPartyList,
        getPartyByName,
        getMostSuccessfulCandidates,
        getNumberOfWinningParties,
        getPartyBarData,
        getPartyLineChartData,
    } from './elections.js';
    import { formatNumber, formatString, ordinalSuffix } from '$lib/utils.js';
    import { MONTHS, PROVINCES, PARTIES } from '$lib/constants.js';

    const TITLE = 'Canadian Electoral History: Part 1';

    const numGeneralElections = getNumberOfElections('GENERAL');
    const numByElections = getNumberOfElections('BYELECTION');
    const numCandidates = getNumberOfCandidates();
    const numWinners = getNumberOfWinners();
    const numRaces = getNumberOfWins();
    const statsByProvince = getStatsByProvince();
    const numYears = new Date().getFullYear() - 1867;
    const avgYearsPerElection = numYears / numGeneralElections;
    const [firstGeneralElectionId, firstGeneralElection] = getFirstGeneralElection();
    const [mostRecentGeneralElectionId, mostRecentGeneralElection] = getMostRecentGeneralElection();
    const [mostRecentByElectionId, mostRecentByElection] = getMostRecentByElection();
    const mostRecentByElectionRiding = ridings[mostRecentByElection.riding];
    const numParties = getNumberOfParties();
    const numWinningParties = getNumberOfWinningParties();
    const mostSuccessfulParties = getMostSuccessfulPartiesData();
    const [liberalPartyId, liberalParty] = getPartyByName('LIBERAL_PARTY_OF_CANADA');
    const conservativeParties = CONSERVATIVE_PARTIES.map((partyName) => getPartyByName(partyName));
    const liberalParties = LIBERAL_PARTIES.map((partyName) => getPartyByName(partyName));
    const progressiveParties = PROGRESSIVE_PARTIES.map((partyName) => getPartyByName(partyName));
    const proportionOfRacesWonByConservatives = formatNumber(getProportionOfRacesWonByPartyList(CONSERVATIVE_PARTIES) * 100, true);
    const proportionOfRacesWonByLiberals = formatNumber(getProportionOfRacesWonByPartyList(LIBERAL_PARTIES) * 100, true);
    const proportionOfRacesWonByProgressives = formatNumber(getProportionOfRacesWonByPartyList(PROGRESSIVE_PARTIES) * 100, true);
    const mostSuccessfulCandidates = getMostSuccessfulCandidates();
    const partyBarData = getPartyBarData();
    const partyLineChartData = getPartyLineChartData();

    let conservativeDialogOpen = false;
</script>

<svelte:head>
    <title>{TITLE}</title>
</svelte:head>

<Page>
    <Title text={TITLE} />
    <p class="text-xs bg-sol-light2 dark:bg-sol-dark2 py-2 px-3 rounded-lg mt-4 italic">
        Every number and figure in this article is automatically generated from the latest Elections Canada data, and will continue to update and change as elections occur.
    </p>
    <Heading text="The Big Picture" />
    <Paragraph>
        There have been {numGeneralElections} general and {numByElections} by-elections in Canadian history. {formatNumber(numCandidates)} candidates have run in {formatNumber(numRaces)} races across {formatNumber( Object.keys(ridings).length )} ridings. By province or territory:
    </Paragraph>
    <LargeCard title="">
        <div class="w-full flex flex-row justify-center text-sm p-4">
            <table class="table-auto border-separate border-spacing-x-6 dark:text-sol-light1">
                <tr class="font-bold dark:text-sol-light2">
                    <td>Province/Territory</td>
                    <td>Candidates</td>
                    <td>Races</td>
                    <td>By-Elections</td>
                </tr>
                {#each Object.entries(statsByProvince) as [province, stats]}
                    <tr>
                        {#if statsByProvince['Nunavut'].byelections == 0}
                            <td>{province == 'Nunavut' ? 'Nunavut*' : province}</td>
                        {:else}
                            <td>{province}</td>
                        {/if}
                        <td>{formatNumber(stats.candidates)}</td>
                        <td>{formatNumber(stats.wins)}</td>
                        <td>{stats.byelections}</td>
                    </tr>
                {/each}
            </table>
        </div>
        {#if statsByProvince['Nunavut'].byelections == 0}
        <p class="text-xs italic text-right mr-4">* Nunavut has not yet had a by-election!</p>
        {/if}
    </LargeCard>
    <div class="mb-4" />
    <Paragraph>
        The <Link link={`/elections/elections/${firstGeneralElectionId}`}>first general election</Link> was held in {firstGeneralElection.date.year}, and there has since been an average of {Math.floor( avgYearsPerElection )} years and {((avgYearsPerElection % 1) * 12).toFixed(0)} months between each subsequent general election. The <Link link={`/elections/elections/${mostRecentGeneralElectionId}`} >most recent general election</Link > elected the <Link link={`/elections/parliaments/${mostRecentGeneralElection.parliament}`} >{ordinalSuffix(mostRecentGeneralElection.parliament)} parliament</Link > and was held on {MONTHS[mostRecentGeneralElection.date.month]} {ordinalSuffix(mostRecentGeneralElection.date.day)}, {mostRecentGeneralElection.date.year}. The <Link link={`/elections/elections/${mostRecentByElectionId}`}>most recent by-election</Link > was held on {MONTHS[mostRecentByElection.date.month]} {ordinalSuffix(mostRecentByElection.date.day)}, {mostRecentByElection.date.year} in <Link link={`/elections/ridings/${mostRecentByElection.riding}`} >{formatString(mostRecentByElectionRiding.name)}, {PROVINCES[ mostRecentByElectionRiding.province ]}</Link >.
    </Paragraph>
    <Paragraph>
        Candidates have run for a total of {numParties} parties. The ten most successful parties are detailed below.
    </Paragraph>
    <div class="w-full flex flex-row justify-center text-sm pt-4 pb-4">
        <table class="table-auto border-separate border-spacing-x-6 dark:text-sol-light1">
            <tr class="font-bold dark:text-sol-light2">
                <td>Party</td>
                <td>Candidates Run</td>
                <td>Seats Won</td>
                <td>Success Rate</td>
            </tr>
            {#each mostSuccessfulParties as [partyId, party]}
                <tr>
                    <td><Link link={`/elections/parties/${partyId}`}>{PARTIES[party.name]}</Link></td>
                    <td>{formatNumber(party.runs)}</td>
                    <td>{formatNumber(party.wins)}</td>
                    <td>{formatNumber((party.wins / party.runs) * 100, true)}</td>
                </tr>
            {/each}
        </table>
    </div>
    <Paragraph>
        The <Link link={`/elections/parties/${liberalPartyId}`}>{PARTIES[liberalParty.name]}</Link> has won {proportionOfRacesWonByLiberals} of all seats in Canadian history, while <button class="underline hover:cursor-pointer decoration-dotted hover:font-bold" on:click={() => (conservativeDialogOpen = true)} >Canada's mainstream conservative parties</button > have won just {proportionOfRacesWonByConservatives}.
    </Paragraph>
    <Paragraph>
        Of the {formatNumber(numCandidates)} who have run in an election since 1867, just {formatNumber( numWinners )} &mdash; or {formatNumber((numWinners / numCandidates) * 100, true)} &mdash; have won and become MPs. The {mostSuccessfulCandidates.length} most successful MPs are outlined below, excluding by-election victories to control for the historical practice of <Link link="https://en.m.wikipedia.org/wiki/Ministerial_by-election">ministerial by-elections.</Link >
    </Paragraph>
    <div class="w-full flex flex-row justify-center text-sm pt-4 pb-4">
        <table class="table-auto border-separate border-spacing-x-6 dark:text-sol-light1">
            <tr class="font-bold dark:text-sol-light2">
                <td>Candidate</td>
                <td>Races</td>
                <td>Wins</td>
                <td>Success Rate</td>
            </tr>
            {#each mostSuccessfulCandidates as [candidateId, candidate]}
                <tr>
                    <td
                        ><Link link={`/elections/candidates/${candidateId}`}
                            >{candidate.first_name} {candidate.last_name}</Link
                        ></td
                    >
                    <td>{formatNumber(candidate.runs)}</td>
                    <td>{formatNumber(candidate.wins)}</td>
                    <td>{formatNumber((candidate.wins / candidate.runs) * 100, true)}</td>
                </tr>
            {/each}
        </table>
    </div>

    <Heading text="Parties" />
    <Paragraph>
        Candidates have run for a total of {numParties} parties, but only {numWinningParties} parties have ever won a single seat. These are, in order of number of seats won:
    </Paragraph>
    <LargeCard title="">
        <HorizontalBar data={partyBarData} showTotal={false} />
    </LargeCard>
    <div class="h-8" />
    <LineChart data={partyLineChartData} />
</Page>

<Dialog title="Mainstream Conservative Parties" bind:open={conservativeDialogOpen}>
    <div class="flex flex-col items-start space-y-1 text-sm">
        {#each conservativeParties as [partyId, party]}
            <Link link={`/elections/parties/${partyId}`}>{PARTIES[party.name]}</Link>
        {/each}
    </div>
</Dialog>
