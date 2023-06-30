import './App.css'
// import { Title } from './components/title/Title'
// import { Person } from './components/person/Person'
// import { PersonList } from './components/personList/PersonList'
// import { Status } from './components/status/Status'
// import { Heading } from './components/heading/Heading'
// import { Oscar } from './components/oscar/Oscar'
import { Button } from './components/button/Button'
import { Box } from './components/context/Box'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Input } from './components/input/Input'
import { Counter } from './components/state/Counter'

import { LoggedIn } from './components/state/LoggedIn'
import { User } from './components/state/User'


function App() {
  // const personName = {
  //   first: 'Marcus',
  //   last: 'Augusto',

  // }

  // const nameList = [
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne',
  //     age: 88
  //   },
  //   {
  //     first: 'Clark',
  //     last: 'Ken',

  //   },
  //   {
  //     first: 'Aquiles',
  //     last: 'We',
  //     age: 100
  //   },
  //   {
  //     first: 'Test3',
  //     last: 'W',
  //     age: 0
  //   },
  //   {
  //     first: 'Jiuiu',
  //     last: 'Wayne',
  //     age: 200
  //   },
  //   {
  //     first: 'jajssjasas',
  //     last: 'sadasdv',
  //     age: 1999
  //   },
  // ]

  // return (
  //   <>
  //     <div>
  //       <Title name="Welcome Vite" messageCount={90} isLoggeIn={false} />
  //       <Title name="Welcome Vite" isLoggeIn={true} />
  //     </div>
  //     <hr />

  //     <Person name={personName} />
  //     <hr />
  //     <PersonList names={nameList} />
  //     <hr />

  //     <Status status='loading' />
  //     <hr />
  //     <Status status='sucess' />
  //     <hr />
  //     <Status status='error' />
  //     <hr />
  //     <div className='App' >
  //       <Status status='loading' />
  //       <Heading>Este component permite digitar entre o Heading Component</Heading>
  //       <Oscar>
  //         <Heading>O Componente Oscar permite criar um Filho como componete entre suas tag de componente</Heading>
  //       </Oscar>
  //     </div>


  return (
    <>


      <div className='App'>
        <Button handleClick={
          (event, id) => {
            console.log
              ('Button clicked', event, id)

          }} />
      </div>
      <br />
      <div>
        <Input value='' handleChange={
          (event) => console.log(event)} />
      </div>
      <br />

      <LoggedIn />
      <User />
      <Counter />

      <ThemeContextProvider>
        <Box />

      </ThemeContextProvider>



    </>
  )
}

export default App
