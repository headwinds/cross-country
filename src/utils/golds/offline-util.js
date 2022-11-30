// https://bitsofco.de/bitsofcode-pwa-part-2-instant-loading-with-indexeddb/
export function detechOnline() {
  return navigator.onLine
}
export const getOffline = async requestUrl => {
  const request = new Request(requestUrl)
  return caches.open('golds-cache').then(cache => {
    // do something with cache...
    // cache.match(request).then((response) => console.log(request, response));
    return cache.match(request).then(response => {
      return response.text().then(s => JSON.parse(s))
    })
  })
}
export const putOffline = async (requestUrl, responseData) => {
  const request = new Request(requestUrl)
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const branches = JSON.stringify(responseData?.data?.branches ?? [])
  const response = new Response(branches, options)

  return caches.open('golds-cache').then(cache => {
    // cache.put('/test.json', new Response('{"foo": "bar"}'));
    return cache.put(request, response)
    //return cache.add(request);
  })
}
const Offline = {
  getOffline,
  putOffline,
}
export default Offline
