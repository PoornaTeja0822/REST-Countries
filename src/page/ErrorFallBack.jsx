import { Link } from "react-router-dom";

function ErrorFallBack() {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light-bg text-light-text p-6">
      <h1 className="text-4xl font-bold mb-3">Something went wrong 😢</h1>
      <p className="text-gray-600 text-center max-w-md">
        We’re having trouble loading this page. Please refresh or try again later.
      </p>
      <Link
        to="/"
        className="px-6 py-3 element text rounded-md shadow-[0_3px_15px_rgb(0,0,0,0.1)] hover:opacity-80 transition-all mt-3"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default ErrorFallBack