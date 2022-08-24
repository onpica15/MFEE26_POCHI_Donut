import React, { useState } from 'react';

function MemberHistoryList(props) {
  const { created_at, pay_price, total_quantity, sid } = props.detail;
  //   const { date, setDate } = useState;
  //   const raWdate = { created_at };
  //   const slicedate = created_at.slice(0, 10);
  //   setDate(slicedate);
  return (
    <>
      <tr>
        <th scope="row">{props.num + 1}</th>
        <td>{total_quantity}</td>
        <td>{pay_price}</td>
        <td>{created_at.slice(0, 10)}</td>
      </tr>
    </>
  );
}

export default MemberHistoryList;
