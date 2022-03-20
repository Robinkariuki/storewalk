const FMCG =  {
    "title":"FMCG",
    "navigationTitle": "FMCG",
    "showCompletedPage":false,
    "elements": [
      
      {
        "type": "matrixdropdown",
        "name": "FMCG",
        "title": "Is the section clean and fire equipment accessable?",
  
        "columns": [
            {
                "name": "FMCG_Col1",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
                // "isRequired": true,
                "choices": ["Yes","No"],
   
            },
            
            {
              "name": "FMCG_nextstep1",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "FMCG_who1",
            "cellType": "text",
            "title": "who"
        },{
          "name":"FMCG_when1",
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
        "name": "FMCG_completion1",
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
        "name": "FMCG",
        "title": "Is the section accessable for customers?",
    
        "columns": [
            {
                "name": "FMCG_col2",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
              //   "isRequired": true,
                "choices": ["Yes","No"],
            },
            {
              "name": "FMCg_nextstep2",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "FMCG_who2",
            "cellType": "text",
            "title": "who"
        },
        {
        "name":"FMCG_when2" ,
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
        "name": "FMCG_completion2",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "choices": ["Complete","Not Complete "],
    },
    
        ],
        "rows": [
            "1. Is the FMCG area clear from obstructions allowing customers easy access?",
            "2. Is there room for two trollies to pass each other?",
            "3. Are all off fixture promotion within the agreed space alocated?",
            "4. Are any demonstrators and third party promoters in the agreed location and within the agreed space?",
            "5. Is there clear demarcation between food and non food?"
  
          
         
        ],
    
          
    
        
    }
    ,
    {
        "type": "matrixdropdown",
        "name": "FMCG",
        "title": "Are all the drops ready for trade?",
    
        "columns": [
            {
                "name": "FMCG_col3",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
              //   "isRequired": true,
                "choices": ["Yes","No"],
            },
            {
              "name": "FMCg_nextstep3",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "FMCG_who3",
            "cellType": "text",
            "title": "who"
        },
        {
        "name":"FMCG_when3" ,
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
        "name": "FMCG_completion3",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "choices": ["Complete","Not Complete "],
    },
    
        ],
        "rows": [
            "1. Have the shelves been replenished? ",
            "2. Are the stock levels sufficient for the expected trade?",
            "3. Does every shelf have a shelf edge strip, and is it clean?",
            "4. Does every product have an SEL positioned cenrtally?",
            "5. Do all promotions have orange SELs and supporting slelf talkers?",
            "6. Are there sufficient staff schedulled for the expected trade?",
            "7 Are merchandise standards correct and planograms in use where issued?"
         
        ],
    
          
    
        
    },






    {
        "type": "matrixdropdown",
        "name": "FMCG",
        "title": "Are the gondola ends ready for trade?",
    
        "columns": [
            {
                "name": "FMCG_col4",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
              //   "isRequired": true,
                "choices": ["Yes","No"],
            },
            {
              "name": "FMCg_nextstep4",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "FMCG_who4",
            "cellType": "text",
            "title": "who"
        },
        {
        "name":"FMCG_when4" ,
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
        "name": "FMCG_completion4",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "choices": ["Complete","Not Complete "],
    },
    
        ],
        "rows": [
            "1. Have the gondola end shelves been replenished? ",
            "2. Are the stock levels are sufficient for the expected trade?",
            "3. Does every shelf have a shelf edge strip, and is it clean?",
            "4. Does every product have an SEL positioned centrally?",
            "5. Do all promotions have orange SELs and supporting slelf talkers?",
            "6. Is the gondola 'Promotional' generic header and side signage in place?",
            "7. Do promos match 'What Good Looks Like' photos?"
         
        ],
    
          
    
        
    },


    {
        "type": "matrixdropdown",
        "name": "FMCG",
        "title": "Are the promotion stacks ready for trade?",
    
        "columns": [
            {
                "name": "FMCG_col5",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
              //   "isRequired": true,
                "choices": ["Yes","No"],
            },
            {
              "name": "FMCg_nextstep5",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "FMCG_who5",
            "cellType": "text",
            "title": "who"
        },
        {
        "name":"FMCG_when5" ,
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
        "name": "FMCG_completion5",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "choices": ["Complete","Not Complete "],
    },
    
        ],
        "rows": [
            "1. Have the Promo Stacks been replenished?",
            "2. Are the stock levels are sufficient for the expected trade?",
            "3. Are the Promo Stacks well built, neat and tidey and stable?",
            "4. Does every product have an SEL?",
            "5. Do all promotions have orange SELs and appropreate supporting promo signage in the correct signage holders?",
            "6. Is the product on the Promo Stack clean? (Dust free)",
            "7. Is it accesable for customers to shop?",
            "8. Do promos match 'What Good Looks Like' photos?",
            "9 Are the promo start and end dates clear on the POS?"
         
        ],
    
          
    
        
    },
    



    {
        "type": "matrixdropdown",
        "name": "FMCG",
        "title": "Is the Dairy Section ready for trade?",
    
        "columns": [
            {
                "name": "FMCG_col6",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
              //   "isRequired": true,
                "choices": ["Yes","No"],
            },
            {
              "name": "FMCg_nextstep6",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "FMCG_who6",
            "cellType": "text",
            "title": "who"
        },
        {
        "name":"FMCG_when6" ,
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
        "name": "FMCG_completion6",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "choices": ["Complete","Not Complete "],
    },
    
        ],
        "rows": [
            "1. Is the Dairy section set up with sufficient stock levels for the expected trade?",
            "2. Have expiery date checks been completed?",
            "3. Does the product quality meet Naivas's standard?",
            "4. Does every product have a clean price lable?",
            "5. Have the chillers been cleaned and are free from any spillages?",
            "6. Do the promotions have sufficient stock levels?",
            "7. Are the sufficient staff schedulled for the expected trade?",
            "8. Do all promotions have orage SELs and talkers?",
            "9. Have temperature checks been completed?",
            "10. Are all the chiller lights working?"
         
        ],
    
          
    
        
    },






    {
        "type": "matrixdropdown",
        "name": "FMCG",
        "title": "Are the Meet Chillers ready for trade?",
    
        "columns": [
            {
                "name": "FMCG_col7",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
              //   "isRequired": true,
                "choices": ["Yes","No"],
            },
            {
              "name": "FMCg_nextstep7",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "FMCG_who7",
            "cellType": "text",
            "title": "who"
        },
        {
        "name":"FMCG_when7" ,
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
        "name": "FMCG_completion7",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "choices": ["Complete","Not Complete "],
    },
    
        ],
        "rows": [
            "1. Is the Meat Chiller set up with sufficient stock levels for the expected trade?",
            "2. Have expiery date checks been completed?",
            "3. Does the product quality meet Naivas's standard?",
            "4. Does every product have a clean price lable?",
            "5. Have the chillers been cleaned and are free from any spillages?",
            "6. Do the promotions have sufficient stock levels?",
            "7. Are the sufficient staff schedulled for the expected trade?",
            "8. Do all promotions have orage SELs and talkers?",
            "9. Have temperature checks been completed?",
            "10. Are all the chiller lights working?"
         
        ],
    
          
    
        
    },

    {
        "type": "matrixdropdown",
        "name": "FMCG",
        "title": "Is the wines, beers and spirits area ready for trade?",
    
        "columns": [
            {
                "name": "FMCG_col8",
                "cellType": "radiogroup",
                "showInMultipleColumns": true,
              //   "isRequired": true,
                "choices": ["Yes","No"],
            },
            {
              "name": "FMCG_nextstep8",
              "cellType": "text",
              "title": "Next step"
          },
          {
            "name": "FMCG_who8",
            "cellType": "text",
            "title": "who"
        },
        {
        "name":"FMCG_when8" ,
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
        "name": "FMCG_completion8",
        "cellType": "radiogroup",
        "showInMultipleColumns": true,
        "choices": ["Complete","Not Complete "],
    },
    
        ],
        "rows": [
            "1. Are the floor and fixtures clean?",
            "2. Is the till area clean and tidey and the till operational?",
            "3. Have all price changes been implemented?",
            "4. Has the section been replenished?",
            "5. Is all the correct legal signage in place?",
            "6. Do promotions have sufficient stock for trade?",
            "7. Are the sufficient staff schedulled for the expected trade?",
            "8. Do all promotions have orage SELs and talkers?",
            "9. Have temperature checks been completed?",
            "10. Are all the chiller lights working?"
         
        ],
    
          
    
        
    }





]
}
    



export default FMCG