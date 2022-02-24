import React,{useCallback} from 'react'
import "survey-react/modern.min.css";
import { Survey, StylesManager, Model } from "survey-react";


StylesManager.applyTheme("modern");



const surveyJson = {
    title: "Main entrance",
    elements: [
      {
        name: "astName",
        title: "Enter your first name:",
        type: "text"
        
      },
      
      {
        name: "LastName",
        title: "Enter your last name:",
        startWithNewLine: false,
        type: "text"
      },
      {
        name: "LastName",
        title: "Enter your last name:",
        startWithNewLine: false,
        type: "text"
      }

    ]
  };





const Questions = () => {


    const survey = new Model(surveyJson);
    survey.focusFirstQuestionAutomatic = false;
  
    const alertResults = useCallback((sender) => {
      const results = JSON.stringify(sender.data);
      alert(results);
    }, []);


    // survey.onComplete.add(alertResults);


  return (
    <Survey model={survey} />
  )
}

export default Questions