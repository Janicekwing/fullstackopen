const Notification = ({ message, statusColor }) => {
    if (message === null) {
      return null
    }
  
    if (statusColor === 'green') return <div className="status success"> {message} </div>
    return <div className="status fail"> {message} </div>
  }
  
  export default Notification