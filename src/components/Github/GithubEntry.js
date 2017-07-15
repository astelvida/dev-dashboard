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
        <div>
            <div>{fullName}</div>
            <div>{htmlUrl}</div>
            <div>{description}</div>
            <div>{forks}</div>
            <div>{watcher}</div>
            <hr />
        </div>
    );
});

export default GithubEntry;
