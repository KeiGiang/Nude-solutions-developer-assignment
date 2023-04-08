import axios from 'axios';

export const getAllItems = async () => await axios.get('/contentItem');

export const getItemCategorySummaries = async () => await axios.get('/contentItem/categorySummaries')
