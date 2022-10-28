import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { http } from '@utils/constants';
import { appConfig } from '@utils/configs';

const axiosConfig = axios.create({
    baseURL: appConfig.API_URL,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default axiosConfig;
