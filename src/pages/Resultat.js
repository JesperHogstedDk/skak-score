import Button from "../modules/Button";


const Resultat = () => {
    return (
        <>
            <p>
                <Button label="Opret nyt resultat" />
            </p>

            <h1>Resultat oversigt</h1>
            <table>
                <tr><th>Spiller</th><th>Modspiller</th><th>Stilling</th><th>Dato</th><th>Se partiet</th></tr>
                <tr><td>Mette</td><td>Jesper</td><td>remi</td><td>2023-08-02</td><td><button>Se</button></td></tr>
                <tr><td>Mette</td><td>Jesper</td><td>1-0</td><td>2023-08-01</td><td><button>Se</button></td></tr>
            </table>
        </>
    );
};

export default Resultat;