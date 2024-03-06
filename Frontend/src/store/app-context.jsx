/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const AppContext = createContext({
  showMainPage: true,
  showFilesUploadForm: false,
  showSearchCandidatesForm: false,
  showRecommendedProfiles: false,
  recommendedProfilesArray: [],
  nonRecommendedProfilesArray: [],
  showCandidateDetails: false,
  candidateInfo: Object({}),
  skills: [],
  skillWoExp: "",
  switchFilesUploadPage: () => { },
  setCandidateInfo: () => { },
  switchSearchCandidatesPage: () => { },
  setShowRecommendProfiles: () => { },
  switchCandidateDetailsPage: () => { },
  addNewSkill: () => { },
  setSkillWoExp: () => { },
  setRecommendations: () => { },
  switchBackToMainFromFUForm: () => { }, //File Upload Page -> Main Page
  switchBackToMainFromSCForm: () => { }, //Search Candidates Form -> Main Page
  switchBackToSCFormFromRPPage: () => { },// Recommended Profiles Page -> Search Candidates Form
  switchBackToRPPageFromCDPage: () => { },// Candidate Details Page -> Recommended Profiles Page
});

function appReducer(state, action) {
  if (action.type === "SWITCH_FILE_UPLOAD_PAGE") {
    return {
      ...state,
      showFilesUploadForm: action.payload.showFilesUploadForm,
      showMainPage: action.payload.showMainPage,
      showSearchCandidatesForm: action.payload.showSearchCandidatesForm,
    };
  }
  if (action.type === "SET_RECOMMENDATIONS") {
    return {
      ...state,
      recommendedProfilesArray: action.payload.recommendedProfilesArray,
      nonRecommendedProfilesArray: action.payload.nonRecommendedProfilesArray
    };
  }
  if (action.type === "SET_CANDIDATE_INFO") {
    return {
      ...state,
      candidateInfo: action.payload.candidateInfo
    };
  }
  if (action.type === "SWITCH_CANDIDATES_SEARCH_PAGE") {
    console.log("In SWITCH_CANDIDATES_SEARCH_PAGE")
    return {
      ...state,
      showSearchCandidatesForm: action.payload.showSearchCandidatesForm,
      showMainPage: action.payload.showMainPage,
      showFilesUploadForm: action.payload.showFilesUploadForm,
    };
  }
  if (action.type === "SWITCH_CANDIDATES_DETAIL_PAGE") {
    return {
      ...state,
      showFilesUploadForm: action.payload.showFilesUploadForm,
      showMainPage: action.payload.showMainPage,
      showCandidateDetails: action.payload.showCandidateDetails,
      showRecommendedProfiles: action.payload.showRecommendedProfiles
    };
  }
  if (action.type === "ADD_NEW_SKILL") {
    console.log("On add skill reducer");
    const skills = [...state.skills];
    skills.push(action.payload.newSkill);
    return {
      ...state,
      skills,
    };
  }
  if (action.type === "SKILL_WO_EXP") {
    const skillWoExp = action.payload.skillWoExp;
    return {
      ...state,
      skillWoExp,
    };
  }
  if (action.type === "SET_SHOW_RECOMMENDED_PROFILES") {
    return {
      ...state,
      showSearchCandidatesForm: !action.payload.showRecommendedProfiles,
      showRecommendedProfiles: action.payload.showRecommendedProfiles
    };
  }
  if (action.type === "SWITCH_BACK_TO_MAIN_FROM_FU_FORM") {
    return {
      ...state,
      showMainPage: action.payload.showMainPage,
      showFilesUploadForm: action.payload.showFilesUploadForm,
    }
  }
  if (action.type === "SWITCH_BACK_TO_MAIN_FROM_SC_FORM") {
    return {
      ...state,
      showMainPage: action.payload.showMainPage,
      showSearchCandidatesForm: action.payload.showSearchCandidatesForm,
    }
  }
  if (action.type === "SWITCH_BACK_TO_SC_FORM_FROM_RP_PAGE") {
    return {
      ...state,
      showSearchCandidatesForm: action.payload.showSearchCandidatesForm,
      showRecommendedProfiles: action.payload.showRecommendedProfiles,
    }
  }
  if (action.type === "SWITCH_BACK_TO_RP_PAGE_FROM_CD_PAGE") {
    return {
      ...state,
      showRecommendedProfiles: action.payload.showRecommendedProfiles,
      showCandidateDetails: action.payload.showCandidateDetails,
    }
  }

  return state;
}

