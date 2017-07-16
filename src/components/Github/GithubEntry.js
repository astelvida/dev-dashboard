import React from 'react';

import { observer } from 'mobx-react';

const GithubEntry = observer(({ entry, goToRepoUrl }) => {
    const {
        id,
        full_name: fullName,
        description,
        watchers_count: stars,
        visited,
    } = entry;

    const handleUrlClick = (e) => {
        e.preventDefault();
        goToRepoUrl(id);
    };

    return (
        <div className="repo-entry">

            <div className="repo-header-container">
                <span
                    className="repo-name-text"
                    style={visited ? { color: 'blue' } : {}}
                    onClick={handleUrlClick}
                >
                    {fullName}
                </span>
                <div className="repo-button-container">
                    <button className="repo-button">Add as Todo</button>
                </div>
            </div>

            <div className="repo-attributes-container">
                <span className="repo-description-text">{description}</span>
                <div className="repo-stars-container">
                    <span className="repo-stars-text"><i className="fa fa-star"></i> {stars}</span>
                </div>
            </div>

        </div>
    );
});

export default GithubEntry;
