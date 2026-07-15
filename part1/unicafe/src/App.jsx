import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.onClick}>
    {props.text}
  </button>
}

const StatLine = (props) => {
  return <div> {props.text} {props.stat} </div> 
}

const Statistics = ({good,neutral,bad}) => {
  return <div> 
    <StatLine text = "good" stat = {good} /> 
    <StatLine text = "neutral" stat = {neutral} />
    <StatLine text = "bad" stat = {bad} />
    <StatLine text = "all" stat = {good + neutral + bad} />
    <StatLine text = "average" stat = {(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)} />
    <StatLine text = "positive" stat = {good/(good+neutral+bad)} />
  </div>
}

const App = () => {
  // save clicks of each button to its own State
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  if (good == 0 && neutral == 0 && bad == 0) {
    return (
      <div>
        <h3> give feedback </h3>
        <Button onClick={() => setGood(good+1)} text="good" />
        <Button onClick={() => setNeutral(neutral+1)} text="neutral" />
        <Button onClick={() => setBad(bad+1)} text="bad" />

        <h3> statistics </h3>
        <div> No feedback provided </div>
      </div>
    )
  }

  return (
    <div>
      <h3> give feedback </h3>
      <Button onClick={() => setGood(good+1)} text="good" />
      <Button onClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button onClick={() => setBad(bad+1)} text="bad" />

      <h3> statistics </h3> 
      <Statistics good = {good} neutral = {neutral} bad = {bad} /> 
    </div>
  )
}

export default App