import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {
    return (
        <p>
            {props.part} {props.ex}
        </p>
    )
}

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    let first = props.parts[0];
    let second = props.parts[1];
    let third = props.parts[2];

    return (
        <>
        <Part part={first.name} ex={first.exercises} />
        <Part part={second.name} ex={second.exercises} />
        <Part part={third.name} ex={third.exercises} />
        </>
    )

}

const Total = (props) => {
    return (
        <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]

  return (
    <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total
            exercises1={parts[0].exercises}
            exercises2={parts[1].exercises}
            exercises3={parts[2].exercises}
        />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))