import { Link } from "react-router";

function Error() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f8ff] px-4 text-center font-poppins">

            <h1 className="text-7xl font-bold text-purple-500">404</h1>

            <h2 className="mt-4 text-2xl font-semibold text-gray-900">
                Page not found
            </h2>

            <p className="mt-2 max-w-md text-gray-600">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>

            <Link
                to="/"
                className="mt-8 rounded-xl border-2 border-dashed border-purple-500 px-6 py-3 text-sm font-medium text-purple-500 transition hover:bg-purple-500 hover:text-white"
            >
                Back to Home
            </Link>
        </div>
    )
}

export default Error