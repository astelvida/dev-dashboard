import React from 'react';

import { observer } from 'mobx-react';

const GithubEntry = observer(({ entry }) => {
    const {
        fullName,
        htmlUrl,
        description,
        forks,
        watcher,
    } = entry;
    return (
        <div className="github-entry">
            <span>{fullName}</span>
            <span>{htmlUrl}</span>
            <span>{description}</span>
            <span>{forks}</span>
            <span>{watcher}</span>
        </div>
    );
});

export default GithubEntry;
