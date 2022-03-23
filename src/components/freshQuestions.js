const Fresh = {
    "title":"Fresh",
    "navigationTitle": "Fresh",
    "showCompletedPage":false,
    "elements": [
      
      {
        "type": "matrixdropdown",
        "name": "Fresh",
        "title": "Is the section clean?",
  
        "columns": [
            {
                "name": "Fresh_Col1",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
                // "isRequired": true,
                "choices": ["Yes","No"],
   
            },
            
            {
              "name": "Fresh_nextstep1",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "Fresh_who1",
            "cellType": "text",
            "title": "who"
        },{
          "name":"Fresh_when1",
          "title":"when(hrs)",
          "cellType":"text",
          "inputType":"time",
    
       },
      {
        "name": "Fresh_completion1",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "choices": ["Complete","Not Complete "],
      
        
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
      "name": "Fresh",
      "title": "Is the section accessable for customers?",
  
      "columns": [
          {
              "name": "Fresh_col2",
              "cellType": "radiogroup",
              "showInMultipleColumns": true,
            //   "isRequired": true,
              "choices": ["Yes","No"],
          },
          {
            "name": "Fresh_nextstep2",
            "cellType": "text",
            "title": "Next step"
        },
        {
          "name": "Fresh_who2",
          "cellType": "text",
          "title": "who"
      },
      {
        "name":"Fresh_when2",
        "title":"when(hrs)",
        "cellType":"text",
        "inputType":"time",
  
     },
    {
      "name": "Fresh_completion2",
      "cellType": "radiogroup",
      "showInMultipleColumns": true,
      "choices": ["Complete","Not Complete "],
  },
  
      ],
      "rows": [
          "1. Is the fresh area clear from obstructions and customers easily can access?",
          "2. Is there room for two trollies to pass each other? (If required)",
          "3. Are all off fixture promotion areas within the agreed space?",
          "4. Are any demonstrators and third party promoters in the agreed location and within the agred space?",

        
       
      ],
      
  
  
    
  
       
    
        
  
      
  },
  




  
  {
    "type": "matrixdropdown",
    "name": "Fresh",
    "title": "Is the F&V section ready for trade?",
  
    "columns": [
        {
            "name": "Fresh_col3",
            "cellType": "radiogroup",
            "showInMultipleColumns": true,
            // "isRequired": true,
            "choices": ["Yes","No"],
        },
        {
          "name": "Fresh_nextstep3",
          "cellType": "text",
          "title": "Next step"
      },
      {
        "name": "Fresh_who3",
        "cellType": "text",
        "title": "who"
    },
    {
    "name":"Fresh_when3",  
    "title": "when(hrs)",  
    "choices": [
      {
       "value": 1,
       "text": "1"
      },
      {
       "value": 2,
       "text": "2"
      },
      {
       "value": 3,
       "text": "3"
      },
      {
        "value": 4,
        "text": "4"
       }
       , {
        "value": 5,
        "text": "5"
       }, {
        "value": 6,
        "text": "6"
       }
     ]},
  {
    "name": "Fresh_completion3",
    "cellType": "radiogroup",
    "showInMultipleColumns": true,
    "choices": ["Complete","Not Complete "],
  },
  
    ],
    "rows": [
        "1. Is the F&V section set up with sufficient stock levels for the expected trade?",
        "2. Has the grading process been completed?",
        "3. Does the product quality meet Naivas's standard?",
        "4. Does every product have a price lable?",
        "5. Are bags availble for customers to shop loose products?",
        "6. Do the promotions have sufficient stock levels?",
        "7. Are the scales working and is the area clean and tidy?",
        "8. Are there sufficient staff schedulled for the expected trade?",
        "9. Do all promotions have orage SELs and talkers?",
        "10. Are there gloves available?"
      
     
    ],
    
  
  },
  
  


  {
  "type": "matrixdropdown",
  "name": "Fresh",
  "title": "Is the Deli counter ready for trade?",
  
  "columns": [
      {
          "name": "Fresh_col4",
          "cellType": "radiogroup",
          "showInMultipleColumns": true,
        //   "isRequired": true,
          "choices": ["Yes","No"]
      },
      {
        "name": "Fresh_nextstep4",
        "cellType": "text",
        "title": "Next step"
    },
    {
      "name": "Fresh_who4",
      "cellType": "text",
      "title": "who"
  },
  {
    "name":"Fresh_when4",
    "title":"when(hrs)",
    "cellType":"text",
    "inputType":"time",

 }
  ,
  {
  "name": "Fresh_completion4",
  "cellType": "radiogroup",
  "showInMultipleColumns": true,
  "choices": ["Complete","Not Complete"],
  },
  
  ],
  "rows": [
      "1. Is the deli counter set up with sufficient stock for the expected trade?",
      "2. Is the counter glass and top clean, clear and tidy?",
      "3. Does every product have a price?",
      "4. Are the correct SEL holders being used?",
      "5. Are all the required serving utensles available and clean?",
      "6. Are all staff in the correct uniform?",
      "7. Is the back counter clean and tidy?",
      "8. Do the promotions have sufficent stock for the expected trade?",
      "9. Are the sufficient staff schedulled for the expected trade?",
      "10. Do all the Deli staff have medical Certificates?"    
   
  ],
  
  
  
  
  
   
  
    
  
  
  },
  






  
  {
  "type": "matrixdropdown",
  "name": "Fresh",
  "title": "Is the Bakery ready for trade?",
  
  "columns": [
      {
          "name": "Fresh_col5",
          "cellType": "radiogroup",
          "showInMultipleColumns": true,
        //   "isRequired": true,
          "choices": ["Yes","No"]
      },
      {
        "name": "Fresh_nexstep5",
        "cellType": "text",
        "title": "Next step"
    },
    {
      "name": "Fresh_who5",
      "cellType": "text",
      "title": "who"
  },
  {
    "name":"Fresh_when5",
    "title":"when(hrs)",
    "cellType":"text",
    "inputType":"time",

 },
  {
  "name": "Fresh_completion5",
  "cellType": "radiogroup",
  "showInMultipleColumns": true,
  "showClearButton":true,
  "choices": ["Complete","Not Complete "],
  },
  
  ],
  "rows": [
      "1. Is the bakery set up with sufficient stock for the expected trade?",
      "2. Is the counter clean, clear and tidy?",
      "3. Does every product have a price?",
      "4. Are the correct SEL holders being used?",
      "5. Are all the required serving utensles available and clean?",
      "6. Are all staff in the correct uniform?",
      "7. Is the production area clean and tidy and all equipment working?",
      "8. Do the promotions have sufficent stock for the expected trade?",
      "9. Is the bakery production plan sufficient for the expected trade?",
      "10. Are the sufficient staff schedulled for the expected trade?",
      "11. Do all the Bakery staff have medical certificates?"
    
   
  ],
      
  
  
  },


  {
    "type": "matrixdropdown",
    "name": "Fresh",
    "title": "Is the Butcher ready for trade?",
    
    "columns": [
        {
            "name": "Fresh_col6",
            "cellType": "radiogroup",
            "showInMultipleColumns": true,
            // "isRequired": true,
            "choices": ["Yes","No"]
        },
        {
          "name": "Fresh_nexstep6",
          "cellType": "text",
          "title": "Next step"
      },
      {
        "name": "Fresh_who6",
        "cellType": "text",
        "title": "who"
    },
    {
      "name":"Fresh_when6",
      "title":"when(hrs)",
      "cellType":"text",
      "inputType":"time",

   }
   ,
    {
    "name": "Fresh_completion6",
    "cellType": "radiogroup",
    "showInMultipleColumns": true,
    "showClearButton":true,
    "choices": ["Complete","Not Complete "],
    },
    
    ],
    "rows": [
        "1. Is the butchery counter set up with sufficient stock for the expected trade?",
        "2. Is the counter clean, clear and tidy?",
        "3. Does every product have a price?",
        "4. Are the correct SEL holders being used?",
        "5. Are all staff in the correct uniform?",
        "6. Is the production area clean and tidy, with the correct utensles and all equipment working?",
        "7. Do the promotions have sufficent stock for the expected trade?",
        "8. Are the sufficient staff schedulled for the expected trade?",
      
    ],
        
    
    
    },



    {
        "type": "matrixdropdown",
        "name": "Fresh",
        "title": "Is the Fish counter ready for trade?",
        
        "columns": [
            {
                "name": "Fresh_col7",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
                // "isRequired": true,
                "choices": ["Yes","No"]
            },
            {
              "name": "Fresh_nexstep7",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "Fresh_who7",
            "cellType": "text",
            "title": "who"
        },
        {
          "name":"Fresh_when7",
          "title":"when(hrs)",
          "cellType":"text",
          "inputType":"time",
    
       },
        {
        "name": "Fresh_completion7",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "showClearButton":true,
        "choices": ["Complete","Not Complete "],
        },
        
        ],
        "rows": [
            "1. Is the fish counter set up with sufficient stock for the expected trade?",
            "2. Is the counter clean, clear and tidy?",
            "3. Does every product have a price?",
            "4. Are the correct SEL holders being used?",
            "5. Are all staff in the correct uniform?",
            "6. Is the production area clean and tidey and all equipment working?",
            "7. Do the promotions have sufficent stock for the expected trade?",
            "8. Are the sufficient staff scheduled for the expected trade?",
          
        ],
            
        
        
        },


        {
            "type": "matrixdropdown",
            "name": "Fresh",
            "title": "Is the Food To Go counter ready for trade?",
            
            "columns": [
                {
                    "name": "Fresh_col8",
                    "cellType": "radiogroup",
                    "showInMultipleColumns": true,
                    // "isRequired": true,
                    "choices": ["Yes","No"]
                },
                {
                  "name": "Fresh_nexstep8",
                  "cellType": "text",
                  "title": "Next step"
              },
              {
                "name": "Fresh_who8",
                "cellType": "text",
                "title": "who"
            },
            {
              "name":"Fresh_when8",
              "title":"when(hrs)",
              "cellType":"text",
              "inputType":"time",
        
           },
            {
            "name": "Fresh_completion8",
            "cellType": "radiogroup",
            "showInMultipleColumns": true,
            "showClearButton":true,
            "choices": ["Complete","Not Complete "],
            },
            
            ],
            "rows": [
                "1. Is the Food To Go counter set up with sufficient stock for the expected trade?",
                "2. Is the counter clean, clear and tidy?",
                "3. Does every product have a price",
                "4. Are the correct SEL holders being used?",
                "5. Are all staff in the correct uniform?",
                "6. Is the production area clean and tidey and all equipment working?",
                "7. Do the promotions have sufficent stock for the expected trade?",
                "8. Are the sufficient staff schedulled for the expected trade?",
              
            ],
                
            
            
            },




            {
                "type": "matrixdropdown",
                "name": "Fresh",
                "title": "Is the Cafe seated area ready for trading?",
                
                "columns": [
                    {
                        "name": "Fresh_col9",
                        "cellType": "radiogroup",
                        "showInMultipleColumns": true,
                        // "isRequired": true,
                        "choices": ["Yes","No"]
                    },
                    {
                      "name": "Fresh_nexstep9",
                      "cellType": "text",
                      "title": "Next step"
                  },
                  {
                    "name": "Fresh_who9",
                    "cellType": "text",
                    "title": "who"
                },
                {
                  "name":"Fresh_when9",
                  "title":"when(hrs)",
                  "cellType":"text",
                  "inputType":"time",
            
               },
                 
                {
                "name": "Fresh_completion9",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
                "showClearButton":true,
                "choices": ["Complete","Not Complete "],
                },
                
                ],
                "rows": [
                    "1. Is the area clean, floor, walls, chairs and tables?",
                    "2. Do all tables have the right number of chairs? (Social distancing)",
                    "3. Is the area well maintained, is any maintenance required?",
                    "4. Is there cutlery available? (If required)",
                    "5. Is the used crockery area clean, tidey and set up for the day?",
                    "6. Are there sufficient staff scheduled for the expected trade?",
                    "7. Are there multi skilled staff available and briefed if required?",
                    "8. Are the bins empty?",
                  
                ],
                    
                
                
                }
  
  
    ]
      }

      

export default Fresh