const Filter = (props) => {
    return <div> search by name: <input value={props.search} onChange={props.filterContacts}/></div> 
}


export default Filter