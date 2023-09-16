import React from 'react';
import { useParams, useNavigate } from "react-router-dom";

import RenderData from "../../modules/RenderData";
import Form from '../../modules/Form';
import useFetch, { getUrl } from "../../modules/useFetch";
import { isNullOrUndefined } from "../../modules/strings";

const ResultNew = () => {
    const { skakId } = useParams();
    const { skak = {
        turnering: '',
        spillerNavn: '',
        spillerPoint: '',
        modSpillerNavn: '',
        modSpillerPoint: '',
    } } = useFetch('skak/' + skakId, isNullOrUndefined(skakId));

    const navigate = useNavigate();

    return (
        <>
            <h1>Nyt skak resultat</h1>
            <h3>Opret resultat</h3>
            <RenderData
                data={skak}
            />
            <div>
                <Form
                    entity={skak}

                    onSubmitHandler={async newSkak => {
                        console.log({ newSkak })
                        console.log('url:' + getUrl('skak'));
                        const response = await fetch(getUrl('skak'), {
                            method: isNullOrUndefined(newSkak.id) ? 'POST' : 'PUT',
                            body: JSON.stringify(newSkak),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });

                        if (response.ok) {
                            await response.json()
                            navigate('/skak-list')
                        }
                    }}
                    onDeleteHandler={async (id) => {
                        if (!isNullOrUndefined(id)) {
                            await fetch(getUrl('skak'), {
                                method: 'DELETE',
                                body: JSON.stringify({ id }),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });

                            navigate('/skak-list')
                        }
                    }}
                />
            </div>
        </>
    );
};

export default ResultNew;