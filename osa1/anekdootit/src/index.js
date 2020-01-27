import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const ShowVotes = (props) => {
    let maxVal = -1
    let maxKey = -1
    for (let i=0; i<6; i++) {
        if (props.votes[i] > maxVal) {
            maxVal = props.votes[i]
            maxKey = i
        }
    }

    if (maxKey >= 0)
    return ( <div>
    {props.anecdotes[maxKey]}
    <br />
        Has {maxVal} votes
    </div>
    )
    
    
    
    return (null)
}

const App = (props) => {
    let maxVal = Object.values(props.anecdotes).length
    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState({})
    let voteCount = vote[selected]

    if (isNaN(voteCount))
        voteCount = 0

    const anecdoteIndex = () => setSelected(
        function getRandomArbitrary(min, max) {
            return Math.floor(Math.random() * maxVal);
        }
    )

    const voter = e => {
        setVote({
            ...vote,

            [selected]: voteCount + 1
        })
    }

    console.log(selected, vote)


    return (
        <div>
            {props.anecdotes[selected]}
            <div>Has {voteCount} votes</div>
            <div>
                <button onClick={voter}>Vote</button>
                < Button
                    handleClick={anecdoteIndex}
                    text='seuraava sutkautus'
                />
            </div>
            <br />
            <ShowVotes votes={vote} anecdotes={anecdotes} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
