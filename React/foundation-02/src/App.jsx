import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const shows = [
  {
    id: 1,
    title: "The Component Returns",
    time: "10:00 AM",
    hall: "Hall A"
  },
  {
    id: 2,
    title: "Attack of the Re-render",
    time: "12:30 AM",
    hall: "Hall B"
  },
  {
    id: 3,
    title: "Virtual DOM Nights",
    time: "04:00 AM",
    hall: "Hall C"
  },
];

function App() {

  return (
    <>
    <div>
      <h1>Hello {shows[0].title} from project</h1>
      <h1>Hello from project</h1>
    </div>
    </>
  )
}

export default App
