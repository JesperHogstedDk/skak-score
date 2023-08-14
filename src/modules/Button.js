import './button.css'

const Button = ({ src, label }) => {
    return (
        <>
            <a href={src} class="button">{label}</a>
        </>
    );
};

export default Button;