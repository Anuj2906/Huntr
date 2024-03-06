import { useContext } from "react";
import TasksSection from "./components/TasksSection";
import Form from "./components/SearchForm";
import FilesUploadForm from "./components/FilesUploadForm";
import Header from "./components/Header";
import { AppContext } from "./store/app-context";
import ProfileList from "./components/searchResults/SearchResultListPage";
import ProfileData from "./components/searchResults/CandidateDetails";


export default function App() {
  const { showMainPage, showFilesUploadForm, showSearchCandidatesForm, showRecommendedProfiles,
    recommendedProfilesArray, nonRecommendedProfilesArray, showCandidateDetails, candidateInfo } = useContext(AppContext);
  return (
    <>
      {showMainPage && (
        <>
          <div className="flex flex-col" style={{ height: '0vw' }}>
            <Header />
            <div style={{ margin: '3vw' }}></div>
            <TasksSection />
          </div>

        </>
      )}
      {showFilesUploadForm && <FilesUploadForm />}
      {showSearchCandidatesForm && <Form />}
      {showRecommendedProfiles && <ProfileList recommendedProfiles={recommendedProfilesArray} nonRecommendedProfiles={nonRecommendedProfilesArray} />}
      {showCandidateDetails && <ProfileData data={candidateInfo} />}
    </>
  );
}
