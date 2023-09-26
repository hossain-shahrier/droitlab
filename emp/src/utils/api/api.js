// utils/api.js

import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const fetchEmployees = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/employees`);
        return response.data.employees;
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
    }
};

export const addEmployee = async (employeeData) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/employee', employeeData);
        return response; 
    } catch (error) {
        throw error;
    }
};