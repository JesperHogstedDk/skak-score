import React, { Suspense } from 'react';
import { Link } from "react-router-dom";

import Loading from "../../modules/Loading";
import TableList from "../../modules/TableList";
import useFetch from "../../modules/useFetch";

const SkakList = () => {
  const { skaks } = useFetch('skak')

  return (
    <Suspense fallback={<Loading />}>
      <TableList
        data={skaks}
        fieldFormatter={{
          turnering: (turnering, dataRow) => [
            <Link
              to={`/result-new/${dataRow.id}`}
              key='1'
            >
              edit
            </Link>,
            <span key="2">
              &nbsp;{
                turnering
              }
            </span>
          ],
          dateCreated: date => new Date(date).toLocaleString()
        }}
      />
    </Suspense>
  );
};

export default SkakList;