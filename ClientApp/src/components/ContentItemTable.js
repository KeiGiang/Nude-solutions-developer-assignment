import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

import { formatCentValues } from '../utils/money-formatter';

const ContentItemTable = ({ category, totalValueCents, data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Insured items table">
        <TableHead sx={{ backgroundColor: "#D0D0D0" }}>
          <TableRow>
            <TableCell>{category}</TableCell>
            <TableCell>${formatCentValues(totalValueCents)}</TableCell>
            <TableCell>icon section</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map(
            item => (
              <TableRow
                key={`${item.category}-${item.name}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{item.name}</TableCell>
                <TableCell>${formatCentValues(item.valueCents)}</TableCell>
                <TableCell>Delete icon</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { ContentItemTable }
