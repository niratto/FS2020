import React from 'react'

const Part = ({ name, exercises }) => {
    return (
        <p>
            {name} {exercises}
        </p>
    )
}

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    return (
        props.parts.map(part =>
            <div key={part.id}>
                <Part name={part.name} exercises={part.exercises} />
            </div>
        )
    )
}

const Total = (props) => {
    const total = props.parts.reduce((total, part) => total + part.exercises, 0)

    return (
        <div><b>Total of {total} exercises</b></div>
    )
}

const Course = (props) => {
    
    return (

        props.courses.map(course =>
            <div key={course.id}>
                <Header course={course.name} />
                <Content parts={course.parts} />
                <Total parts={course.parts} />
            </div>
        )
    )
}

export default Course