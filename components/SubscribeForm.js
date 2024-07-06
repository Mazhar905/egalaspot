import { useState } from "react";

const SubscribeForm = () => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// Simple email validation
		if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
			setError("Please enter a valid email address.");
			return;
		}

		// Simulate form submission
		setTimeout(() => {
			setMessage("Thank you for subscribing!");
			setError("");
			setEmail("");
		}, 500);
	};

	return (
		<div className="max-w-full bg-red-400">
			<div className="max-w-6xl mx-auto py-20 px-5 flex items-center space-x-8">
				<h2 className="text-3xl font-bold text-left w-2/5 text-white">Subscribe to our Newsletter</h2>
				<form onSubmit={handleSubmit} className="w-3/5 flex items-center space-x-4">
					<div className="flex-grow">
						<label htmlFor="email" className="sr-only">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
							placeholder="Enter your email"
						/>
					</div>
					<button
						type="submit"
						className="flex-none w-1/3 py-2 px-4 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
					>
						Subscribe
					</button>
                    {error && <p className="mt-5 text-red-500">{error}</p>}
                    {message && <p className="mt-5 text-green-500">{message}</p>}
				</form>
			</div>
		</div>
	);
};

export default SubscribeForm;
