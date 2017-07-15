import { observable } from 'mobx';
import axios from 'axios';

class GithubStore {
    @observable data = [];
    @observable loading = true;
    @observable error = false;

    constructor() {
        const today = new Date();
        today.setDate(today.getDate() - 7);

        const getMonth = () => {
            const month = today.getMonth() + 1;
            return month < 10 ? `0${month}` : month;
        };

        const getDay = () => {
            const day = today.getDate();
            return day < 10 ? `0${day}` : day;
        };

        const date = `${today.getFullYear()}-${(getMonth())}-${getDay()}`;
        axios.get(`https://api.github.com/search/repositories?q=javascript+created:>${date}&sort=stars&order=desc`)
            .then((resp) => {
                // localStorage.setItem('github data', JSON.stringify(resp.data.items));
                this.data = resp.data.items;
                this.loading = false;
            })
            .catch((error) => {
                this.error = error;
                this.loading = false;
            });
    }
}

const githubStore = new GithubStore();

export default githubStore;

