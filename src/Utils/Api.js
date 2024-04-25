import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; // Base URL of your API

export const predict = async (requestData) => {
  try {
    const response = await axios.post(`${BASE_URL}/predict/`, requestData);
    return response.data;
  } catch (error) {
    throw new Error('Error predicting:', error);
  }
};




export const storeData = async (name, phoneNo, dataToStore) => {
    try {
      // Construct the path to the user's node
      const userPath = `${name}_${phoneNo}`;
  
      // Push the new data to the user's node
      const response = await axios.post(`https://ac-calculator-ca49d-default-rtdb.firebaseio.com/Users/${userPath}.json`, dataToStore);
      return response.data;
    } catch (error) {
      throw new Error('Error storing data:', error);
    }
  }
  
