import { observable, action } from 'mobx';
import axios from 'axios';

const GITHUB_URL = 'https://api.github.com/search/repositories';

class GithubStore {
    @observable githubData = [];
    @observable loading = false;
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

    getRepoById(id) {
        return this.githubData.find(repo => id === repo.id);
    }

    @action getGithubData() {
        this.loading = true;
        if (localStorage.github) {
            this.githubData = JSON.parse(localStorage.github);
            this.loading = false;
        } else {
            const date = this.getUrlDateParameter();
            axios.get(`${GITHUB_URL}?q=language%3Ajavascript+created%3A>${date}&sort=stars&order=desc`)
                .then((resp) => {
                    resp.data.items.forEach(item => {
                        item.visited = false;
                        item.marked = false;
                    });
                    localStorage.setItem('github', JSON.stringify(resp.data.items));
                    this.githubData = resp.data.items;
                    this.loading = false;
                })
                .catch((error) => {
                    this.error = error;
                    this.loading = false;
                });
        }
    }

    @action markAsAdded(id) {
        const repo = this.getRepoById(id);
        repo.marked = true;
    }

    @action goToRepoUrl(id) {
        const repo = this.getRepoById(id);
        repo.visited = true;
        window.open(repo.html_url, '_blank');
    }
}

const githubStore = new GithubStore();

export default githubStore;

