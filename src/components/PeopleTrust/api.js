import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.com/v3.1/name';

export const fetchCountry = async ( name ) => {
  try {
    const { data } = await axios.get( `/${name}` );
    return data;
  } catch ( error ) {
    console.error( error.message );
  }
};
