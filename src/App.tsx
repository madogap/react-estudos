import './App.css'
import { Title } from './components/title/Title'
import { Person } from './components/person/Person'
import { PersonList } from './components/personList/PersonList'
import { Status } from './components/status/Status'
import { Heading } from './components/heading/Heading'
import { Oscar } from './components/oscar/Oscar'
import { Button } from './components/button/Button'
import { Input } from './components/input/Input'

import { LoggedIn } from './components/state/LoggedIn'




function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Ken',
    },
    {
      first: 'Aquiles',
      last: 'We',
    },
    {
      first: 'Test3',
      last: 'W',
    },
    {
      first: 'Jiuiu',
      last: 'Wayne',
    },
    {
      first: 'jajssjasas',
      last: 'sadasdv',
    },
  ]

  return (
    <>
      <Title name="Welcome Vite" messageCount={35} isLoggeIn={false} />
      <hr />
      <Person name={personName} />
      <hr />
      <PersonList names={nameList} />
      <hr />
      <Status status='loading' />
      <hr />
      <Status status='sucess' />
      <hr />
      <Status status='error' />
      <hr />
      <div className='App'>
        <Status status='loading' />
        <Heading>Placeholder tex</Heading>
        <Oscar>
          <Heading>Oscar goes to Leonardo Dicpario</Heading>
        </Oscar>
      </div>
      <Title name="Welcome Vite" isLoggeIn={false} />
      <div className='App'>
        <Button handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }} />
        <hr />
        <Input value='' handleChange={(event) => console.log(event)} />
      </div>
      
      
      <LoggedIn/>
    </>
  )
}

export default App
