const surveyData = require("../data/friends.js");

module.exports = function(app) {
  var scoreArray = [];
  var lastArray = [];
  
    app.get("/api/friends", function(req, res) {
      res.json(surveyData);
    });
  
    app.post("/api/friends", function(req, res) {

      const masterLead = (inArr) =>{
        lastArray.push(inArr.pop());
        lastArray.forEach(item => {
            lastScore = (item.scores).map(Number) ;
            let sumOf = lastScore.reduce((acc, cur) => {return acc + cur}, 0)
            let lastEntrySum = sumOf;
            secGuy(inArr, lastEntrySum)
        });
      };
      
      const secGuy = (inSecArr, inOperator) =>{
        let firstOperator = true;
        let operator = inOperator;
        let currentOperator = 0;
        inSecArr.forEach(element => {
            scoreArray = (element.scores).map(Number);
            objName = element.name;
            objImg = element.photo;
            let sumArrayAll = scoreArray.reduce((acc, cur) => {return acc + cur}, 0)  
            let compare = Math.abs(sumArrayAll - operator);
            if (firstOperator === true){
                currentOperator = compare;
                firstOperator = false;
            }
            if (compare <= currentOperator){
                currentOperator = compare;
                winner = sumArrayAll;
                winnerName = objName;
                winnerImg = objImg;
            }
            else {return true}
        });
        res.json({name: winnerName, photo: winnerImg})
    };

    if (surveyData) {
      surveyData.push(req.body);
      //res.json(surveyData);
      let newArray = surveyData.slice();
      masterLead(newArray);
    }

  });
  
  };