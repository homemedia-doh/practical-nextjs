import { fetchGET } from './fetch-api';

export async function getApplicationDetail() {
  return await fetchGET({ url: 'api/application', method: 'GET' })
}