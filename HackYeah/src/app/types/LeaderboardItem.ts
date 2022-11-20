import { User } from "@auth0/auth0-angular";

export interface LeaderboardItem {
    username: string,
    rank: string,
    score: number,
}