import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => <button onClick={props.onClick}>{props.text}</button>

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)
  const increaseCounter = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }
  const decreaseCounter = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseCounter} text="plus"/>
      <Button onClick={decreaseCounter} text="minus"/>
      <Button onClick={setToZero} text="zero"/>
    </div>
  )
}

export default App


