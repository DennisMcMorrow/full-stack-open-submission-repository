import { useState } from 'react'

const Header = ({header}) => 
    <div>
      <h1>{header}</h1>
    </div>

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Button = (props) => 
  <button onClick={props.onClick}>
    {props.text}
  </button>

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text='all' value={good + neutral + bad} />
        <StatisticLine text='average' value={(good - bad)/(good + neutral + bad)} />
        <StatisticLine text='positive' value={((good/(good + neutral + bad))*100) + ' %'} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const header1 = 'give feedback'
  const header2 = 'statistics'
  

  return (
    <div>
      <Header header={header1} />
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <Header header={header2} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
