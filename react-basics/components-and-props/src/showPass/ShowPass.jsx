// import { useState } from "react";

// import { useState } from "react";

// const ShowPass = () => {
//   const [pass, setPass] = useState("");
//   const [showPass, setShowPass] = useState(false)

//   function handleInp(e) {
//     setPass(e.target.value);
//   }

//   function handleClick() {
//     setShowPass(!showPass)
//   }

//   return (
//     <>
//       <input type={showPass ? "text" : "password"} value={pass} onChange={handleInp} />

//       <button onClick={handleClick}> {showPass ? "Hide Password" : "Show Password"} </button>
//     </>
//   );
// };

// export default ShowPass;

// const ShowPass = () => {
//   const [password, setpassword] = useState("");
//   const [showPass, setShowPass] = useState(false);

//   function handleClick() {
//     setShowPass(!showPass);
//   }

//   function handleInp(e) {
//     setpassword(e.target.value);
//   }

//   return (
//     <>
//       <input
//         type={showPass ? "text" : "password"}
//         value={password}
//         onChange={handleInp}
//       />
//       <button onClick={handleClick}>
//         {" "}
//         {showPass ? "Hide Password" : "Show Password"}{" "}
//       </button>
//     </>
//   );
// };

// export default ShowPass;
