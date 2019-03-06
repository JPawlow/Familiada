import TEAMS from './teams'
import board from './board';
import speech from './speech';
import questionsFile from '../data.json';
import {
    QuestionsWraper
} from './QuestionsWraper'
import { setTimeout } from 'timers';

let Wraper = new QuestionsWraper(questionsFile)
let roundNumber = 0;
let question;
let team;
let totalScore = {
    blue: 0,
    red: 0
};
let errors = {
    blue: 0,
    red: 0
};
let beginningTeam = Math.random() > 0.5 ? TEAMS.RED : TEAMS.BLUE;

let highlightTeam=()=>{
    document.querySelectorAll('.team h4').forEach(x=>{
        x.style.color=""
        })
        document.querySelector('.'+team+'-team h4').style.color="#0F0"
}
let setLine = (answer) => {
    board.setAnswer(answer.lp, answer.ans, answer.points)
}

let addPoints = (team, points) => {
    board.setPoints(team, totalScore[team] += points)
}
let switchTeam=()=>{
    team = enemyTeam();
    highlightTeam()
}
let enemyTeam=()=>{
    if(team == TEAMS.RED){
        return TEAMS.BLUE;
    }else{
        return TEAMS.RED;
    }

}
let newRound=()=>{
    errors = {
        blue: 0,
        red: 0
    };
    board.setErrors(TEAMS.RED, 0)
    team = beginningTeam
    board.setErrors(TEAMS.BLUE, 0)
    question = Wraper.selectQuestion(++roundNumber);
    board.setNumberOfAnswers(question.answers.length)
    board.setQuestion(question.question);
    highlightTeam();
    document.querySelector(".WinText").innerHTML="";
    beginningTeam = enemyTeam()
}

newRound();
speech.loadGrammar(['żółty', 'zielony', 'fioletowy', 'niebieski']);
document.querySelector('.record').onclick = function () {
    speech.start().then((result) => {
        
        for (let captured of result[0]) {
            for (let [index,answer] of question.answers.entries()) {
                console.log(question.answers)
                if (board.removeDiacritics(captured.transcript) == answer.ans.toLowerCase()) {
                    setLine(answer);
                    addPoints(team, answer.points);
                    question.answers.splice(index,1)
                    if(totalScore.red>=300||totalScore.blue>=300){
                        console.log("dupa");
                        board.gameOver(team==TEAMS.RED?"Czerwonych":"Niebieskich");
                        document.querySelector('.record').remove();
                        return;
                    }
                    if(errors[enemyTeam()]>=3||question.answers.length==0){
                       setTimeout(newRound,1000);

                        
                    }
                    return;
                }
            }
        
        }

        board.setErrors(team, errors[team] += 1)
        if(errors[enemyTeam()]>=3 && errors[team]>=1){
            setTimeout(newRound,1000);
            
            return;
        }
        if (errors[team] < 3)
            return;
        if(errors[team]==3){
            switchTeam();

        }





    });
};