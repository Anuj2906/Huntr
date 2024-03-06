/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AppContext } from "../store/app-context";

const InputFields = (props) => {
    const { placeHolderText, buttonText, value, type } = props;
    const { addNewSkill, skillWoExp, setSkillWoExp, } = useContext(AppContext);

    const handleInputButtonClick = (event) => {
        event.preventDefault();
        addNewSkill(skillWoExp);
        setSkillWoExp("");
    };

    const onInputFieldChange = (event) => {
        setSkillWoExp(event.target.value);
    };

    return (
        <div className="flex gap-2">
            <input
                style={{ backgroundColor: 'rgba(31, 41,55, 0.5)' }}
                type={type}
                placeholder={placeHolderText}
                value={value}
                onChange={onInputFieldChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
            <button
                onClick={handleInputButtonClick}
                className="block px-3 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md bg-gray-700 hover:bg-gray-600 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >
                {buttonText}
            </button>
        </div>
    );
};

export default InputFields;
