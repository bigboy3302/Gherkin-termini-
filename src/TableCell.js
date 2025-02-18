import React from 'react';

const TableCell = ({ type, content }) => {
  if (type === 'header') {
    return <th scope="row">{content}</th>;
  }
  return <td>{content}</td>;
};

export default TableCell;
