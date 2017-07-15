import { observable, action } from 'mobx';
import axios from 'axios';

const GITHUB_URL =' https://api.github.com/search/repositories';

class GithubStore {
    @observable data = [];
    @observable loading = true;
    @observable error = false;

    getUrlDateParameter = () => {
        const today = new Date();
        today.setDate(today.getDate() - 7);
        const formatDate = (getter, increment = 0) => {
            const day = today[getter]() + increment;
            return day < 10 ? `0${day}` : day;
        };
        return `${today.getFullYear()}-${(formatDate('getMonth', 1))}-${formatDate('getDate')}`;
    }

    @action getGithubData() {
        if (localStorage.github) {
            this.data = JSON.parse(localStorage.github);
        } else {
            const date = this.getUrlDateParameter();
            axios.get(`${GITHUB_URL}?q=javascript+created:>${date}&sort=stars&order=desc`)
                .then((resp) => {
                    localStorage.setItem('github', JSON.stringify(resp.data.items));
                    this.data = resp.data.items;
                    this.loading = false;
                })
                .catch((error) => {
                    this.error = error;
                    this.loading = false;
                });
        }
    }
}

const githubStore = new GithubStore();

export default githubStore;

