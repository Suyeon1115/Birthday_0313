// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
    // 기존에 모달이 있다면 제거합니다.
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }

    // 모달 요소를 생성합니다.
    const modal = document.createElement('div');
    modal.className = 'modal hidden';

    // 모달 내용을 담는 컨테이너를 생성합니다.
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content zoomIn';

    // 이미지를 표시할 요소를 생성합니다.
    const image = document.createElement('div');
    image.style.backgroundImage = `url(${imageUrl})`;
    image.alt = 'Door Image';
    image.style.width = '100%';
    image.style.height = '211px';

    // 텍스트를 표시할 요소를 생성합니다.
    const textElement = document.createElement('p');
    textElement.textContent = text;

    // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
    modalContent.appendChild(image);
    modalContent.appendChild(textElement);

    // 모달에 모달 컨텐트를 추가합니다.
    modal.appendChild(modalContent);

    // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
    modal.addEventListener('click', () => {
        modal.remove(); // 모달을 문서에서 제거합니다.
    });

    // 문서에 모달을 추가합니다.
    document.body.appendChild(modal);
    // 모달을 표시합니다.
    setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
    {"number" : 1, "message" : "27번째 찬희 생일을 기념하여 11개의 쿠폰을 지급합니다. 하루 하루 기대해주세요!!"},
    {"number" : 2, "message" : ""},
    {"number" : 3, "message" : " "},
    {"number" : 4, "message" : "이 쿠폰을 사용하면 어디서든 수연이를 소환 할 수 있습니다."},
    {"number" : 5, "message" : "이 쿠폰을 사용하면 수연이의 잔소리를 멈춰드립니다.  "},
    {"number" : 6, "message" : " "},
    {"number" : 7, "message" : " "},
    {"number" : 8, "message" : " "},
    {"number" : 9, "message" : "이 쿠폰을 사용하면 브랜드 상관없이 원하는 피자를 사드립니다."},
    {"number" : 10, "message" :" "},
    {"number" : 11, "message" :"이 쿠폰을 사용하면 사랑이 가득 담긴 요리를 해드립니다. "},
    {"number" : 12, "message" : "이 쿠폰을 사용하면 귀엽고 깜찍한 애교를 보여드립니다. "},
    {"number" : 13, "message" : "이 쿠폰을 사용하면 어디든 군말없이 동행해 드립니다."}, 
    {"number" : 14, "message" : " "},
    {"number" : 15, "message" : " "},
    {"number" : 16, "message" : " "},
    {"number" : 17, "message" : " "},
    {"number" : 18, "message" : "이 쿠폰을 사용하면 귀여운 찬희를 용서해드립니다."},
    {"number" : 19, "message" : "이 쿠폰을 사용하면 전국 어디라도 마중을 나가드립니다.  "},
    {"number" : 20, "message" : "이 쿠폰을 사용하면 원하는걸 선물해 드립니다."},
    {"number" : 21, "message" : "이 쿠폰을 사용하면 원하는 하루, 원하는 시간 만큼 혼자만의 시간을 드립니다.  "},
    {"number" : 22, "message" : "이 쿠폰을 사용하면 수연이의 요구를 한 번 거절 할 수 있습니다. "},
    {"number" : 23, "message" : ""},
    {"number" : 24, "message" : "HAPPY Birthday! 찬희야 태어나줘서 고마워, 요즘 매일 매일 행복해!! 오늘 이쁜 추억 쌓자 사랑해❤️"}
];


/*
// 전역에서 한 번만 실행되도록 클릭 이벤트 리스너를 등록
const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
    door.addEventListener('click', () => {
        // 상위 div의 class 번호를 찾아서 image url에 사용합니다
        const imageUrl = `image/card/card-${index+1}.png`;
        console.log("첫번째"+index);
        
        // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
        switch(index){
            case 1:
                index=3;
                break;
            case 2:
                index=4;
                break;
            case 5:
                index=11;
                break;
            case 6:
                index=12;
                break;
            case 7:
                index=17;
                break;
            case 9:
                index=19;
                break;
        }
        const doorDiv = document.querySelector(`.day-${index+1}`)
        const backDiv = doorDiv.querySelector(`.back`);
        console.log("두번째"+index);
        
        const style = window.getComputedStyle(backDiv);
        const pTag = backDiv.querySelector('p')
        console.log("세번째"+index);
        const text = modalMessageList[index]['message']
        
        // showModal 함수를 호출하여 모달을 표시합니다.
        showModal(imageUrl, text);

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

        // alert('이벤트 캘린더를 엽니다.');
    });
});*/