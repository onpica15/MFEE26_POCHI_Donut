import React from 'react';
import Button from '@mui/material/Button';

function MainButton(props) {
  const { text, to } = props;

  return (
    <>
      <Button variant="contained" >
        {text}
      </Button>
    </>
  );
}

export default MainButton;
