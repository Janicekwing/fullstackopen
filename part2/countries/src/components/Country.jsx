const Country = (props) => {
    if (props.countries.length === 0) return "Hun you misspelled the country name"

    if (props.countries.length > 10) return "Too many matches, specify another filter"
    
    if (props.countries.length > 1 && props.countries.length <= 10) {
        return (
        <ul>
            {props.countries.map(country =>
            <li key={country.cca3}> {country.name.common} <button onClick={()=>props.setCountry(country.name.common)}>show</button> </li>
            )}
        </ul>
        )
    }

    if (props.countries.length === 1) {
        return (
        <div>
            <h1> {props.countries[0].name.common} </h1>
            <div> capital: {props.countries[0].capital[0]} </div>
            <div> area: {props.countries[0].area} </div>


            <h3> Languages: </h3>
            <ul>
                {Object.values(props.countries[0].languages).map(language => 
                    <li key={language}> {language} </li>
                )}
            </ul>

            <img 
                src={props.countries[0].flags.svg} 
                alt={`flag of ${props.countries[0].name.common}`}
                style={
                    { 
                        height: '100px',
                        border: '2px solid black'
                    }
                }
            />

        </div>
        )
    }
}

export default Country 