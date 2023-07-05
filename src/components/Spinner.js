import React from 'react';
import loading from "./Circles-menu-3.gif";

function Spinner() {
    return (
        <div className="text-center">
            <img src={loading} alt="loading" />
        </div>
    );
}

export default Spinner;
