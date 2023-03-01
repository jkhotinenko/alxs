import React from 'react';

const Footer = () => {
    let year=new Date().getFullYear();
    return (
        <div className="footer">
            ALXS Ltd {year}
        </div>
    );
};

export {Footer};