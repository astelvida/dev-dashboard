import React from 'react';

import { observer } from 'mobx-react';

const GithubEntry = observer(({ entry, goToRepoUrl, addTodo, markAsAdded }) => {
    const {
        id,
        full_name: fullName,
        description,
        watchers_count: stars,
        visited,
        marked,
    } = entry;

    const handleUrlClick = (e) => {
        e.preventDefault();
        goToRepoUrl(id);
    };

    const handleAddAsTodoClick = (e) => {
        e.preventDefault();
        addTodo(fullName, entry);
        // markAsAdded(id);
    };

    return (
        <div className="repo-entry">

            <div className="repo-header-container">
                <span
                    className="repo-name-text"
                    style={visited ? { color: 'blue' } : {}}
                    onClick={handleUrlClick}
                >
                    {fullName.split('/').join(' / ')}
                </span>
                <button
                    className="repo-button"
                    onClick={handleAddAsTodoClick}
                >
                    {marked ? 'Remove Todo' : 'Add Todo'}
                </button>
            </div>

            <div className="repo-attributes-container">
                <span className="repo-description-text">{description}</span>
                <span className="repo-stars">
                    <i className="fa fa-star"></i> {stars}
                </span>
            </div>

        </div>
    );
});

export default GithubEntry;
