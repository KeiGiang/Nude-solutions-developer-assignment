import React from 'react'
import { TableRow, TableCell } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteItem } from '../api/insuredItemsApi'
import { formatCentValues } from '../utils/money-formatter';

const CustomTableRow = ({ data, onDeleteSuccess }) => {
  const { id, name, valueCents } = data

  const removeItem = () => {
    deleteItem(id)
      .then(_response => onDeleteSuccess(id))
      .catch(_err => alert("Error deleting item"))
  }

  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>{name}</TableCell>
      <TableCell>${formatCentValues(valueCents)}</TableCell>
      <TableCell><DeleteIcon onClick={removeItem} /></TableCell>
    </TableRow>
  )
}
 export { CustomTableRow }
