import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({ text, counter }) => <div>{text} {counter}</div>

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
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)