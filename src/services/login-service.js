import { getApiDomain } from '../config';

export function postLoginUser(user, route) {
  const apiUrl = `${getApiDomain()}${route}`;

  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
}
