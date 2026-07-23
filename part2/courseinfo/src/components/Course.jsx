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
  
  
  
 
export default Course