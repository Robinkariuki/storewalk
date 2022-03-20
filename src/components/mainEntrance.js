import React,{useCallback,useState} from 'react'
import "survey-react/modern.min.css";
import { Survey, StylesManager, Model } from "survey-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './questions.css';
import MainEntranceQuestion from "./questions"
import Fresh from "./freshQuestions"
import Frontend from "./frontendQuestions"
import FMCG from './fmcgQuestions';
import GM from './gmQuestions';
import Furniture from './furnitureQuestions';
import Stockroom from './stockroomQuestions';
import Receiving from './receivingQuestions';

StylesManager.applyTheme("modern");



const surveyJson = {

  "progressBarType": "buttons",
  "showProgressBar": "top",

    "pages":[
      MainEntranceQuestion,
      Fresh,
      Frontend,
      FMCG,
      GM,
      Furniture,
      Stockroom,
      Receiving
      

    ]
    
  };

  
  
  
 
  






const MainEntrance = () => {


    const survey = new Model(surveyJson);
    survey.focusFirstQuestionAutomatic = false;
  
    const alertResults = useCallback((sender) => {
      const results = JSON.stringify(sender.data);
      alert(results);
      console.log(results)
    }, []);


    survey.onComplete.add(alertResults);





  return (
    <div className='mt-5'>

<Survey model={survey}  />
    </div>
    
  )
}

export default MainEntrance