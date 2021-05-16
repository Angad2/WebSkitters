import React,{useState} from 'react';
import App from "./App";
import Navigation from './navigation/index';


export const multiStepContext = React.createContext();
const StepContext = () => {
    const [currentStep,setStep] = useState(1);
    const [userData, setUserData] = useState ([]);
    const [finalData, setFinalData] = useState([]);
    return (
       <div>
       <multiStepContext.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData}}>
           <Navigation/>
       </multiStepContext.Provider>
       </div>

    )
}
export default StepContext ;
