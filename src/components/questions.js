import React,{useCallback,useState} from 'react'
import "survey-react/modern.min.css";
import { Survey, StylesManager, Model } from "survey-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './questions.css';
import MainEntranceQuestion from "./mainEntranceQuestions"
import Fresh from "./freshQuestions"
import Frontend from "./frontendQuestions"
import FMCG from './fmcgQuestions';
import GM from './gmQuestions';
import Furniture from './furnitureQuestions';
import Stockroom from './stockroomQuestions';
import Receiving from './receivingQuestions';
import axios from "axios";




StylesManager.applyTheme("modern");




const surveyJson = {

  "progressBarType": "buttons",
  "showProgressBar": "top",
  "checkErrorsMode": "onComplete",
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

  
  
  
 
  






const Questions = ({token}) => {

    
    const survey = new Model(surveyJson);
    survey.focusFirstQuestionAutomatic = false;
  
    const alertResults = useCallback((sender) => {
      const results = sender.data
survey.getAllQuestions().forEach(function(question) {

     console.log(results[question.name])
     
     


  
    



});
   


       axios({
         method:"post",
         url:"http://localhost:5000/storewalk/api/questionData",
         data:{
          results,
          token
        }
        })
         .then(resp=>{
           console.log(resp)
         })
         .catch(err=>{
            console.log(err)
         })
      
    }, []);
     
    

    survey.onComplete.add(alertResults);

    


  return (
    <div className='mt-5'>

<Survey model={survey}  />
    </div>
    
  )
}

export default Questions