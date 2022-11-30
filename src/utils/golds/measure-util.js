export default function measure({
  event_label,
  event_device,
  event_app,
  event_who,
  event_description,
  event_json,
}) {
  const eventPayload = {
    event_label,
    event_device,
    event_app,
    event_who,
    event_description,
    event_json,
  }
  //const domain = 'https://rocky-ridge-38501.herokuapp.com'
  const domain =
    document.domain === 'localhost'
      ? 'http://localhost:5000'
      : 'https://rocky-ridge-38501.herokuapp.com'
  const endpoint = '/post-event'
  const url = `${domain}${endpoint}`

  const config = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(eventPayload), // body data type must match "Content-Type" header
  }

  return fetch(url, config).then(
    success => {
      console.log('event success: ', success)
    },
    fail => {
      console.log('event fail: ', fail)
    }
  )
}
