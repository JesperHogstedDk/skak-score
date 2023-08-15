import Button from "../../modules/Button";

const stilling = [
    { spiller: "Mette", modspiller: "Jesper", stilling: "remi", dato: new Date(2023, 8, 1) },
    { spiller: "Mette", modspiller: "Jesper", stilling: "1-0", dato: new Date(2023, 8, 2) },
    { spiller: "Mette", modspiller: "Jesper", stilling: "0-1", dato: new Date(2023, 8, 13) },
];

const Results = () => {
    return (
        <>
            <p>
                <Button src="./result-new" label="Opret nyt resultat" />
            </p>

            <h1>Resultat oversigt</h1>
            <table>
                <thead>
                    <tr><th>Spiller</th><th>Modspiller</th><th>Stilling</th><th>Dato</th><th>Se partiet</th></tr>
                </thead>
                <tbody>
                    {
                        stilling.map((x) =>
                            <tr>
                                <td>{x.spiller}</td><td>{x.modspiller}</td><td>{x.stilling}</td>
                                <td>{x.dato.getFullYear()}-{x.dato.getMonth()}-{x.dato.getDate()}</td><td><button>Se </button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
};

export default Results;