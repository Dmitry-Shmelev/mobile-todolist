import { LOCAL_URL } from '../constants';

export * from './Auth';
export * from './Validator';

export const apiURL = url => LOCAL_URL + url;

