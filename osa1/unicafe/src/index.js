import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({ text, counter }) => <div>{text} {counter}</div>

const DisplayStats = ({good, bad, neutral}) => {
    let total = good + bad + neutral
    let dividend = good - bad
    let average = (good -bad)/total
    let percGood = (good/total)*100

    if (average !== average) {
        average = 0
    }
    if (percGood !== percGood) {
        percGood = 0
    }
    
    return (
        <div>
            All: {total}
            <br />
            Average: {average}
            <br />
            Positive: {percGood} %
        </div>
    )
    }

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Header = () => <h1>Give Feedback</h1>
const Statistics = () => <h1>Statistics</h1>

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const increaseGoodByOne = () => setGood(good + 1)
    const increaseNeutralByOne = () => setNeutral(neutral + 1)
    const increaseBadByOne = () => setBad(bad + 1)

    return (
        <div>
            <Header />
            < Button
                handleClick={increaseGoodByOne}
                text='good'
            />
            <Button
                handleClick={increaseNeutralByOne}
                text='neutral'
            />
            <Button
                handleClick={increaseBadByOne}
                text='bad'
            />
            <Statistics />
            <Display text="Good: " counter={good} />
            <Display text="Neutral: " counter={neutral} />
            <Display text="Bad: " counter={bad} />
            <DisplayStats good={good} bad={bad} neutral={neutral} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)