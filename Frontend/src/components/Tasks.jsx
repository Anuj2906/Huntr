/* eslint-disable react/prop-types */

const Tasks = (props) => {
  const { TaskName, backgroundPic, handleClick } = props;
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer flex flex-col items-center justify-center"
    >
      <div
        className="bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        style={{
          backgroundImage: `url("${backgroundPic}")`,
          width: '25vw',
          height: '20vw',
          filter: 'invert(100%)',
          opacity: '0.5'
        }}
      ></div>

      <div className="-mt-4 overflow-hidden rounded-lg shadow-lg dark:bg-gray-700" style={{ opacity: '1', width: '18vw' }}>
        <h3 className="font-bold tracking-wide text-center text-white uppercase" style={{ padding: '1vw', fontSize: '1.2vw' }}>
          {TaskName}
        </h3>
      </div>
    </div>
  );
};

export default Tasks;
