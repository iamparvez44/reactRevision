import { useState } from "react";
import Count from "./CharacterCount/Count";
import Mainpage from "./Components/Mainpage";
import Navbar from "./Components/Navbar";
import Counter from "./Counter/Counter";
import DisplayName from "./displayName/DisplayName";
import LikeBtn from "./likeBtn/LikeBtn";
import Basics from "./Props/Basics";
import FuncPassAsProps from "./Props/FuncPassAsProps";
import Que1 from "./Props/Que1";
import Que2 from "./Props/Que2";
import Skills from "./Props/Skills";
import QueA1 from "./propsAndState/QueA1";
// import ShowPass from "./showPass/ShowPass";
import Toggle from "./Toggle/Toggle";
import Calculator from "./calculator/Calculator";
import "./index.css"
import UserInfo from "./formHandling/UserInfo";
import PracticeQue1 from "./PracticeQue1/PracticeQue1";
import Practice2 from "./darkMode&liteMode/Practice2";


// const user = {
//       name : "Parvez",
//       age: 27,
//       city: "delhi",
//     }

// function handleClick(){
//   console.log("I am Clicked")
// }

// const user = {
//         name: "Parvez",
//         age: 28,
//         city: "Delhi"
//        };

// const skills = ["JavaScript", "React", "Node.js", "MongoDB"];
// const isLoggedIn = false;


const App = () => {

  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count+1)
  }

  console.log(count);

  return (
    <>
      {/* <Navbar/>
      <Mainpage/> */}
      {/* <Basics  user = {user} /> */}
      {/* <FuncPassAsProps  handleClick = {handleClick} /> */}
      {/* <Que1/> */}

      {/* <Counter/> */}
      {/* <Toggle/> */}

      {/* <DisplayName/> */}
      {/* <ShowPass/> */}
      {/* <Count/> */}
      {/* <LikeBtn/> */}

      {/* <Que2 user = {user} /> */}

      {/* <Skills skills = {skills} user = {isLoggedIn} /> */}

      {/* <QueA1 data = {count} />
      <button onClick={handleClick} >Parante Btn</button> */}

      {/* <Calculator/> */}

      {/* <UserInfo/>   */}

      {/* <PracticeQue1 />   */}
      <Practice2 />

    </>
  );
};

export default App;
