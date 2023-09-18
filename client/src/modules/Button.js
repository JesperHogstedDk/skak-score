import './button.css'

const Button = ({ src, label }) => {
    return (
        <>
            <a href={src} className="button" >{label}</a> 
        </>
    );
};

export default Button;