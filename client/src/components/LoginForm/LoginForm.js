// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoginForm.css";
// // import { FaLock, FaAt } from "react-icons/fa";

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const { email, password } = formData;
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         "https://edconnect-nine.vercel.app/api/auth/login",
//           body: JSON.stringify({
//             email,
//             password,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful", data);
//         // Redirect or handle successful login
//         navigate("/dashboard", { state: { email } }); // Pass email as state
//       } else {
//         console.error("Login failed", data);
//         // Handle login failure, display error message, etc.
//       }
//     } catch (error) {
//       console.error("Login error", error);
//     }
//   };

//   return (
//     <div className="wrapper">
//       <div className="container">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-box">
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={handleChange}
//               placeholder="Email"
//               required
//             />
//             {/* <FaAt className='icon'/> */}
//           </div>
//           <div className="input-box">
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={handleChange}
//               placeholder="Password"
//               required
//             />
//             {/* <FaLock className='icon'/> */}
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch('https://components-minor.onrender.com/api/login', {
    // const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      credentials: "include", // Include if you're using cookies or sessions
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);

    if (data.user) {
      // localStorage.setItem('token', data.user)
      alert("Login successful");
      window.location.href = "https://edconnect-dashboard-blond.vercel.app/";
    } else {
      alert("Please check your username and password");
    }
  }

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={loginUser}>
          <div className="input-box">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="input-box">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
