export interface Repository {
    id: number;
    name: string;
    html_url: string;
    description: string;
    topics: string[];
    language: string;
    homepage: string;
}

export interface GithubUser {
    login: string;
    name: string;
    avatar_url: string;
    html_url: string;
}