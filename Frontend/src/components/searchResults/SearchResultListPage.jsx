/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AppContext } from "../../store/app-context";
import BackButton from '../BackButton';
import '../../App.css';

const ProfileList = (props) => {
    const { switchCandidateDetailsPage, setCandidateInfo, switchBackToSCFormFromRPPage } = useContext(AppContext);

    const renderProfile = (profile, index) => (
        <tr key={index} className="border-b border-gray-500">
            <td className="py-3 align-middle">{profile.name}</td>
            <td className="py-3 align-middle">{profile.email}</td>
            <td className="py-3 align-middle">{profile.relevanceScore}</td>
            <td className="py-3 align-middle"><a href={profile.resumeLink} className="text-purple-400 hover:underline">View Resume</a></td>
            <td className="py-3 align-middle"><button onClick={() => showProfileDetails(profile)} className="text-indigo-400 hover:underline">Show Details</button></td>
        </tr>
    );

    const showProfileDetails = async (profile) => {
        const response = await fetch(`http://127.0.0.1:8000/api/student/${profile.name}`);
        const studentData = await response.json();
        setCandidateInfo(studentData);
        switchCandidateDetailsPage(true);
    };

    return (
        <div className="profile-list">
            <div className="flex justify-between items-center mb-4">
                <BackButton switchButton={() => { switchBackToSCFormFromRPPage(true) }} />
                <h2 className="text-2xl mr-20">Recommended Profiles</h2>

                <div></div>
            </div>
            <table className="min-w-full divide-y divide-gray-300 rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: 'rgba(31, 41,55, 0.5)' }}>
                <thead className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white">
                    <tr>
                        <th scope="col" className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Email</th>
                        <th scope="col" className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Relevance Score</th>
                        <th scope="col" className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Resume Link</th>
                        <th scope="col" className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Details Link</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-500">
                    {props.recommendedProfiles.map(renderProfile)}
                </tbody>
            </table>

            <h2 className="text-2xl mt-8 mb-4">Non Recommended Profiles</h2>
            <table className="min-w-full divide-y divide-gray-300 rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: 'rgba(31, 41,55, 0.5)' }}>
                <thead className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white">
                    <tr>
                        <th scope="col" className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Email</th>
                        <th scope="col" className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Relevance Score</th>
                        <th scope="col" className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Resume Link</th>
                        <th scope="col" className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Details Link</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-500">
                    {props.nonRecommendedProfiles.map(renderProfile)}
                </tbody>
            </table>
        </div>
    );
};

export default ProfileList;
