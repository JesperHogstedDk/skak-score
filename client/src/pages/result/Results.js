import {Suspense, lazy} from "react";

import Button from "../../modules/Button";
import Loading from "../../modules/Loading";

const SkakList = lazy(() => import('./SkakList'));

const Results = () => {
    return (
        <>
            <p>
                <Button src="/result-new" label="Opret nyt resultat" />
            </p>

            <h1>Resultat oversigt</h1>
            <Suspense fallback={<Loading />}>
                <SkakList />
            </Suspense>
        </>
    );
};

export default Results;