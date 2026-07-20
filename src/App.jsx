import './App.css'
import {Routes, Route} from 'react-router-dom'
import Greetings from "./components/Greetings.jsx";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Greetings title='Root Page' message='Try going to paths: greetings, profile and my-hobbies' />} />
      <Route path='/greetings' element={<Greetings title='Greetings Page' message='Hello! Welcome to my first react website' />} />
      <Route path='/profile' element={<Greetings title='Profile Page' message='I am Ekaterina Kazakova, a 3rd year student at Assumption University studing Computer Science' />} />
      <Route path='/my-hobbies' element={<Greetings title='Hobbies Page' message='My hobbies are sketching, gaming and coding' />} />
      <Route path='/*' element={<Greetings title='Error Page!' message='Try going to paths: greetings, profile and my-hobbies' />} />
    </Routes>
  )
}

export default App
