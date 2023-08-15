import Button from "../../modules/Button"

const ResultNew = () => {
    return (
        <>
            <h1>Nyt skak resultat</h1>
            <h3>Opret resultat</h3>
            <label htmlFor="spiller">Spiller&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input id="spiller" type="number" />
            <br />
            <label htmlFor="modSpiller">Modspiller&nbsp;</label>
            <input id="modSpiller" type="number" />
            <p>
                <Button label="Opret" src="./results" />
            </p>
        </>
    );
};

export default ResultNew;