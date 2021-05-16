import React, { useContext } from 'react';
import './App.css';
import FirstStep from "../src/components/FirstStep";
import SecondStep from "../src/components/SecondStep";
import ThirdStep from "../src/components/ThirdStep";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { multiStepContext } from "./StepContext"


function App() {
  const { setStep, userData, setUserData } = useContext(multiStepContext)
  const { currentStep, finalData } = useContext(multiStepContext)
  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />

      case 2:
        return <SecondStep />

      case 3:
        return <ThirdStep />
    }
  }


  return (
    <div >
      <header >
        <div className="center-stepper">
          <Stepper style={{ width: '95%' }} activeStep={currentStep - 1} orientation="horizontal">


            <Step
              onClick={() => setStep(1)}
            >
              <StepLabel>
                Enter your name
            </StepLabel>
            </Step>


            <Step
              onClick={() => setStep(2)}
            // onMouseOver={MouseOver} onMouseOut={MouseOut}
            >
              <StepLabel>
                Enter your address
            </StepLabel>
            </Step>

            <Step
              onClick={() => setStep(3)}
            // onMouseOver={MouseOver} onMouseOut={MouseOut}
            >
              <StepLabel>
                Done
            </StepLabel>
            </Step>

          </Stepper>
        </div>
        {showStep(currentStep)}
      </header>
    </div>
  );
}

export default App;
