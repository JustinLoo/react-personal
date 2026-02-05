import React from 'react';

const Column = ({ children, size }) => {
  const columnClass = `col-md-${size} col-12`;  // Ensure columns are full-width on smaller screens
  return <div className={columnClass}>{children}</div>;
};

export default Column;
