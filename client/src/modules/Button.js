import {Link} from "react-router-dom";

import './button.css'

const Button = ({ src, label }) => {
    return (
        <>
            <a href={src} className="button" >{label}</a> 
            <br />
            <Link to={src} title="Opret/Se">{label} skal styles grøn mv</Link>
        </>
    );
};

export default Button;