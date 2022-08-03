let question_numbers = document.getElementsByClassName("question-box");
let base_timer = 60;
let timer, score, best_score;
let gameStart = false;
let current_result;

let input = document.getElementById("answer-input");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    startGame();
  }
});

function startGame()
{
    
    if(!gameStart)
    {
        newGame();
        gameStart = true;
    }
    else
    {
        submitAnswer();
    }
    
}

function newGame()
{
    score = 0;
    startTimer();
    document.getElementById('game-button').innerHTML = "NEXT";
    askQuestion();
    document.getElementById('score').innerHTML = "SCORE: " + score;
}

function submitAnswer()
{
    if(current_result == input.value)
    {
        score++;
        document.getElementById('score').innerHTML = "SCORE: " + score;
    }
    askQuestion();
}



function startTimer()
{
    timer = base_timer;
    document.getElementById('timer').innerHTML = "TIME: " + timer;

    let timerInterval = setInterval(
        function(){
            timer -= 1;
            document.getElementById('timer').innerHTML = "TIME: " + timer;
            if(timer <= 0)
            {
                clearInterval(timerInterval);
            }
        },1000
    );

    //set time out to stop the game
    
    setTimeout(function()
    {
        gameStart = false;
        document.getElementById('game-button').innerHTML = "PLAY";
        checkBestScore();
        resetBox();

    }, base_timer*1000);

}

function checkBestScore()
{
    best_score = (best_score > score ? best_score : score);
    document.getElementById('score').innerHTML = "BEST: " + score;
}

function resetBox()
{
    question_numbers[0].innerHTML = "??";
    question_numbers[1].innerHTML = "??";
}

function askQuestion()
{
    input.value = "";
    question_numbers[0].innerHTML = Math.floor(Math.random() * 89 + 10);
    question_numbers[1].innerHTML = Math.floor(Math.random() * 89 + 10);

    current_result = question_numbers[0].innerHTML * question_numbers[1].innerHTML;
    
}