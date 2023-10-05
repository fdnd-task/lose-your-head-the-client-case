import { teams } from './dummydata.js';

export function load() {
	return {
		teamInfo: teams.map((team) => ({
			name: team.teamName,
            logo: team.teamLogo
		}))
	};
}