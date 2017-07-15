import React from 'react';
import { observer } from 'mobx-react';

import GithubEntry from './GithubEntry';
import Header from '../Header/Header';

@observer class Github extends React.Component {
    componentDidMount() {
        this.props.githubStore.getGithubData();
    }
    
    render() {
        const { githubStore } = this.props;
        console.log('GITHUB STORE', githubStore);
        return (
            <div className="github-container">
                <Header title="Github Trending"/>
                {githubStore.data.map(entry =>
                    <GithubEntry
                        entry={entry}
                        key={entry.id}
                    />
                )}
            </div>
        );
    }
}

export default Github;
