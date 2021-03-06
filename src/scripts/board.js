const answerFieldFill = '... ... ... ... ... ... ... ... ... ... ... ... ...';
/**
 * @param {int} number
 * @param {string} text
 * @param {int} points
 */
function setAnswer(number, text, points) {
    if (!document.querySelector(`[data-answer-num="${number}"]`)) {
        throw new Error('The HTML for the answer does not exist, ' +
            'make sure the question number you provided is in a 1-6 range');
    }

    const textContainer = document.querySelector(`[data-answer-num="${number}"] .text`);
    const pointsContainer = document.querySelector(`[data-answer-num="${number}"] .points`);

    textContainer.innerHTML = fillAnswerField(removeDiacritics(text));
    pointsContainer.innerHTML = points;
}

/**
 * @param {string} text
 * @returns {string}
 */
function fillAnswerField(text) {
    const fillLength = answerFieldFill.length;

    if (fillLength < text.length) {
        return text.substring(0, fillLength - 3) + '...';
    } else {
        return text + answerFieldFill.substring(text.length);
    }
}

/**
 * @param {TEAMS} team
 * @param {int} points
 */
function setPoints(team, points) {
    const teamPointContainer = document.querySelector(`.${team}-team .team-points`);

    if (!teamPointContainer) {
        throw new Error('The HTML for the team you provided does not exist, you probably have a typo in a team name');
    }

    document.querySelector(`.${team}-team .team-points`).innerHTML = points.toString();
}

/**
 * @param {TEAMS} team
 * @param {int} errorCnt
 */
function setErrors(team, errorCnt) {
    const errorIndicators = document.querySelectorAll(`.${team}-team .fail`);

    if (!errorIndicators.length) {
        throw new Error('The HTML for the team you provided does not exist, you probably have a typo in a team name');
    }

    for (let i = 0; i < errorIndicators.length; i++) {
        if (i < errorCnt) {
            errorIndicators[i].className = 'fail active';
        } else {
            errorIndicators[i].className = 'fail';
        }
    }
}

/**
 * @param {string} text
 */
function setQuestion(text) {
    document.querySelector('.question').innerHTML = removeDiacritics(text);
}

/**
 * @param {string} input
 * @returns {string}
 */
function removeDiacritics(input) {
    return input.replace(/\u0142/g, "l").normalize('NFKD').replace(/[^\w\s.-_\/]/g, '');
}

function setNumberOfAnswers(nofAnswers) {

    [1,2,3,4,5,6].forEach((number)=>{
        setAnswer(number, '', 0);
        
        document.querySelector(`[data-answer-num="${number}"]`).style.display=number<=nofAnswers?'block':'none';
    })

}
function gameOver(team){
    document.querySelector(".WinText").innerHTML="<h1>Gratulacje, wygrala druzyna " + team + "</h1><br>Aby zagrac ponownie, odswiez strone";
}

module.exports = {
    setAnswer,
    fillAnswerField,
    setPoints,
    setErrors,
    setQuestion,
    removeDiacritics,
    setNumberOfAnswers,
    gameOver
   // getQuestion,
};
