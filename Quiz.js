var user = "Unknown Owl";
var score = 0;

function start() {
    user = document.getElementById('username').value;
    document.getElementById('score').innerHTML = score;
    if(document.getElementById('username').value != ""){
        document.getElementById('name').innerHTML = user;
    }
    scoreBoard.style.display = "block";
    intro.style.display = "none";
    q1.style.display = "block";
}


function checkQ1() {
    var x = document.getElementById("check1");
    if(x.checked == true){
        score += 10;
        document.getElementById('modal').style.backgroundColor = 'rgba(0, 171, 0, 0.42)';
        document.getElementById('q1Answer').innerHTML = "Correct! +10 Points";
        document.getElementById('q1Response').innerHTML = "Good work, keep going!";
        document.getElementById('score').innerHTML = score;
    }
    else{
        document.getElementById('modal').style.backgroundColor = 'rgba(255, 0, 2, 0.75)';
        document.getElementById('q1Answer').innerHTML = "Wrong!";
        document.getElementById('q1Response').innerHTML = "Better luck next time!";
    }
}
function question1() {
    q1.style.display = "none";
    q2.style.display = "block";
}


function checkQ2() {
    var x = document.getElementById("check2");
    if(x.checked == true){
        score += 5;
        document.getElementById('modal2').style.backgroundColor = 'rgba(0, 171, 0, 0.42)';
        document.getElementById('q2Answer').innerHTML = "Correct! +5 Points";
        document.getElementById('q2Response').innerHTML = "Good work, keep going!";
        document.getElementById('score').innerHTML = score;
    }
    else{
        document.getElementById('modal2').style.backgroundColor = 'rgba(255, 0, 2, 0.75)';
        document.getElementById('q2Answer').innerHTML = "Oof, that was an easy one...";
        document.getElementById('q2Response').innerHTML = "Better luck next time!";
    }
}
function question2() {
    q2.style.display = "none";
    q3.style.display = "block";
}