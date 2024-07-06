
export const ELECTION_TYPE = {
	GENERAL: 'General Election',
	BYELECTION: 'By-Election'
};

export const GOVERNMENT_TYPE = {
	MINORITY: 'Minority',
	MAJORITY: 'Majority'
};

export const FILL_COLOURS = {
	RED: 'fill-sol-red bg-sol-red',
	ORANGE: 'fill-sol-orange bg-sol-orange',
	YELLOW: 'fill-sol-yellow bg-sol-yellow',
	GREEN: 'fill-sol-green bg-sol-green',
	BLUE: 'fill-sol-blue bg-sol-blue',
	PURPLE: 'fill-sol-violet bg-sol-violet',
	PINK: 'fill-sol-magenta bg-sol-magenta',
	GREY: 'fill-sol-dark1 bg-sol-dark1',
	BLACK: 'fill-sol-dark3 bg-sol-dark3 dark:fill-sol-dark1 dark:bg-sol-dark1',
	WHITE: 'fill-sol-light3 bg-sol-light2 dark:fill-sol-light2 dark:bg-sol-light2',
	CYAN: 'fill-sol-cyan bg-sol-cyan',
	BASE2: 'fill-sol-light2 bg-sol-light2 dark:fill-sol-dark2 dark:bg-sol-dark2',
	BASE1: 'fill-sol-light1 bg-sol-light1 dark:fill-sol-dark1 dark:bg-sol-dark1'
};

export const PROVINCES = {
	AB: 'Alberta',
	BC: 'British Columbia',
	MB: 'Manitoba',
	NB: 'New Brunswick',
	NL: 'Newfoundland and Labrador',
	NS: 'Nova Scotia',
	NT: 'Northwest Territories',
	NU: 'Nunavut',
	ON: 'Ontario',
	PE: 'Prince Edward Island',
	QC: 'Quebec',
	SK: 'Saskatchewan',
	YT: 'Yukon'
};

export const MONTHS = {
	1: 'January',
	2: 'February',
	3: 'March',
	4: 'April',
	5: 'May',
	6: 'June',
	7: 'July',
	8: 'August',
	9: 'September',
	10: 'October',
	11: 'November',
	12: 'December'
};

export const DETAIL_VIEWS = {
	ST_JOHNS: "St. John's",
	PEI: 'P.E.I.',
	MONCTON: 'Moncton',
	HALIFAX: 'Halifax',
	MONTREAL: 'Montréal',
	QUEBEC_CITY: 'Québec',
	SOUTHERN_QUEBEC: 'Southern Québec',
	TROIS_RIVIERES: 'Trois-Rivières',
	OTTAWA: 'Ottawa',
	TORONTO: 'Toronto',
	GOLDEN_HORSESHOE: 'Golden Horseshoe',
	LONDON: 'London',
	REGINA: 'Regina',
	WINNIPEG: 'Winnipeg',
	ESSEX: 'Essex',
	SASKATOON: 'Saskatoon',
	CALGARY: 'Calgary',
	EDMONTON: 'Edmonton',
	VANCOUVER: 'Vancouver',
	VICTORIA: 'Victoria'
};

export const RO_YEARS = [
	1867, 1872, 1882, 1892, 1903, 1905, 1914, 1924, 1933, 1947, 1952, 1966, 1976, 1987, 1996, 1999,
	2003, 2013
];

export const PARTIES_THAT_ARENT_PARTIES = [
	'NO_AFFILIATION_TO_A_RECOGNISED_PARTY',
	'UNKNOWN',
	'INDEPENDENT',
	'INDEPENDENT_COOPERATIVE_COMMONWEALTH_FEDERATION',
	'INDEPENDENT_CONSERVATIVE',
	'INDEPENDENT_LABOUR',
	'INDEPENDENT_LIBERAL',
	'INDEPENDENT_LIBERAL_PROGRESSIVE',
	'INDEPENDENT_NATIONALIST',
	'INDEPENDENT_PROGRESSIVE',
	'INDEPENDENT_PROGRESSIVE_CONSERVATIVE',
	'INDEPENDENT_SOCIAL_CREDIT',
];

