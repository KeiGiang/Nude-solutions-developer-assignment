import axios from 'axios';

export const getAllItems = async () => await axios.get('/contentItem');

export const getItemById = async id => await axios.get(`/contentItem/${id}`)
