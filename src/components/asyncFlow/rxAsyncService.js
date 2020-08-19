import { Subject, from, EMPTY } from "rxjs";
import axios from "axios";

export const input$ = new Subject();

export const githubUser$ = (username) => from(getGithubUser(username));

export const getGithubUser = (username) => {
    if (username) {
        return axios.get(`https://api.github.com/users/${username}`);
    } else {
        return EMPTY;
    }
};
