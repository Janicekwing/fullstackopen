import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

function App() {
  const [countryList, setCountryList] = useState([])
  const [search, setSearch] = useState('')

  useEffect( () => {
    const eventHandler = response => {
      setCountryList(response.data)
    }
    const data = axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
    data.then(eventHandler)
  }
  ,[])

  const filterCountries = (event) => {
    setSearch(event.target.value)
  }

  const countriesToShow = countryList.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))


  return (
    <div> find country: 
      <form>
        <input value={search} onChange={filterCountries} />
      </form>   

    <Country countries={countriesToShow} />
    </div>
  )
}

export default App
