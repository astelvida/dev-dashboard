import React from 'react';
import { observer } from 'mobx-react';

import GithubEntry from './GithubEntry';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';

@observer class Github extends React.Component {
    componentDidMount() {
        this.props.githubStore.getGithubData();
    }

    goToRepoUrl = (id) => {
        return this.props.githubStore.goToRepoUrl(id);
    }

    markVisited = (id) => {
        return this.props.githubStore.markVisited(id);
    }

    render() {
        const { 
            githubData,
        } = this.props.githubStore;
        return (
            <div className="github-container">
                <Header title="Github Trending"/>
                <div className="github-list">
                    {githubData.length === 0 ?
                     <Spinner message="Loading..." /> :
                     githubData.map(entry => (
                        <GithubEntry
                            goToRepoUrl={this.goToRepoUrl}
                            markVisited={this.markVisited}
                            entry={entry}
                            key={entry.id}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Github;
