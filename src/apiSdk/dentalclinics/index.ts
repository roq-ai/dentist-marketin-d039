import axios from 'axios';
import queryString from 'query-string';
import { DentalclinicInterface, DentalclinicGetQueryInterface } from 'interfaces/dentalclinic';
import { GetQueryInterface } from '../../interfaces';

export const getDentalclinics = async (query?: DentalclinicGetQueryInterface) => {
  const response = await axios.get(`/api/dentalclinics${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createDentalclinic = async (dentalclinic: DentalclinicInterface) => {
  const response = await axios.post('/api/dentalclinics', dentalclinic);
  return response.data;
};

export const updateDentalclinicById = async (id: string, dentalclinic: DentalclinicInterface) => {
  const response = await axios.put(`/api/dentalclinics/${id}`, dentalclinic);
  return response.data;
};

export const getDentalclinicById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/dentalclinics/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDentalclinicById = async (id: string) => {
  const response = await axios.delete(`/api/dentalclinics/${id}`);
  return response.data;
};
