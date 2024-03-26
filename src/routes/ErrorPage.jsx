import { Link } from "react-router-dom";

const ErrorPage = () => (
  <>
    <h1 className="my-20 text-center text-5xl font-medium">Page Not Found</h1>
    <div className="my-2 flex items-center justify-center">
      <img src="../error-page.svg" alt="" />
    </div>

    <h1 className="my-10 text-center text-8xl font-medium">404</h1>
    <p className="text-1xl my-5 text-center font-medium">
      The page you are looking for might have been removed, had it's name
      changed or is temporarily unavailable.
    </p>

    <Link
      to={"/"}
      className={
        "text-center block ml-auto mr-auto my-10 max-w-40 mb-2 me-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      }>
      <span>Go to Homepage</span>
    </Link>
  </>
);

export default ErrorPage;
