// 목표 날짜 설정 (예시: 2023년 1월 1일)
const targetDate = new Date("2024-03-13");

function updateCountdown() {
  // 현재 한국 시간을 얻어오기
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));


  // 남은 시간 계산
  const timeRemaining = targetDate - now;

  // 시간, 분, 초 계산
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // 결과를 HTML에 업데이트
  const countdownElement = document.getElementById('countdown');
  countdownElement.style.color = '#FF9EA9'
  countdownElement.innerHTML = `
      <span>D-${days} ${hours}시간${minutes}분${seconds}초</span>`;
}
// 페이지 로드 시에도 업데이트 수행
updateCountdown();

// 1초마다 업데이트
setInterval(updateCountdown, 1000);

// 날짜 기준 카드 오픈 기능 

const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
  door.addEventListener('click', () => {
    // 현재 한국 시간을 얻어오기
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));

    // 각 날짜에 해당하는 날짜를 계산
    const openDate = new Date(2024, 2, index + 1); // 2023년 12월 1일부터 시작

    // 현재 날짜가 열 수 있는 날짜 이후인지 확인
    if (now.getTime() > openDate.getTime()) {
      // 여기에 모달을 열거나 특정 동작을 수행하는 코드 추가


      // 상위 div의 class 번호를 찾아서 image url에 사용합니다
      //index 0 부터 시작 
      const imageUrl = `image/card/card-${index + 1}.png`;

      console.log("날짜 "+index+"일");
      console.log(imageUrl);
      //number, day 초기화 
      Number=0; day=0;
      day=index+1;
      
      switch(index){
        case 1:
            index=3;
            Number=3;
            break;
        case 2:
            index=4;
            Number=4;
            break;
        case 3: 
            index=8;   
            Number=8;
            break;
        case 4:
            index=10;
            Number=10;
            break;
        case 5:
            index=11;
            Number=11;
            break;
        case 6:
            index=12;
            Number=12;
            break;
        case 7:
            index=17;
            Number=17;
            break;
        case 8:
            index=18;
            Number=18;
            break;
        case 9:
            index=19;
            Number=19;
            break;
        case 10:
            index=20;
            Number=20;
            break;
        case 11:
            index=21;
            Number=21;
            break;
        case 12:
            index=23;
            Number=23;
            break;    
    }
   
      // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
      const doorDiv = document.querySelector(`.day-${index + 1}`)
      const backDiv = doorDiv.querySelector(`.back`);

      const style = window.getComputedStyle(backDiv);
      const pTag = backDiv.querySelector('p')


      const text = modalMessageList[index]['message']
      console.log("카드 번호: "+index);
      console.log(imageUrl);

      switch(Number){
        case 3:
          index=1;
          break;
        case 4:
          index=2;
          break; 
        case 8:
          index=3;
          break;
        case 10:
          index=4;
          break;
        case 11:
          index=5;
          break;
        case 12:
          index=6;
          break;
        case 17:
          index=7;
          break;
        case 18:
           index=8;
           break;
        case 19:
            index=9;
            break;
        case 20:
            index=10;
            break;
        case 21:
            index=11;
            break;
        case 23:
            index=12;
            break;         
      }
  

      // showModal 함수를 호출하여 모달을 표시합니다.
      showModal(imageUrl, text);
      if(day==1||day==13){

      }else{
        alert('3월'+day+'일 쿠폰을 엽니다.');
      }
      
      
      /*
      switch(index){
        case 3:
            index=2;
            break;
        case 4:
            index=2;
            break;
        case 11:
            index=5;
            break;
        case 12:
            index=6;
            break;
        case 19:
            index=9;
            break;
    }
    */

    } else {
      // 현재 날짜가 열 수 있는 날짜보다 이전인 경우 몇 일 후에 열 수 있다는 메시지를 표시
      const daysRemaining = Math.ceil((openDate - now) / (1000 * 60 * 60 * 24));
      console.log(openDate, now, daysRemaining)
      alert(`이 카드는 ${daysRemaining}일 후에 열 수 있어요!`);
    }
  });
})
