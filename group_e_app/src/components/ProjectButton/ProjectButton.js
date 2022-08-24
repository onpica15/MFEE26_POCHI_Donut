import React from 'react';

const ProjectButton = (prop) => {
  const { text } = prop;
  return (
    <>
      <button className="ProjectButton">{text}</button>
    </>
  );
};

export default ProjectButton;
