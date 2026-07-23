const Course = (props) => {
  console.log("props are:", props)
  console.log("course name is:", props.course.name)

  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total total={props.course.parts.reduce((acc, part) => acc + part.exercises, 0)} />
    </div>
  )
}



const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => {
  console.log("content", props)
  return(
    <div>
      {
        props.parts.map(
          (part) =>
          <Part part={part} />
        )
      }
    </div>
  )
}

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => <p>Total exercises {props.total}</p>

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {
      courses.map(
        (course) =>
        <Course key={course.id} course={course} />
      )
    }
    </div>
  )
}


export default App