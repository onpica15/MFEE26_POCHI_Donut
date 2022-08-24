import { Fragment } from 'react';

function H2(prop) {
  const { title, Entitle } = prop;
  return (
    <div className="pt-2 pb-5">
      <p className="bingH6 text-center">{Entitle}</p>
      <h2 className="bingH2 text-center ">{title}</h2>
    </div>
  );
}

export default H2;
