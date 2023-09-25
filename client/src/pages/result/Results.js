import {Suspense, lazy} from "react";

import Button from "../../modules/Button";
import Loading from "../../modules/Loading";

const SkakList = lazy(() => import('./SkakList'));

const Results = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <SkakList />
            </Suspense>
            <p>
                <Button src="/result-new" label="Opret nyt resultat" />
            </p>

        </>
    );
};

export default Results;