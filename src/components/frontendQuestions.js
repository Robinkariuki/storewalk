const Frontend = {
  "title":"FrontEnd",
  "navigationTitle": "Front-end",
  "showCompletedPage":false,
  "elements": [
    
    {
      "type": "matrixdropdown",
      "name": "FrontEnd",
      "title": "Is the section clean?",

      "columns": [
          {
              "name": "Frontend_Col1",
              "cellType": "radiogroup",
              "showInMultipleColumns": true,
              // "isRequired": true,
              "choices": ["Yes","No"],
 
          },
          
          {
            "name": "Frontend_nextstep1",
            "cellType": "text",
            "title": "Next step"
        },
        {
          "name": "Frontend_who1",
          "cellType": "text",
          "title": "who"
      },{
        "name":"Frontend_when1",
        "title":"when(hrs)",
        "cellType":"text",
        "inputType":"time",
  
     },
    {
      "name": "Frontend_completion1",
      "cellType": "radiogroup",
      "showInMultipleColumns": true,
      "choices": ["Complete","Not Complete "],
    
      
  },

      ],
      "rows": [
          "1. Is the floor clean and dry?",
          "2. Are the fixtures clean?",
          "3. Is all fire fighting equipment accessable and not blocked?",
          "4. Are all fire exits clear of obstruction and accessable?",
          
       
      ],
      
  }
  ,
  {
    "type": "matrixdropdown",
    "name": "Frontend",
    "title": "Are the checkouts ready to trade?",
    
    "columns": [
        {
            "name": "Frontend_col2",
            "cellType": "radiogroup",
            "showInMultipleColumns": true,
            // "isRequired": true,
            "choices": ["Yes","No"]
        },
        {
          "name": "Frontend_nexstep2",
          "cellType": "text",
          "title": "Next step"
      },
      {
        "name": "Frontend_who2",
        "cellType": "text",
        "title": "who"
    },
    {
      "name":"Frontend_when2",
      "title":"when(hrs)",
      "cellType":"text",
      "inputType":"time",

   },
    {
    "name": "Frontend_completion2",
    "cellType": "radiogroup",
    "showInMultipleColumns": true,
    "showClearButton":true,
    "choices": ["Complete","Not Complete "],
    },
    
    ],
    "rows": [
        "1. Are all the tills working?",
        "2. Is all the right POS in place?",
        "3. Have the FMCG merchndise stands at the checkouts been replenished?",
        "4. Do all the products have an SEL?",
        "5. Are the checkouts tidy, with all equipment in the agreed places?",
        "6. Are ther sufficent shopping bags available to the expected trade?",
        "7. Are there replecement till roles avialable?",
        "8. Is all the equipment working? ",
        "9. Is the Express checkout working?",
        "10. Is the disabled checkout working?"
      
    ],
        
    
    
    },


    {
      "type": "matrixdropdown",
      "name": "Frontend",
      "title": "Does the checkout operator schedule reflect the expected trade for the day?",
      
      "columns": [
          {
              "name": "Frontend_col3",
              "cellType": "radiogroup",
              "showInMultipleColumns": true,
              // "isRequired": true,
              "choices": ["Yes","No"]
          },
          {
            "name": "Frontend_nexstep3",
            "cellType": "text",
            "title": "Next step"
        },
        {
          "name": "Frontend_who3",
          "cellType": "text",
          "title": "who"
      },
      {
        "name":"Frontend_when3",
        "title":"when(hrs)",
        "cellType":"text",
        "inputType":"time",
  
     },
      {
      "name": "Frontend_completion3",
      "cellType": "radiogroup",
      "showInMultipleColumns": true,
      "showClearButton":true,
      "choices": ["Complete","Not Complete "],
      },
      
      ],
      "rows": [
          "1. Does the checkout team need any support during the day?",
    
      ],
          
      
      
      },
      {
        "type": "matrixdropdown",
        "name": "Frontend",
        "title": "Is the Customer Care Desk ready to trade?",
        
        "columns": [
            {
                "name": "Frontend_col4",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
                // "isRequired": true,
                "choices": ["Yes","No"]
            },
            {
              "name": "Frontend_nexstep4",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "Frontend_who4",
            "cellType": "text",
            "title": "who"
        },
        {
          "name":"Frontend_when4",
          "title":"when(hrs)",
          "cellType":"text",
          "inputType":"time",
    
       },
        {
        "name": "Frontend_completion4",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "showClearButton":true,
        "choices": ["Complete","Not Complete "],
        },
        
        ],
        "rows": [
            "1. Is the CCD clean and tidy?",
            "2. Have all returns from the previous day been actioned?",
            "3. Have there been any customer comments recorded?",
            "4. Does the store intercom work?",
            "5. Are there sufficent staff for the expected trade?",
            "6. Are all staff in the correct uniform?",
            "7. Do the CCD staff know who the store Duty Supervisor is?",
            "8. Do the CCD staff know what the promotions are?",
            "9. Are staff available to assist customers with large shops?",
            
          
        ],
            
        
        
        },
    
    
        
           


]
}




export default Frontend