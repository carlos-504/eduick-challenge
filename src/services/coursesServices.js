import api from './api.js';
import { toast } from 'react-toastify';

export const getCourses = async () => {
  try {
    const response = await api.get('/courses');

    return response.data;
  } catch (err) {
    toast.error('Não foi possível carregar as propostas, tente novamente');
  }
};
