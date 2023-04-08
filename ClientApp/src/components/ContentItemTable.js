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
import { CustomTableRow } from './CustomTableRow';

const ContentItemTable = ({ category, totalValueCents, data, onDeleteSuccess }) => {
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
              <CustomTableRow
                key={`${item.category}-${item.name}`}
                data={item}
                onDeleteSuccess={onDeleteSuccess}
              />
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { ContentItemTable }
