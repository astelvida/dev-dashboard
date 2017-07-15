import React from 'react';
import { observer } from 'mobx-react';

import GithubEntry from './GithubEntry';

@observer class GithubData extends React.Component {
    render() {
        const { githubStore } = this.props;
        return (
            <div>
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

export default GithubData;
