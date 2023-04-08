import React, { useState } from 'react'
import { Button, Box, MenuItem, TextField, Select } from '@mui/material'
import { createItem } from '../api/insuredItemsApi';

const categories = [
  "Electronics",
  "Clothing",
  "Kitchen",
]

const InsuredItemInput = ({ addItemSuccess }) => {
  const [itemName, setItemName] = useState();
  const [itemValue, setItemValue] = useState();
  const [itemCategory, setItemCategory] = useState(categories[0]);

  const addItem = (event) => {
    event.preventDefault();
    createItem({
      name: itemName,
      valueCents: itemValue,
      category: itemCategory
    })
      .then(response => addItemSuccess(response.data))
      .catch(_err => alert("Error adding item"))

    resetForm()
  }

  const resetForm = () => {
    setItemName("")
    setItemValue(undefined)
    setItemCategory(categories[0])
  }

  return (
    <Box
      autoComplete='off'
      component='form'
      noValidate
      onSubmit={addItem}
      sx={{
        '& > :not(style)': { m: 1, width: "100%" },
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-evenly'
      }}
    >
      <TextField
        id="item-name"
        label="Item Name"
        variant="standard"
        value={itemName}
        onChange={event => setItemName(event.target.value)} />
      <TextField
        id="item-value"
        label="Value"
        variant="standard"
        value={itemValue}
        onChange={event => setItemValue(event.target.value)} />
      <Select
        id="item-category"
        label="Category"
        variant="standard"
        value={itemCategory}
        onChange={event => setItemCategory(event.target.value)}>
        {categories.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <Button type="submit" variant="text">Add</Button>
    </Box>
  )
}

export { InsuredItemInput, categories }
