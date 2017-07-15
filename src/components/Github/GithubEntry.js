import React from 'react';

import { observer } from 'mobx-react';

const GithubEntry = observer(({ entry }) => {
    const {
        full_name: fullName,
        html_url: htmlUrl,
        description,
        forks,
        watchers_count: stars,
    } = entry;
    return (
        <div className="repo-entry">

            <div className="repo-attribute">
                <span className="repo-name">{fullName}</span>
            </div>

            <div className="repo-attribute">
                <span className="repo-attribute-label">URL: </span>
                <span className="repo-url">{htmlUrl}</span>
            </div>

            <div className="repo-attribute">
                <span className="repo-attribute-label">Description: </span>
                <span className="repo-description">{description}</span>
            </div>


            <div className="repo-attribute">
                <span className="repo-attribute-label">#Stars: </span>
                <span className="repo-stars">{stars}</span>
            </div>

            <div className="repo-attribute">
                <span className="repo-attribute-label">#Forks: </span>
                <span className="repo-forks">{forks}</span>
            </div>

        </div>
    );
});

export default GithubEntry;
