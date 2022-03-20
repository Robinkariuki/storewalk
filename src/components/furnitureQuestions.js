const Furniture = {
    "title":"Furniture",
    "navigationTitle": "Furniture",
    "showCompletedPage":false,
    "elements": [
      
      {
        "type": "matrixdropdown",
        "name": "Furniture",
        "title": "Is the section clean?",
  
        "columns": [
            {
                "name": "Furniture_Col1",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
                // "isRequired": true,
                "choices": ["Yes","No"],
   
            },
            
            {
              "name": "Furniture_nextstep1",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "Furniture_who1",
            "cellType": "text",
            "title": "who"
        },{
          "name":"Furniture_when1",
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
        "name": "Furniture_completion1",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "choices": ["Complete","Not Complete "],
      
        
    },
  
        ],
        "rows": [
            "1. Is the floor clean and dry?",
            "2. Are the fixtures clean?",
            "3. Is all fire fighting equipment accessable and not blocked?",
            "4. Are all fire exits clear of obstruction and accessable. ",
          
            
         
        ],
        
  
  
      
    
         
      },







      {
        "type": "matrixdropdown",
        "name": "Furniture",
        "title": "Is the section accessable for customers?",
  
        "columns": [
            {
                "name": "Furniture_Col2",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
                // "isRequired": true,
                "choices": ["Yes","No"],
   
            },
            
            {
              "name": "Furniture_nextstep2",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "Furniture_who2",
            "cellType": "text",
            "title": "who"
        },{
          "name":"Furniture_when2",
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
        "name": "Furniture_completion2",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "choices": ["Complete","Not Complete "],
      
        
    },
  
        ],
        "rows": [
            "1. Is the Furniture area clear from obstructions allowing customers easy access?",
            "2. Is there room for customers to pass each other?",
            "3. Is all fire fighting equipment accessable and not blocked?",
            "3. Are all promotion areas within the agreed space alocated? ",
          
            
         
        ],
        
  
  
      
    
         
      },








      {
        "type": "matrixdropdown",
        "name": "Furniture",
        "title": "Is the furniture section ready  for trade?",
  
        "columns": [
            {
                "name": "Furniture_Col3",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
                // "isRequired": true,
                "choices": ["Yes","No"],
   
            },
            
            {
              "name": "Furniture_nextstep3",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "Furniture_who3",
            "cellType": "text",
            "title": "who"
        },{
          "name":"Furniture_when3",
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
        "name": "Furniture_completion3",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "choices": ["Complete","Not Complete "],
      
        
    },
  
        ],
        "rows": [
            "1. Are there clear walkways between items and the section not over filled?",
            "2. Does every item have a clearly visible price?",
            "3. Is the display furniture well assembeld?",
            "4. Are there any damaged items on display?",
            "5. Are any stacked products safe, secure and accesable for customers?",
            "6. Are promotions visable, with supporting POS?",
            "7. Has the display furniture been cleaned? (No dust)",
            "8. Are the sufficient staff schedulled for the expected trade?",
            "9. Can staff assembel furniture?",
            "10. Do staff know about the home delivery service?"
          
            
         
        ],
        
  
  
      
    
         
      }


        
      
    ]
        
    }
    






    export default Furniture