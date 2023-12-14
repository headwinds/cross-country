import * as React from 'react';
import { getWindow, getNavigator, getDocument } from '../utils/server-side-util';

// safe to delete right?!

/*
export const useMyHook = () => {
  let [{
    counter
  }, setState] = React.useState({
    counter: 0
  })

  React.useEffect(() => {
    const screenWindow = getWindow()
    let interval = screenWindow?.setInterval(() => {
      counter++
      setState({counter})
    }, 1000)
    return () => {
      screenWindow?.clearInterval(interval)
    }
  }, [])

  return counter
}
*/
