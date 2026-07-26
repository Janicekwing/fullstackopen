import { useState } from 'react'
import Person from './components/Person'
import Form from './components/Form'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newID, setID] = useState(5)
  const [showAll, setShowAll] = useState(true)
  const [search, setSearch] = useState('')
 
  const addName = (event) => {
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
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    setID(newID + 1)
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