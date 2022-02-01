import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../helpers/fetchService';
import { getQueryVariable } from '../utils/utils';

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const getToken = async () => {
        const code = getQueryVariable('code') || '';
        const res = await getAccessToken(code);

        window.localStorage.setItem('spotify', JSON.stringify(res));
        navigate('/');
      };

      getToken();
    } catch (error) {
      console.error('Error while getting access token: ', error);
    }
  }, []);

  return <h1>Login test</h1>;
};

export default Redirect;
