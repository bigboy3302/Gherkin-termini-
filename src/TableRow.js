import React from 'react';
import TableCell from './TableCell';

const TableRow = ({ english, latvian }) => {
  return (
    <tr>
      <TableCell type="header" content={english} />
      <TableCell type="data" content={latvian} />
    </tr>
  );
};

export default TableRow;
