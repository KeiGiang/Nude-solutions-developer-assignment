import axios from 'axios';

export const getAllItems = async () => await axios.get('/contentItem');

export const getItemCategorySummaries = async () => await axios.get('/contentItem/categorySummaries');

export const createItem = async newItem => await axios.post('/contentItem', newItem);

export const deleteItem = async id => await axios.delete(`/contentItem/${id}`);
