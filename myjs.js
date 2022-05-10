let secretnumber= Math.floor(Math.random() * (100-1) + 1);
let score=20;


// 정답이 될 수를 랜덤숫자로 가져옴
document.querySelector('.number').textContent=secretnumber;
// check버튼 클릭시 이벤트 발동
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);
    document.querySelector('.again'); 
    //아무것도 입력 안할때
    if(!guess){
        document.querySelector('.message').textContent= '숫자를 입력해주세요!';
        
    }
    // 숫자를 맞췄을 경우
    else if(guess === secretnumber){
        document.querySelector('.message').textContent= '정답입니다!';
        document.querySelector('.number').textContent=secretnumber;

        document.querySelector('.boy').setAttribute("src","boy2.png")
        document.querySelector('.container').style.backgroundColor="#094699";
        document.querySelector('.box').textContent=guess;
        

    // 숫자를 못맞출경우
    }else if(guess !==secretnumber){
        if(score >1){
            document.querySelector('.message').textContent=guess >secretnumber ?'높습니다!':'낮습니다!';
            score--; //남은 횟수를 1씩 차감한다.
            document.querySelector('.score').textContent=score;
        }else{ //횟수가 1 미만일 경우
            document.querySelector('.message').textContent='와우 다 꼴았습니다!';
            document.querySelector('.score').textContent=0;
        }
    }
});
// again을 누를시 이벤트 발생
document.querySelector('.retry').addEventListener('click',function(){
    score =20;
    secretnumber=Math.floor(Math.random() * (100-1) + 1);
    //횟수 리필
    document.querySelector('.message').textContent ='숫자 비교중....';
    //선언된 score = 20 출력
    document.querySelector('.score').textContent= score;
    
    document.querySelector('.box').textContent='❔';

    document.querySelector('.guess').value='';
    
    document.querySelector('.container').style.backgroundColor='#094699';
    
});