import Button from "../../modules/Button"

import React from 'react';
import Form from '../../modules/Form';

const skakStillingEntity = {
    id: 1,
    turnering: 'Stormestrenes skak turnering',
    spillerNavn: 'Mette',
    spillerPoint: 1,
    modspillerNavn: 'Jesper',
    modspillerPoint: 0
}


const ResultNew = () => {
    return (
        <>
            <h1>Nyt skak resultat</h1>
            <h3>Opret resultat</h3>

            <div>
                <Form
                    entity={skakStillingEntity}
                />
            </div>

            <p>
                <Button label="Opret" src="results" />
            </p>
        </>
    );
};

export default ResultNew;