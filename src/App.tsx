import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Wrapper, Wallpaper, Column, Button, Paragraph } from '../';
import './App.css'

// no exported Page component?!

function App() {
  const [count, setCount] = useState(0)

  return (
    <Wrapper>
      <Column>
        <Paragraph>
        By wrapping html, each component is augmented for building accessible experiences across screens.
        </Paragraph>
        <Paragraph>
         A simple page may look like this with the default design settings.
        </Paragraph>
      </Column>
      <Column>
      <Button>Click me</Button>
      </Column>

    <Wallpaper />
  </Wrapper>
  )
}

export default App
