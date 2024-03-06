import Tasks from "./Tasks";
import {
  TaskFilesUpload,
  TaskSearchCandidates,
} from "../constants/TasksConstants";
import { useContext } from "react";
import { AppContext } from "../store/app-context";
import '../index.css'

const TasksSection = () => {
  const upload_img = "../../istockphoto-1419342910-612x612.png";
  const search_img = "../../job-search-icon-vector-21011824.jpg";

  const { switchFilesUploadPage, switchSearchCandidatesPage } = useContext(AppContext);
  return (
    <div className="tasks-section">
      <Tasks
        style={{ backgroundColor: 'rgba(31, 41,55, 0.5)' }}
        handleClick={() => switchFilesUploadPage(true)}
        TaskName={TaskFilesUpload}
        backgroundPic={upload_img}
      />
      <div style={{ width: '5vw', height: '20vh' }}></div>
      <Tasks
        handleClick={() => switchSearchCandidatesPage(true)}
        style={{ backgroundColor: 'rgba(31, 41,55, 0.5)' }}
        TaskName={TaskSearchCandidates}
        backgroundPic={search_img}
      />
    </div>
  );
};

export default TasksSection;
