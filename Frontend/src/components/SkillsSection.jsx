import { useContext } from "react";
import { AppContext } from "../store/app-context";
import InputFields from "./InputFields";

const SkillsSection = () => {
  const { skills, skillWoExp } = useContext(AppContext);

  return (
    <div className="">
      <h2 className="text-lg text-white mb-1">Skills</h2>
      <div className="flex flex-wrap mb-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{ backgroundColor: 'rgba(31, 41,55, 0.5)' }}
            className="block px-2 py-1 mt-2 mr-1 text-gray-700 border border-gray-200 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          >
            {skill}
          </div>
        ))}
      </div>
      <InputFields
        placeHolderText="Add Skills"
        buttonText="Add"
        value={skillWoExp}
        type="text"
      />

    </div>
  );
};

export default SkillsSection;
