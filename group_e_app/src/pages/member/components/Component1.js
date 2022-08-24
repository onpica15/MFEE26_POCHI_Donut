import { Button } from 'bootstrap';
import React from 'react';
import { useRef } from 'react';

function Component1() {
  const bbbb = useRef('');
  return (
    <button
      ref={bbbb}
      className="ProjectButton"
      onClick={() => {
        console.log('123');
      }}
    >
      a
    </button>
  );
}

export default Component1;
