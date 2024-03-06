import { useContext } from "react";
import { AppContext } from "../store/app-context";
import SkillsSection from "./SkillsSection";
import FormEntry from "./FormEntry";
import BackButton from "./BackButton";
// import useDidMountEffect from "../hooks/useDidMountEffect"

const Form = () => {
  const { showSearchCandidatesForm, setShowRecommendProfiles, setRecommendations, switchBackToMainFromSCForm } = useContext(AppContext);

  async function mySubmitFunction(e) {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/students/");
    const students = await response.json()
    const recommendedStudents = students.slice(0, 5);
    const nonRecommendedStudents = students.slice(-5);
    setRecommendations(recommendedStudents, nonRecommendedStudents)
    setShowRecommendProfiles(true);
  }
  return (
    <>
      {showSearchCandidatesForm &&
        <div className="mt-28">
          <h2 className="text-2xl capitalize mb-4">
            Search relevant candidates
          </h2>
          <section className="max-w-4xl p-6 mx-auto rounded-lg shadow-md" style={{ backgroundColor: 'rgba(31, 41,55, 0.5)' }}>
            <form action="url" method="POST">
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <FormEntry
                  label="Username"
                  htmlFor="username"
                  id="username"
                  type="text"
                />
                <FormEntry
                  label="Email Address"
                  htmlFor="emailAddress"
                  id="emailAddress"
                  type="email"
                />
                <SkillsSection />
              </div>
              <div className="flex justify-end">
                <div className="flex justify-center">
                  <BackButton switchButton={() => { switchBackToMainFromSCForm(true) }} />
                  <button type="submit" className="submit-button" onClick={mySubmitFunction}>Save</button>
                </div>
              </div>
            </form>
          </section>
        </div>}


    </>
  );
};

export default Form;
