import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimalList from './components/AnimalList/AnimalList'
import AnimalForm from './components/AnimalForm/AnimalForm'
import FavoriteAnimal from './components/FavoriteAnimal/FavoriteAnimal'
import StarWars from './components/StarWars/StarWars'

const FavoriteAnimalContext = createContext();

function App() {
  const [count, setCount] = useState(0)
  const [greeting, setGreeting] = useState('')
  const [animalList, setAnimalList] = useState([])
  const [favoriteAnimal, setFavoriteAnimal] = useState('')

  const sayHi = (e: any, greeting = 'Hi!') => {
    console.log(greeting)
    setGreeting(greeting)
  }

  return (
    <>
      <StarWars />
      {/* <FavoriteAnimalContext.Provider value={{setFavoriteAnimal, favoriteAnimal}}>
        <FavoriteAnimal />
        <AnimalForm setAnimalList={setAnimalList} />
        <AnimalList animalList={animalList} />
      </FavoriteAnimalContext.Provider> */}
    </>
  )
}

export default App

export {FavoriteAnimalContext}
