/* eslint-disable react/prop-types */
const FormEntry = (props) => {
  const { id, type, htmlFor, label } = props;
  return (
    <div>
      <label className="text-gray-700 dark:text-gray-200" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        style={{ backgroundColor: 'rgba(31, 41,55, 0.5)' }}
        required
        id={id}
        type={type}
        className="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
      />
    </div>
  );
};

export default FormEntry;
