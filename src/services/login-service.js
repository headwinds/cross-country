import { getApiDomain } from '../config';
import { fetchRetry } from '../utils/fetch-util';

export function postLoginUser(user, route) {
  const apiUrl = `${getApiDomain()}${route}`;
  console.log(apiUrl);
  console.log('sending user: ', user);
  return fetchRetry(apiUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'mode': "cors",
    },
    body: JSON.stringify(user),
  });
}
