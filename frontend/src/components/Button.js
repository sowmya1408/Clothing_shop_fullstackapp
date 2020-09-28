import React from 'react';
import {Link} from 'react-router-dom';

function Button({text, type, goPath,cartEvent}) {
return <button type={type} onClick={cartEvent}><Link to={goPath}>{text}</Link></button>
}

export default Button
