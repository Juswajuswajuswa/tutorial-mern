import { Link } from "react-router-dom";
import apiRequest from "../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import apiRequest from "../lib/apiRequest";
// import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const formData = new FormData(e.target);
      const inputs = Object.fromEntries(formData);
      // console.log(inputs)
      const {email, password} = inputs
      const res = await apiRequest.post('/auth/login', {
        email,
        password
      })
      
      const data = await res.data

      setError(null)
      console.log(data)
      navigate('/')
    } catch (error) {
      setError(error.response.data.message)
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          name="password"
        />
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounder-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? "loading..." : "Sign In"}
        </button>
        {error && <span className="text-red-600">{error}</span>}
      </form>

      <div className="flex gap-2 mt-5">
        <p>No account yet?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
    </div>
  );
}
