import React from 'react';
import {Link} from "react-router-dom";

const nav = () => {
    return (<div>

        <Link to='/react-state/' className="btn btn-outline-primary btn-lg btn-block">Main</Link>
        <Link to='/react-state/data' className="btn btn-outline-primary btn-lg btn-block">Display</Link>
        <Link to='/react-state/about' role="button" className="btn btn-outline-primary btn-lg btn-block">About</Link>

    </div>)
};

export default nav;