import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
	const [data, setData] = useState({
		password: "",
		username:"",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/auth";
			const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data.token);
			localStorage.setItem("user", JSON.stringify({ username: data.username }));
			window.location = "/dashboard";
			// navigate("/dashboard");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-500">
			<div className="max-w-4xl w-full flex rounded-lg shadow-lg overflow-hidden">
				<div className="w-1/2 bg-gray-200 p-8 flex flex-col justify-center items-center">
					<img src="/images/sign.jpeg" alt="Sign In" className="mb-6 w-full h-auto" />
					<p className="text-xl text-gray-700 text-center">
						You have to get lost before you find yourself.
					</p>
					<p className="text-gray-500 text-center mt-2">- MARGO, PAPER TOWNS</p>
				</div>
				<div className="w-1/2 bg-white p-8">
					<h2 className="text-2xl text-black font-bold mb-6">Sign In</h2>
					<form onSubmit={handleSubmit} className="space-y-4">
					<div>
							<label htmlFor="username" className="block text-gray-700">Username</label>
							<input
								type="username"
								id="username"
								name="username"
								placeholder="Your username"
								className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
								value={data.username}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label htmlFor="password" className="block text-gray-700">Password</label>
							<input
								type="password"
								id="password"
								name="password"
								placeholder="Password"
								className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
								value={data.password}
								onChange={handleChange}
								required
							/>
						</div>
						{error && <div className="text-red-500">{error}</div>}
						<button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300">Log In</button>
					</form>
					<p className="mt-4 text-center text-gray-500">
						Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Signin;
