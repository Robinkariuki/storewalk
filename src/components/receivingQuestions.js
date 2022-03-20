const Receiving ={
    "title":"Receiving",
    "navigationTitle": "Receiving",
    "showCompletedPage":false,
    "elements": [
      
      {
        "type": "matrixdropdown",
        "name": "Receiving",
        "title": "Is the section clean?",
  
        "columns": [
            {
                "name": "Receiving_Col1",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
                // "isRequired": true,
                "choices": ["Yes","No"],
   
            },
            
            {
              "name": "Receiving_nextstep1",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "Receiving_who1",
            "cellType": "text",
            "title": "who"
        },{
          "name":"Receiving_when1",
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
        "name": "Receiving_completion1",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "choices": ["Complete","Not Complete "],
      
        
    },
  
        ],
        "rows": [
            "1. Is the floor clean and dry and servicable? (No potholes or damaged floors)",
            "2. Is all fire fighting equipment accessable and not blocked?",
            "3. Are all fire exits clear of obstruction and accessable?",
            "4. Is sanitizer and soap and water avialble for visitors to sanitize before entring the store?",

        ],        
        
    },

    {
        "type": "matrixdropdown",
        "name": "Receiving",
        "title": "Are  all the required log books, stamps and admin equipment available and proper process being used?",
  
        "columns": [
            {
                "name": "Receiving_Col2",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
                // "isRequired": true,
                "choices": ["Yes","No"],
   
            },
            
            {
              "name": "Receiving_nextstep2",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "Receiving_who2",
            "cellType": "text",
            "title": "who"
        },{
          "name":"Receiving_when2",
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
        "name": "Receiving_completion2",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "choices": ["Complete","Not Complete "],
      
        
    },
  
        ],
        "rows": [
            "1. Are all the books for recording deliveries and documentation available?",
            "2. Are the proper procedures being practiced from what you observe?",
            "3. Have any pending issues identified been refured to the appropriate head office department for resolution?",
           

        ],        
        
    },

       {
        "type": "matrixdropdown",
        "name": "Receiving",
        "title": "Are the correct staff availble to carryout the receiving processes?",
  
        "columns": [
            {
                "name": "Receiving_Col3",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
                // "isRequired": true,
                "choices": ["Yes","No"],
   
            },
            
            {
              "name": "Receiving_nextstep3",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "Receiving_who3",
            "cellType": "text",
            "title": "who"
        },{
          "name":"Receiving_when3",
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
        "name": "Receiving_completion3",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "choices": ["Complete","Not Complete "],
      
        
    },
  
        ],
        "rows": [
            "1. Have the receiving (Naivas) and checking (Loss Control) staff reported for duty?",

           

        ],        
        
    }
]
}



export default Receiving