import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>Vite + React</h3>
      <Todo task="learn react" isDone={true}></Todo>
      <Todo task="Explore Core concepts" isDone={false}></Todo>
      <Todo task="Try JSx"></Todo>
      {/* <Device name="Laptop" price="30000"></Device>
      <Device name="Mobile" price="15000"></Device>
      <Device name="Watch" price="1200"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}
const { grade, score } = { grade: "7", score: "99" };

function Student({ grade, score }) {
  console.log(grade, score);
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Class: {grade} </p>
      <p>Score: {score} </p>
    </div>
  );
}

function Device(props) {
  console.log(props);
  return (
    <h2>
      This Device:{props.name} price:{props.price}{" "}
    </h2>
  );
}

function Person() {
  const age = 25;
  const money = 20;
  const person = {
    name: "sakib",
    age: 12,
  };
  return (
    <h3>
      I am a {person.name} with age{age} I have {money} taka in my pocket{" "}
    </h3>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding:</p>
    </div>
  );
}

export default App;
