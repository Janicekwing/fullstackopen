import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Form from './components/Form'
import Filter from './components/Filter'
import personService from './services/contacts'


const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newID, setID] = useState(5)
  const [showAll, setShowAll] = useState(true)
  const [search, setSearch] = useState('')

  useEffect( () => {
      const eventHandler = response => {
        setPersons(response.data)
      }
      const data = axios.get("http://localhost:3001/persons")
      data.then(eventHandler)
    }
  ,[])
 
  const addName = event => {
    event.preventDefault()

    const exists = persons.some(person =>
      person.name === newName
    )
    if (exists) { 
      alert(`${newName} is taken!`) 
      return
    }
    
    const personObject = {
      name: newName,
      number: newNumber,
      id: newID
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      })

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const filterContacts = (event) => {
    setSearch(event.target.value)
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
        
      <Filter 
        search={search}
        filterContacts={filterContacts}
      />
      
      <h2>Add Contact</h2>
      <Form 
        addName={addName} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <Person key={person.id} name={person.name} number={person.number}/>
        )}
      </ul>
    </div>
  )
}

export default App