export default function AppContextProvider(props) {
  const [appState, appDispatch] = useReducer(appReducer, {
    skills: [],
    showMainPage: true,
    showFilesUploadForm: false,
    showSearchCandidatesForm: false,
    skillWoExp: ""
  });
  function handleSetShowRecommendProfiles(showRecommendedProfiles) {
    appDispatch({
      type: "SET_SHOW_RECOMMENDED_PROFILES",
      payload: {
        showRecommendedProfiles
      }
    })
  }
  function handleSetRecommendations(recommendedProfilesArray, nonRecommendedProfilesArray) {
    appDispatch({
      type: "SET_RECOMMENDATIONS",
      payload: {
        recommendedProfilesArray,
        nonRecommendedProfilesArray
      }
    })
  }
  function handleSetCandidateInfo(candidateInfo) {
    appDispatch({
      type: "SET_CANDIDATE_INFO",
      payload: {
        candidateInfo
      }
    })
  }
  function handleswitchFilesUploadPage(showFilesUploadForm) {
    console.log("up")
    appDispatch({
      type: "SWITCH_FILE_UPLOAD_PAGE",
      payload: {
        showFilesUploadForm,
        showMainPage: !showFilesUploadForm,
        showSearchCandidatesForm: false,
      },
    });
  }
  function handleSwitchCandidateDetailsPage(showCandidateDetails) {
    appDispatch({
      type: "SWITCH_CANDIDATES_DETAIL_PAGE",
      payload: {
        showCandidateDetails,
        showMainPage: !showCandidateDetails,
        showFilesUploadForm: false,
        showRecommendedProfiles: false
      },
    });
  }
  function handleSwitchSearchCandidatesPage(showSearchCandidatesForm) {
    appDispatch({
      type: "SWITCH_CANDIDATES_SEARCH_PAGE",
      payload: {
        showSearchCandidatesForm,
        showMainPage: !showSearchCandidatesForm,
        showFilesUploadForm: false,
      },
    });
  }

  function handleAddNewSkill(newSkill) {
    appDispatch({
      type: "ADD_NEW_SKILL",
      payload: {
        newSkill,
      },
    });
  }

  function handleSetSkillWoExp(skillWoExp) {
    appDispatch({
      type: "SKILL_WO_EXP",
      payload: {
        skillWoExp,
      },
    });
  }

  function handleSwitchBackToMainFromFUForm(showMainPage) {
    appDispatch({
      type: "SWITCH_BACK_TO_MAIN_FROM_FU_FORM",
      payload: {
        showMainPage,
        showFilesUploadForm: !showMainPage,
      },
    });
  }

  function handleSwitchBackToMainFromSCForm(showMainPage) {
    appDispatch({
      type: "SWITCH_BACK_TO_MAIN_FROM_SC_FORM",
      payload: {
        showMainPage,
        showSearchCandidatesForm: !showMainPage,
      },
    });
  }

  function handleSwitchBackToSCFormFromRPPage(showSearchCandidatesForm) {
    appDispatch({
      type: "SWITCH_BACK_TO_SC_FORM_FROM_RP_PAGE",
      payload: {
        showSearchCandidatesForm,
        showRecommendedProfiles: !showSearchCandidatesForm,
      },
    });
  }
  function handleSwitchBackToRPPageFromCDPage(showRecommendedProfiles) {
    appDispatch({
      type: "SWITCH_BACK_TO_RP_PAGE_FROM_CD_PAGE",
      payload: {
        showRecommendedProfiles,
        showCandidateDetails: !showRecommendedProfiles,
      },
    });
  }

  const ctxValue = {
    showMainPage: appState.showMainPage,
    showFilesUploadForm: appState.showFilesUploadForm,
    showSearchCandidatesForm: appState.showSearchCandidatesForm,
    switchFilesUploadPage: handleswitchFilesUploadPage,
    switchSearchCandidatesPage: handleSwitchSearchCandidatesPage,
    setShowRecommendProfiles: handleSetShowRecommendProfiles,
    switchCandidateDetailsPage: handleSwitchCandidateDetailsPage,
    skills: appState.skills,
    addNewSkill: handleAddNewSkill,
    setRecommendations: handleSetRecommendations,
    setCandidateInfo: handleSetCandidateInfo,
    skillWoExp: appState.skillWoExp,
    showRecommendedProfiles: appState.showRecommendedProfiles,
    recommendedProfilesArray: appState.recommendedProfilesArray,
    candidateInfo: appState.candidateInfo,
    nonRecommendedProfilesArray: appState.nonRecommendedProfilesArray,
    showCandidateDetails: appState.showCandidateDetails,
    setSkillWoExp: handleSetSkillWoExp,
    switchBackToMainFromFUForm: handleSwitchBackToMainFromFUForm,
    switchBackToMainFromSCForm: handleSwitchBackToMainFromSCForm,
    switchBackToSCFormFromRPPage: handleSwitchBackToSCFormFromRPPage,
    switchBackToRPPageFromCDPage: handleSwitchBackToRPPageFromCDPage,
  };

  return (
    <AppContext.Provider value={ctxValue}>{props.children}</AppContext.Provider>
  );
}
