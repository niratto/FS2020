import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({ text, data }) => <div>{text} {data}</div>

const DisplayStats = ({ good, bad, neutral }) => {
    let total = good + bad + neutral
    let average = (good - bad) / total
    let percGood = (good / total) * 100

    if (average !== average) {
        average = 0
    }
    if (percGood !== percGood) {
        percGood = 0
    }
    percGood += " %"

    if (total > 0)
    return (
        <>
            <Display text="Good: " data={good} />
            <Display text="Neutral: " data={neutral} />
            <Display text="Bad: " data={bad} />
            <Display text="All: " data={total} />
            <Display text="Average: " data={average} />
            <Display text="% Positive: " data={percGood} />
        </>
    )
    else
    return (
        <>
        <p>No feedback given</p>
        </>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Header = () => <h1>Give Feedback</h1>
const StatisticsHeader = () => <h1>Statistics</h1>

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
            <StatisticsHeader />
            <DisplayStats good={good} bad={bad} neutral={neutral} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)