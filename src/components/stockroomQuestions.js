const Stockroom =  {
    "title":"Stockroom",
    "navigationTitle": "Stockroom",
    "showCompletedPage":false,
    "elements": [
      
      {
        "type": "matrixdropdown",
        "name": "Stockroom",
        "title": "Is the section clean?",
  
        "columns": [
            {
                "name": "Stockroom_Col1",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
                // "isRequired": true,
                "choices": ["Yes","No"],
   
            },
            
            {
              "name": "Stockroom_nextstep1",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "Stockroom_who1",
            "cellType": "text",
            "title": "who"
        },{
          "name":"Stockroom_when1",
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
        "name": "Stockroom_completion1",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "choices": ["Complete","Not Complete "],
      
        
    },
  
        ],
        "rows": [
            "1. Is the floor clean and dry?",
            "2. Is all fire fighting equipment accessable and not blocked?",
            "3. Are all fire exits clear of obstruction and accessable. ",
          
            
         
        ],
        
  
  
      
    
         
      },



      {
        "type": "matrixdropdown",
        "name": "Stockroom",
        "title": "Is the FMCG and GM stockroom operationally ready?",
  
        "columns": [
            {
                "name": "Stockroom_Col2",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
                // "isRequired": true,
                "choices": ["Yes","No"],
   
            },
            
            {
              "name": "Stockroom_nextstep2",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "Stockroom_who2",
            "cellType": "text",
            "title": "who"
        },{
          "name":"Stockroom_when2",
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
        "name": "Stockroom_completion2",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "choices": ["Complete","Not Complete "],
      
        
    },
  
        ],
        "rows": [
            "1. Is the stockroom well organised?",
            "2. Is stock stored safely and is easily accessable?",
            "3. Is FIFO being practiced?",
            "4. Are all areas labelled to say what is being stored?",
            "5. Are the deliveries being efficiently delt with?",
            "6. Is the areas clean and cleaning equipment available? (Brushes & Mops etc)",
            "7. Are there sufficient staff to manage the stockroom efficently?",
            "8. Is all equipment working and stored safely?",
            "9. Is there a area segrigated for returns?",
            "10. Is all stock stored on pallets?",
            "11. Is signage on display stating who can access the stockroom?"
          
            
         
        ],
        
     
      },


      {
        "type": "matrixdropdown",
        "name": "Stockroom",
        "title": "Is the Fresh stockroom operationally ready? ",
  
        "columns": [
            {
                "name": "Stockroom_Col3",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
                // "isRequired": true,
                "choices": ["Yes","No"],
   
            },
            
            {
              "name": "Stockroom_nextstep3",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "Stockroom_who3",
            "cellType": "text",
            "title": "who"
        },{
          "name":"Stockroom_when3",
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
        "name": "Stockroom_completion3",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "choices": ["Complete","Not Complete "],
      
        
    },
  
        ],
        "rows": [
            "1. Is the stockroom safe and well organised?",
            "2. Is stock stored safely and is easily accessable?",
            "3. Is FIFO being precticed?",
            "4. Are all areas labelled to say what is being stored where?",
            "5. Are the deliveries being efficiently delt with?",
            "6. Are the chillers fully working and are clean and tidy?",
            "7. Are the required tempreture check being carried out and recorded?",
            "8. Are there sufficient staff to manage the stockroom efficently?",
            "8. Is there a segrigated returns area?",
            
          
            
         
        ],
        
  
  
      
    
         
      }

    ]
}




export default Stockroom