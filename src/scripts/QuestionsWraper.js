

export class QuestionsWraper{

    constructor(questionsFile){
        this.questionsObject =[[],[],[],[]];
        for(let questionRecord in questionsFile.questions){
            let tableIndex=questionsFile.questions[questionRecord].length-4;
            this.questionsObject[tableIndex].push({question: questionRecord, answers: questionsFile.questions[questionRecord].slice(1)})
        }
        
    }
    selectQuestion(roundNumber){
        let randomQuestion;
        console.log(this.questionsObject[3].length)

        if(roundNumber == 1 || roundNumber == 2){
            return this.questionsObject[3].splice(Math.floor(Math.random()*(this.questionsObject[3].length)),1)[0]
        }
        else if(roundNumber == 3){
            return  this.questionsObject[2].splice(Math.floor(Math.random()*(this.questionsObject[2].length)),1)[0]
        }
        else if(roundNumber == 4){
            return  this.questionsObject[1].splice(Math.floor(Math.random()*(this.questionsObject[1].length)),1)[0]
        }
        else{
            return  this.questionsObject[0].splice(Math.floor(Math.random()*(this.questionsObject[0].length)),1)[0]
        }

    }

}