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
    let ex1=props.parts[0];
    let ex2=props.parts[1];
    let ex3=props.parts[2];

    return (
        <p>Number of exercises {ex1.exercises + ex2.exercises + ex3.exercises}</p>
    )
}

const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
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
    }
  
  return (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))