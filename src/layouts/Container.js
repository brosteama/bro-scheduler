import React from 'react';

const Container = ({ children }) => {
    return (
        <div className="w-full bg-blueGray-100 p-5">
            {children}
        </div>
    );
};

export default Container;