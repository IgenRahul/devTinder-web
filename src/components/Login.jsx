import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("bhidu1@gmail.com");
  const [password, setPassword] = useState("Bhidu@123");

  const handler = async () => {
    try {
      await axios.post(
        "http://localhost:1111/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email Id</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="card-actions justify-center my-2">
            <button className="btn btn-primary" onClick={handler}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