export const OCCUPATIONS_THAT_ARENT_OCCUPATIONS = [null, 'Unknown'];

export const PARTIES = {
	ABOLITIONIST_PARTY_OF_CANADA: 'Abolitionist Party of Canada',
	ACCOUNTABILITY_COMPETENCY_AND_TRANSPARENCY: 'Accountability, Competency and Transparency',
	ALL_CANADIAN_PARTY: 'All Canadian Party',
	ALLIANCE_OF_THE_NORTH: 'Alliance of the North',
	ANIMAL_ALLIANCE_ENVIRONMENT_VOTERS_PARTY_OF_CANADA:
		'Animal Alliance Environment Voters Party of Canada',
	ANIMAL_PROTECTION_PARTY_OF_CANADA: 'Animal Protection Party of Canada',
	ANTI_CONFEDERATE: 'Anti-Confederate',
	ANTI_CONSCRIPTIONIST: 'Anti-Conscriptionist',
	AUTONOMIST: 'Autonomist',
	BLOC_QUÉBÉCOIS: 'Bloc Québécois',
	BLOC_POPULAIRE_CANADIEN: 'Bloc populaire canadien',
	CANADA_PARTY: 'Canada Party',
	CANADAS_FOURTH_FRONT: "Canada's Fourth Front",
	CANADIAN_ACTION_PARTY: 'Canadian Action Party',
	CANADIAN_DEMOCRAT: 'Canadian Democrat',
	CANADIAN_FUTURE_PARTY: 'Canadian Future Party',
	CANADIAN_LABOUR: 'Canadian Labour',
	CANADIAN_NATIONALIST_PARTY: 'Canadian Nationalist Party',
	CANADIAN_PARTY: 'Canadian Party',
	CANADIAN_REFORM_CONSERVATIVE_ALLIANCE: 'Canadian Reform Conservative Alliance',
	CANDIDATE_OF_THE_ELECTORS: 'Candidate of the Electors',
	CAPITAL_FAMILIAL: 'Capital Familial',
	CENTRIST_PARTY_OF_CANADA: 'Centrist Party of Canada',
	CHRISTIAN_HERITAGE_PARTY_OF_CANADA: 'Christian Heritage Party of Canada',
	CHRISTIAN_LIBERAL: 'Christian Liberal',
	COOPERATIVE_COMMONWEALTH_FEDERATION: 'Co-op. Commonwealth Federation',
	COMMUNIST_PARTY_OF_CANADA: 'Communist Party of Canada',
	CONFEDERATION_OF_REGIONS_WESTERN_PARTY: 'Confederation of Regions Western Party',
	CONSERVATIVE_1867_1942: 'Conservative Party of Canada (1867-1942)',
	CONSERVATIVE_PARTY_OF_CANADA: 'Conservative Party of Canada',
	CONSERVATIVE_LABOUR: 'Conservative-Labour',
	COOPERATIVE_BUILDERS_OF_CANADA: 'Cooperative Builders of Canada',
	DEMOCRAT: 'Democrat',
	DROIT_VITAL_PERSONNEL: 'Droit vital personnel',
	EQUAL_RIGHTS: 'Equal Rights',
	ESPRIT_SOCIAL: 'Esprit Social',
	FARMER: 'Farmer',
	FIRST_PEOPLES_NATIONAL_PARTY_OF_CANADA: 'First Peoples National Party of Canada',
	FREE_PARTY_CANADA: 'Free Party Canada',
	GREEN_PARTY_OF_CANADA: 'Green Party of Canada',
	INDEPENDENT: 'Independent',
	INDEPENDENT_COOPERATIVE_COMMONWEALTH_FEDERATION:
		'Independent Co-operative Commonwealth Federation',
	INDEPENDENT_CONSERVATIVE: 'Independent Conservative',
	INDEPENDENT_LABOUR: 'Independent Labour',
	INDEPENDENT_LIBERAL: 'Independent Liberal',
	INDEPENDENT_LIBERAL_PROGRESSIVE: 'Independent Liberal Progressive',
	INDEPENDENT_NATIONALIST: 'Independent Nationalist',
	INDEPENDENT_PROGRESSIVE: 'Independent Progressive',
	INDEPENDENT_PROGRESSIVE_CONSERVATIVE: 'Independent Progressive Conservative',
	INDEPENDENT_SOCIAL_CREDIT: 'Independent Social Credit',
	LABOR_PROGRESSIVE_PARTY: 'Labor-Progressive Party',
	LABOUR: 'Labour',
	LIBERAL_LABOUR_PARTY: 'Liberal Labour Party',
	LIBERAL_LABOUR_PROGRESSIVE: 'Liberal Labour Progressive',
	LIBERAL_PARTY_OF_CANADA: 'Liberal Party of Canada',
	LIBERAL_PROGRESSIVE: 'Liberal Progressive',
	LIBERAL_PROTECTIONIST: 'Liberal Protectionist',
	LIBERAL_CONSERVATIVE: 'Liberal-Conservative',
	LIBERTARIAN_PARTY_OF_CANADA: 'Libertarian Party of Canada',
	LOCATAIRE_CANDIDAT: 'Locataire (candidat)',
	MARIJUANA_PARTY: 'Marijuana Party',
	MARXIST_LENINIST_PARTY_OF_CANADA: 'Marxist-Leninist Party of Canada',
	MAVERICK_PARTY: 'Maverick Party',
	MCCARTHYITE: 'McCarthyite',
	NATIONAL_ADVANCEMENT_PARTY_OF_CANADA: 'National Advancement Party of Canada',
	NATIONAL_CITIZENS_ALLIANCE: 'National Citizens Alliance',
	NATIONAL_CITIZENS_ALLIANCE_OF_CANADA: 'National Citizens Alliance of Canada',
	NATIONAL_CREDIT_CONTROL: 'National Credit Control',
	NATIONAL_GOVERNMENT: 'National Government',
	NATIONAL_LABOUR: 'National Labour',
	NATIONAL_LIBERAL_PROGRESSIVE: 'National Liberal Progressive',
	NATIONAL_LIBERAL_AND_CONSERVATIVE_PARTY_1921: 'National Liberal and Conservative Party (1921)',
	NATIONAL_PARTY_OF_CANADA: 'National Party of Canada',
	NATIONAL_SOCIALIST: 'National Socialist',
	NATIONAL_UNITY: 'National Unity',
	NATIONALIST: 'Nationalist',
	NATIONALIST_CONSERVATIVE: 'Nationalist Conservative',
	NATIONALIST_LIBERAL: 'Nationalist Liberal',
	NATURAL_LAW_PARTY_OF_CANADA: 'Natural Law Party of Canada',
	NEW_CANADA_PARTY: 'New Canada Party',
	NEW_DEMOCRACY: 'New Democracy',
	NEW_DEMOCRATIC_PARTY: 'New Democratic Party',
	NEW_PARTY: 'New Party',
	NEWFOUNDLAND_AND_LABRADOR_FIRST_PARTY: 'Newfoundland and Labrador First Party',
	NO_AFFILIATION_TO_A_RECOGNISED_PARTY: 'No affiliation',
	NON_PARTISAN_LEAGUE: 'Non-Partisan League',
	OPPOSITION: 'Opposition',
	OPPOSITION_LABOUR: 'Opposition-Labour',
	PARTI_HUMAIN_FAMILIAL: 'Parti Humain Familial',
	PARTI_NATIONALISTE_DU_QUÉBEC: 'Parti Nationaliste du Québec',
	PARTI_OUVRIER_CANADIEN: 'Parti Ouvrier Canadien',
	PARTI_PATRIOTE: 'Parti Patriote',
	PARTI_DE_LA_DÉMOCRATISATION_ÉCONOMIQUE: 'Parti de la Démocratisation Économique',
	PARTI_POUR_LINDÉPENDANCE_DU_QUÉBEC: "Parti pour l'Indépendance du Québec",
	PARTY_FOR_THE_COMMONWEALTH_OF_CANADA: 'Party for the Commonwealth of Canada',
	PATRONS_OF_INDUSTRY: 'Patrons of Industry',
	PEOPLES_PARTY_OF_CANADA: "People's Party of Canada",
	PEOPLES_PARTY_OF_CANADA: "People's Party of Canada ",
	PEOPLES_POLITICAL_POWER_PARTY_OF_CANADA: "People's Political Power Party of Canada",
	PIRATE_PARTY_OF_CANADA: 'Pirate Party of Canada',
	PROGRESSIVE: 'Progressive',
	PROGRESSIVE_CANADIAN_PARTY: 'Progressive Canadian Party',
	PROGRESSIVE_CONSERVATIVE_PARTY: 'Progressive Conservative Party',
	PROGRESSIVE_WORKERS_MOVEMENT: 'Progressive Workers Movement',
	PROHIBITIONIST: 'Prohibitionist',
	PROTECTIONIST: 'Protectionist',
	PROTESTANT_PROTECTIVE_ASSOCIATION: 'Protestant Protective Association',
	RADICAL_CHRÉTIEN: 'Radical Chrétien',
	RALLIEMENT_DES_CRÉDITISTES: 'Ralliement des créditistes',
	RECONSTRUCTION_PARTY: 'Reconstruction Party',
	REFORM: 'Reform',
	REFORM_PARTY_OF_CANADA: 'Reform Party of Canada',
	REPUBLICAN: 'Republican',
	REPUBLICAN_PARTY: 'Republican Party',
	RHINOCEROS_PARTY: 'Rhinoceros Party',
	RHINOCEROS_PARTY_OF_CANADA: 'Rhinoceros Party of Canada',
	SENIORS_PARTY_OF_CANADA: 'Seniors Party of Canada',
	SOCIAL_CREDIT_PARTY_OF_CANADA: 'Social Credit Party of Canada',
	SOCIAL_CREDIT_NATIONAL_UNITY: 'Social Credit-National Unity',
	SOCIALIST: 'Socialist',
	SOCIALIST_LABOUR: 'Socialist Labour',
	STOP_CLIMATE_CHANGE_PARTY: 'Stop Climate Change Party',
	STRENGTH_IN_DEMOCRACY: 'Strength in Democracy',
	TECHNOCRAT: 'Technocrat',
	THE_BRIDGE_PARTY_OF_CANADA: 'The Bridge Party of Canada',
	TRADES_UNION: 'Trades Union',
	UNION_POPULAIRE: 'Union Populaire',
	UNION_OF_ELECTORS: 'Union of Electors',
	UNIONIST: 'Unionist',
	UNIONIST_LIBERAL: 'Unionist (Liberal)',
	UNITED_FARMERS: 'United Farmers',
	UNITED_FARMERS_OF_ALBERTA: 'United Farmers of Alberta',
	UNITED_FARMERS_OF_ONTARIO: 'United Farmers of Ontario',
	UNITED_FARMERS_OF_ONTARIO_LABOUR: 'United Farmers of Ontario-Labour',
	UNITED_FARMERS_LABOUR: 'United Farmers-Labour',
	UNITED_PARTY_OF_CANADA: 'United Party of Canada',
	UNITED_PROGRESSIVE: 'United Progressive',
	UNITED_REFORM: 'United Reform',
	UNITED_REFORM_MOVEMENT: 'United Reform Movement',
	UNITY: 'Unity',
	UNKNOWN: 'Unknown',
	VETERANS_COALITION_PARTY_OF_CANADA: 'Veterans Coalition Party of Canada',
	VETERANS_PARTY: 'Veterans Party',
	WESTERN_BLOCK_PARTY: 'Western Block Party',
	WORK_LESS_PARTY: 'Work Less Party',
	NEORHINO: 'neorhino.ca'
};
