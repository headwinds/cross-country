import { getApiDomain } from '../config';
import { fetchRetry } from '../utils/fetch-util';

export function postLoginUser(user, route = '/login', bearerToken = null) {
  const apiUrl = `${getApiDomain()}${route}`;
  console.log(apiUrl);
  console.log('sending user: ', user);
  // include the bearer token if it exists
  return fetchRetry(apiUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      mode: 'cors',
      ...(bearerToken && { Authorization: `Bearer ${bearerToken}` }),
    },
    body: JSON.stringify(user),
  });
}
