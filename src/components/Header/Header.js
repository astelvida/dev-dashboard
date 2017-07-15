import React from 'react';

const Header = ({ title }) => {
    console.log('TITLE');
    return (
        <h3>
            {title}
        </h3>
    );
};

export default Header;
