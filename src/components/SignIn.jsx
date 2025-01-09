

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#4e148c] to-[#613dc1] text-white">
      <div className="w-full max-w-md bg-neutral-900/80 rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#613dc1]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#613dc1]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-gradient-to-r from-[#4e148c] to-[#613dc1] rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-[#4e148c]"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Do not have an account?{" "}
          <a href="/create-account" className="text-[#613dc1] underline">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
