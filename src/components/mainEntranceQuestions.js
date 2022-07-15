const MainEntranceQuestion = {
  "title": "Main Entrance",
  "navigationTitle": "Main Entrance",
  "showCompletedPage": false,
  
  
  
  "elements": [

    {
      "type": "matrixdropdown",
      "name": "MainEntrance",
      "title": "Is the entrance clean?",

      "columns": [


        {
          "name": "Main_Col1",
          "cellType": "radiogroup",
          "showInMultipleColumns": true,
          "isRequired": true,
          "choices": ["Yes", "No"],

        },

        {
          "name": "Main_nextstep1",
          // "enableIf": "{Main_Col1}='No'",
          "cellType": "text",
          // "isRequired": true,
          "title": "Next step"
        },
        {
          "name": "Main_who1",
          // "enableIf": "{Main_Col1}='No'",
          "cellType": "text",
          // "isRequired": true,
          "title": "who"
        }, {
          "name": "main_when1",
          // "enableIf": "{Main_Col1}='No'",
          "title": "when(hrs)",
          "cellType": "text",
          // "isRequired": true,
          "inputType": "time",

        },
        {
          "name": "main_completion1",
          // "enableIf": "{Main_Col1}='No'",
          "cellType": "radiogroup",
          "showInMultipleColumns": true,
          // "isRequired": true,
          "choices": ["Complete", "Not Complete "],

        },

      ],
      "rows": [
        "1. Are the entrance floors, walls and any fixtures clean?",
        "2. Are all rubbish bins empty and clean? ",
        "3. Are any windows or glass clean and smeer free?",
        "4. Is the  janitor schedulled to check the main entrance and clean if needed every hour?",
        "5. Are the guards clean, in uniform, presentable and welcoming?",
        "6. Are the metal detectors working?",


      ],

    },
    {
      "type": "matrixdropdown",
      "name": "MainEntrance",
      "title": "Is the entrance CLEAR so that customers can get in and out of the store easily?",

      "columns": [{
          "name": "main_col2",
          "cellType": "radiogroup",
          "showInMultipleColumns": true,
          "isRequired": true,
          "choices": ["Yes", "No"],
        },
        {
          "name": "main_nextstep2",
          "cellType": "text",
          "title": "Next step"
        },
        {
          "name": "main_who2",
          "cellType": "text",
          "title": "who"
        },
        {
          "name": "main_when2",
          "title": "when(hrs)",
          "cellType": "text",
          "inputType": "time",

        },
        {
          "name": "main_completion2",
          "cellType": "radiogroup",
          "showInMultipleColumns": true,
          "choices": ["Complete", "Not Complete "],
        },

      ],
      "rows": [
        "1. Are there any obsticals blocking the entrance such as shopping trollies, POS or other obstructions?",
        "2. Has the security guard been briefed to ensure the entrance is kept clear?",
        "3. Are there any events / promotions planned for the entrance today? If so has everyone been brifed and understand what is happening, when it will happen and what space is being used? (Ensuring it does not impact customer accesibilty)"


      ],










    },


    {
      "type": "matrixdropdown",
      "name": "MainEntrance",
      "title": "Are shopping Trollies and baskets are available for customers?",

      "columns": [{
          "name": "main_col3",
          "cellType": "radiogroup",
          "showInMultipleColumns": true,
          "isRequired": true,
          "choices": ["Yes", "No"],
        },
        {
          "name": "main_nextstep3",
          "cellType": "text",
          "title": "Next step"
        },
        {
          "name": "main_who3",
          "cellType": "text",
          "title": "who"
        },
        {
          "name": "main_when3",
          "title": "when(hrs)",
          "cellType": "text",
          "inputType": "time",

        },
        {
          "name": "main_completion3",
          "cellType": "radiogroup",
          "showInMultipleColumns": true,
          "choices": ["Complete", "Not Complete "],
        },

      ],
      "rows": [
        "1. Are there sufficient shopping trollies and baskets available for the expected customer flow?.",
        "2. Are the shopping trollies and baskets are in designated areas?",
        "3. Are all trollies and baskets clean and disinfected?",
        "4. Is there sanitising equipment avaialbe at the front of the store to clean the trollies?",
        "5. Is a staff member schedulled to carryout the sanitisation of trollies and baskets?",
        "6. Have all damaged trollies or baskest are removed for repair?"


      ],


    },


    {
      "type": "matrixdropdown",
      "name": "MainEntrance",
      "title": "Is the correct signage being displayed?",

      "columns": [{
          "name": "main_col4",
          "cellType": "radiogroup",
          "showInMultipleColumns": true,
          "isRequired": true,
          "choices": ["Yes", "No"]
        },
        {
          "name": "main_nextstep4",
          "cellType": "text",
          "title": "Next step"
        },
        {
          "name": "main_who4",
          "cellType": "text",
          "title": "who"
        },
        {
          "name": "main_when4",
          "title": "when(hrs)",
          "cellType": "text",
          "inputType": "time",

        },
        {
          "name": "main_completion4",
          "cellType": "radiogroup",
          "showInMultipleColumns": true,
          "choices": ["Complete", "Not Complete"],
        },

      ],
      "rows": [
        "1. Are the store opening hours displayed and are they correct?",
        "2. Does the POS / signage displayed at the entrance comply with the current requirments? (Direction from head office)"


      ],










    },


    {
      "type": "matrixdropdown",
      "name": "MainEntrance",
      "title": "Are our legal requirments being met?",

      "columns": [{
          "name": "main_col5",
          "cellType": "radiogroup",
          "showInMultipleColumns": true,
          "isRequired": true,
          "choices": ["Yes", "No"]
        },
        {
          "name": "main_nexstep5",
          "cellType": "text",
          "title": "Next step"
        },
        {
          "name": "main_who5",
          "cellType": "text",
          "title": "who"
        },
        {
          "name": "main_when5",
          "title": "when(hrs)",
          "cellType": "text",
          "inputType": "time",
        },
        {
          "name": "main_completion5",
          "cellType": "radiogroup",
          "showInMultipleColumns": true,
          "showClearButton": true,
          "choices": ["Complete", "Not Complete "],
        },

      ],
      "rows": [
        "1. Is there hand sanatiser availabe at the entrance for customers?",
        "2. Is there an electronic thermometre available to take customers tempreture when entring the store?",
        "3. Is there  water, soap and paper towle for customers who cannot use sanatiser available?"


      ],



    }


  ]
}





export default MainEntranceQuestion;