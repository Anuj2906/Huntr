/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BackButton from '../BackButton';
import { useContext } from 'react';
import { AppContext } from '../../store/app-context';

const ProfileData = (props) => {
    const { switchBackToRPPageFromCDPage } = useContext(AppContext);
    const data = {
        "email": "anuj@gmail.com",
        "projects": [
            {
                "project_title": "Image classification with pytorch",
                "short_description": "This PyTorch project trains an image classification model on the CIFAR-10 dataset. A CNN architecture with hyperparameters is modeled, trained and tested to categorize images into 10 classes with high accuracy.",
                "tech_stack": ["python", "pytorch"],
                "time_duration": {
                    "start": "04-2020",
                    "end": "05-2020",
                    "duration_months": 2,
                },
                "relevancy": 5
            },
            {
                "project_title": "Stock price prediction with LSTM",
                "short_description": "The project develops an LSTM model to predict stock prices. Historical closing price data is used to train the recurrent neural network model. By analyzing sequential price patterns, the LSTM model makes multi-day ahead forecasts of a stock's future price.",
                "tech_stack": ["python", "pytorch", "SQL"],
                "time_duration": {
                    "start": "10-2021",
                    "end": "12-2021",
                    "duration_months": 3,
                },
                "relevancy": 3
            }
        ],
        "professional_experience": [
            {
                "role": "Data Scientist",
                "organization": "Swiggy",
                "short_description": "Built restaurant recommendation model for Swiggy's landing page to provide personalized suggestions for users based on order data and user attributes using collaborative filtering techniques to increase orders and revenue.",
                "tech_stack": ["python", "Flask", "Hiroku", "MongoDB"],
                "time_duration": {
                    "start": "05-2022",
                    "end": "07-2022",
                    "duration_months": 3
                },
                "relevancy": 4
            }
        ],
        "college": {
            "name": "IIT Bombay",
            "branch": "Electrical Engineering",
            "degree": "Dual Degree",
            "cgpa": 8.2,
            "start": "07-2018",
            "end": "05-2023"
        }
    }

    return (
        <>
            <div className='flex justify-between items-center'>
                <BackButton switchButton={() => { switchBackToRPPageFromCDPage(true) }} />
                <h1 className='text-2xl mr-28'>{props.data.name}</h1>
                <div></div>
            </div>
            <h2 className='text-xl'>{data.email}</h2>
            <div className="profile-data rounded-lg mt-2" style={{ backgroundColor: 'rgba(31, 41,55, 0.5)', width: '91.6vw' }}>

                <Tabs className="rounded-lg overflow-hidden shadow-lg">
                    <TabList className="flex bg-gradient-to-r from-purple-400 to-indigo-500 text-white">
                        <Tab className="flex-grow py-2 px-4 bg-gradient-to-r from-purple-400 to-indigo-500 hover:bg-purple-600 focus:outline-none focus:ring focus:ring-gray-400 cursor-pointer">Projects</Tab>
                        <Tab className="flex-grow py-2 px-4 bg-gradient-to-r from-purple-400 to-indigo-500 hover:bg-purple-600 focus:outline-none focus:ring focus:ring-gray-400 cursor-pointer">Professional Experience</Tab>
                        <Tab className="flex-grow py-2 px-4 bg-gradient-to-r from-purple-400 to-indigo-500 hover:bg-purple-600 focus:outline-none focus:ring focus:ring-gray-400 cursor-pointer">College</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className="text-2xl py-3 bg-gradient-to-r from-purple-400 to-indigo-500">Projects</h2>
                        <DataTable data={data.projects} />
                    </TabPanel>
                    <TabPanel>
                        <h2 className="text-2xl py-3 bg-gradient-to-r from-purple-400 to-indigo-500">Professional Experience</h2>
                        <DataTable data={data.professional_experience} />
                    </TabPanel>
                    <TabPanel>
                        <h2 className="text-2xl py-3 bg-gradient-to-r from-purple-400 to-indigo-500">College</h2>
                        <DataTable data={[data.college]} />
                    </TabPanel>

                </Tabs>
            </div>
        </>
    );
};

const DataTable = ({ data }) => {
    return (
        <div>
            <table className="min-w-full divide-y divide-gray-400 rounded-md overflow-hidden shadow-lg">
                <thead className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white">
                    <tr>
                        {Object.keys(data[0]).map((key, index) => (
                            <th key={index} className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">{key.replace('_', ' ').toUpperCase()}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-500">
                    {data.map((item, index) => (
                        <tr key={index} className="border-b border-gray-600">
                            {Object.values(item).map((value, index) => (
                                <td key={index} className="px-4 py-3 align-middle">{typeof value === 'object' ? <DataTable data={[value]} /> : value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProfileData;
