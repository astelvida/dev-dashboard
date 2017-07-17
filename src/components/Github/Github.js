import React from 'react';
import { observer } from 'mobx-react';

import GithubEntry from './GithubEntry';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';

@observer class Github extends React.Component {
    componentDidMount() {
        this.props.githubStore.getGithubData();
    }

    goToRepoUrl = id => this.props.githubStore.goToRepoUrl(id);

    addTodo = (title, meta) => this.props.todoStore.addTodo(title, meta);

    markAsAdded = id => this.props.githubStore.markAsAdded(id);

    render() {
        const {
            githubData,
        } = this.props.githubStore;
        return (
            <div className="github-container">
                <Header title="Github Trending"/>
                <div className="repo-list">
                    {githubData.length === 0 ?
                     <Spinner message="Loading..." /> :
                     githubData.map(entry => (
                        <GithubEntry
                            goToRepoUrl={this.goToRepoUrl}
                            addTodo={this.addTodo}
                            markAsAdded={this.markAsAdded}
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
