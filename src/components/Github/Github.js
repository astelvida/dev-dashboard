import React from 'react';
import { observer } from 'mobx-react';

import GithubEntry from './GithubEntry';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';


@observer class Github extends React.Component {
    componentDidMount() {
        this.props.githubStore.getGithubData();
    }

    render() {
        const { githubData } = this.props.githubStore;
        return (
            <div className="col-4 github-container">
                <Header title="Github Trending"/>

                <div className="github-list">
                    {githubData.length === 0 ?
                     <Spinner message="Loading..." /> :
                     githubData.map(entry => (
                        <GithubEntry
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
