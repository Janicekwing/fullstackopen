import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.onClick}>
    {props.text}
  </button>
}

const Stat = (props) => {
  return <div> {props.text} {props.stat} </div> 
}

const App = () => {
  // save clicks of each button to its own state
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
      <Stat text = "good" stat = {good} /> 
      <Stat text = "neutral" stat = {neutral} />
      <Stat text = "bad" stat = {bad} />
      <Stat text = "all" stat = {good + neutral + bad} />
      <Stat text = "average" stat = {(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)} />
      <Stat text = "positive" stat = {good/(good+neutral+bad)} />
    </div>
  )
}

export default App