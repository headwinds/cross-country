// https://blog.bearer.sh/add-retry-to-api-calls-javascript-node/
export const fetchRetry = (url, options = {}, retries = 10, backoff = 1000) => {
  /*
    I need to confirm what exactly the server is returning for status code
    example from our login error: response.statusCode === 500 || response?.error?.code === '500'
    It seems like we may not see status but instead we see either statusCode or code within an error object

    Our response does have response.status which in most cases is 200 ;-D
  */
  const retryCodes = [408, 500, 502, 503, 504, 522, 524];
  return fetch(url, { method: 'POST' })
    .then(response => {
      console.log('response: ', response);
      if (response?.ok) return response;
      if (retries > 0 && retryCodes.includes(response.status)) {
        console.log('trying....: ', response);
        setTimeout(() => {
          return fetchRetry(url, options, retries - 1, backoff * 2); /* 3 */
        }, backoff);
      } else {
        console.log('error....: ', response.status);
        throw new Error(response);
      }
    })
    .catch(err => console.error(err));
};

export default { fetchRetry };
