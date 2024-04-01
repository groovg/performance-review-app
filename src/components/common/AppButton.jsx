const AppButton = ({ func, value }) => (
  <button
    onClick={() => func()}
    type="button"
    className="ml-3 mt-3 max-w-48 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {value}
  </button>
);

export default AppButton;
