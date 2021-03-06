import {
  Button,
  Step,
  StepContent,
  StepLabel,
  Stepper,
} from "@material-ui/core";
import React, { useCallback, useMemo } from "react";

import { get } from "lodash";
import { useForm } from "react-final-form";
import { useTranslate } from "ra-core";

export const SignupStepperContext = React.createContext({
  activeStep: 0,
  isLastStep: false,
});

export const SignupStepperProvider = ({ children }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(
    React.Children.toArray(children).length === 1
  );

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
  const childrenCount = useMemo(
    () => children.filter((c) => c !== undefined),
    [children]
  );
  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      {React.Children.map(children, (field, index) =>
        React.isValidElement(field) ? (
          <Step key={index}>
            <StepLabel>{field.props.title || field.props.source}</StepLabel>
            <StepContent TransitionProps={{ unmountOnExit: true }}>
              {React.cloneElement(field, { ...props })}
              {childrenCount > 1 && activeStep > 0 && (
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  &larr; {translate("ra.action.back")}
                </Button>
              )}
              {childrenCount > 1 && activeStep < children.length - 1 && (
                <Button onClick={handleNext}>
                  {translate("ra.action.next")} &rarr;
                </Button>
              )}
            </StepContent>
          </Step>
        ) : undefined
      )}
    </Stepper>
  );
};

export default SignupStepper;
