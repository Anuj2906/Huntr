/* eslint-disable react/prop-types */
import { FaArrowLeft } from 'react-icons/fa';
import '../App.css';

const BackButton = ({ switchButton }) => {
  const iconStyle = {
    marginRight: '5px',
  };

  return (
    <button onClick={switchButton} className="mx-3 submit-button">
      <div className='flex'>
        <FaArrowLeft style={iconStyle} className='mt-1' />
        Back
      </div>
    </button>
  );
};

export default BackButton;
