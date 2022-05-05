import {
  Button,
  Step,
  StepContent,
  StepLabel,
  Stepper,
} from "@material-ui/core";
import React, { useCallback } from "react";

import { get } from "lodash";
import { useForm } from "react-final-form";
import { useTranslate } from "ra-core";

export const SignupStepperContext = React.createContext({
  activeStep: 0,
  isLastStep: false,
});

export const SignupStepperProvider = ({ children }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);

  return (
    <SignupStepperContext.Provider
      value={{
        activeStep,
        isLastStep,
        setActiveStep,
        setIsLastStep,
      }}
    >
      {children}
    </SignupStepperContext.Provider>
  );
};
const SignupStepper = ({ children, ...props }) => {
  const form = useForm();
  const { activeStep, setActiveStep, setIsLastStep } =
    React.useContext(SignupStepperContext);
  const handleNext = useCallback(() => {
    form.batch(() => {
      const formState = form.getState();
      const fields = Object.keys(formState.visited);

      fields.forEach((field) => form.blur(field));

      const stepErrors = fields
        .map((field) => get(formState.errors, field, undefined))
        .filter((fieldError) => fieldError !== undefined);
      if (stepErrors.length === 0) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setIsLastStep(activeStep + 1 === children.length - 1);
      }
    });
  }, [form, activeStep, children.length, setActiveStep, setIsLastStep]);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setIsLastStep(false);
  }, [setActiveStep, setIsLastStep]);
  const translate = useTranslate();
  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      {React.Children.map(children, (field, index) => (
        <Step key={index}>
          <StepLabel>{field.props.title || field.props.source}</StepLabel>
          <StepContent TransitionProps={{ unmountOnExit: true }}>
            {React.cloneElement(field, { ...props })}
            {activeStep > 0 && (
              <Button disabled={activeStep === 0} onClick={handleBack}>
                &larr; {translate("ra.action.back")}
              </Button>
            )}
            {activeStep < children.length - 1 && (
              <Button onClick={handleNext}>
                {translate("ra.action.next")} &rarr;
              </Button>
            )}
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
};

export default SignupStepper;
