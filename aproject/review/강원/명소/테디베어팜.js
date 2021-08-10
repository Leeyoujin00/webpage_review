// 아이콘 선택자
const menuOpenEl = document.getElementById('btn--open')
// 닫는 아이콘 선택자
const menuCloseEl = document.getElementById('btn--close')
// 사이드 네비게이션 선택자
const sideMenuEl = document.getElementById('pop')
//outside_menu 영역 선택자
const outsideMenuEl=document.getElementById('outside__menu')




// 햄버거 바 아이콘에 클릭 이벤트가 발생하면,
menuOpenEl.addEventListener("click", function() {
    // 햄버거 바 아이콘을 보이지 않게 처리,
    menuOpenEl.style.display = 'none'
    // 닫는 아이콘은 보이게 처리
    menuCloseEl.style.display = 'block'
    // 사이드 메뉴를 보이게 합니다 
    sideMenuEl.style.display = 'block'
    //outside_menu 숨기기
    outsideMenuEl.style.display='block'
})

// 닫는 아이콘에 클릭 이벤트가 발생하면,
menuCloseEl.addEventListener("click", function() {
    // 햄버거 바 아이콘을 보이게 처리,
    menuOpenEl.style.display = 'block'
    // 닫는 아이콘은 보이지 않게 처리
    menuCloseEl.style.display = 'none'
    // 사이드 메뉴를 원상태로 숨깁니다
    sideMenuEl.style.display = 'none'
    //outside_menu 숨기기
    outsideMenuEl.style.display='none'
})
//누구와 함께하였는지 클릭할때 사용
//초등학생 영역자
const eleschoolEl=document.getElementsByClassName('btn-outline-secondary')[3];
//10대 영역wk
const tenEl=document.getElementsByClassName('btn-outline-secondary')[4];
//20대 영역자
const twentyEl=document.getElementsByClassName('btn-outline-secondary')[5];
//30대 선택 영역자
const thirtyEl=document.getElementsByClassName('btn-outline-secondary')[6];
//40대 영역자
const fourtyEl=document.getElementsByClassName('btn-outline-secondary')[7];
//50대 선택 영역자
const fiftyEl=document.getElementsByClassName('btn-outline-secondary')[8];
// 초등학생 선택에 클릭 이벤트가 발생하면,
eleschoolEl.addEventListener("click", function() {
    // 배경색 바꾸기
    eleschoolEl.style.backgroundColor = '#0d6efd'
    // 글씨색 바꾸기
    eleschoolEl.style.color = '#fff'
    //나머지 원래대로
    twentyEl.style.backgroundColor = '#fff'
    twentyEl.style.color = 'dimgray'
    thirtyEl.style.backgroundColor = '#fff'
    thirtyEl.style.color = 'dimgray'
    fourtyEl.style.backgroundColor = '#fff'
    fourtyEl.style.color = 'dimgray'
    fiftyEl.style.backgroundColor = '#fff'
    fiftyEl.style.color = 'dimgray'
    tenEl.style.backgroundColor = '#fff'
    tenEl.style.color = 'dimgray'
})
// 10대 선택에 클릭 이벤트가 발생하면,
tenEl.addEventListener("click", function() {
    // 배경색 바꾸기
    tenEl.style.backgroundColor = '#0d6efd'
    // 글씨색 바꾸기
    tenEl.style.color = '#fff'
    //나머지 원래대로
    twentyEl.style.backgroundColor = '#fff'
    twentyEl.style.color = 'dimgray'
    thirtyEl.style.backgroundColor = '#fff'
    thirtyEl.style.color = 'dimgray'
    fourtyEl.style.backgroundColor = '#fff'
    fourtyEl.style.color = 'dimgray'
    fiftyEl.style.backgroundColor = '#fff'
    fiftyEl.style.color = 'dimgray'
    eleschoolEl.style.backgroundColor = '#fff'
    eleschoolEl.style.color = 'dimgray'
})
// 20대 선택에 클릭 이벤트가 발생하면,
twentyEl.addEventListener("click", function() {
    // 배경색 바꾸기
    twentyEl.style.backgroundColor = '#0d6efd'
    // 글씨색 바꾸기
    twentyEl.style.color = '#fff'
    //나머지 원래대로
    eleschoolEl.style.backgroundColor = '#fff'
    eleschoolEl.style.color = 'dimgray'
    thirtyEl.style.backgroundColor = '#fff'
    thirtyEl.style.color = 'dimgray'
    fourtyEl.style.backgroundColor = '#fff'
    fourtyEl.style.color = 'dimgray'
    fiftyEl.style.backgroundColor = '#fff'
    fiftyEl.style.color = 'dimgray'
    tenEl.style.backgroundColor = '#fff'
    tenEl.style.color = 'dimgray'
})
// 30대 선택에 클릭 이벤트가 발생하면,
thirtyEl.addEventListener("click", function() {
    // 배경색 바꾸기
    thirtyEl.style.backgroundColor = '#0d6efd'
    // 글씨색 바꾸기
    thirtyEl.style.color = '#fff'
    //나머지 원래대로
    twentyEl.style.backgroundColor = '#fff'
    twentyEl.style.color = 'dimgray'
    eleschoolEl.style.backgroundColor = '#fff'
    eleschoolEl.style.color = 'dimgray'
    fourtyEl.style.backgroundColor = '#fff'
    fourtyEl.style.color = 'dimgray'
    fiftyEl.style.backgroundColor = '#fff'
    fiftyEl.style.color = 'dimgray'
    tenEl.style.backgroundColor = '#fff'
    tenEl.style.color = 'dimgray'
})
// 40대 선택에 클릭 이벤트가 발생하면,
fourtyEl.addEventListener("click", function() {
    // 배경색 바꾸기
    fourtyEl.style.backgroundColor = '#0d6efd'
    // 글씨색 바꾸기
    fourtyEl.style.color = '#fff'
    //나머지 원래대로
    twentyEl.style.backgroundColor = '#fff'
    twentyEl.style.color = 'dimgray'
    thirtyEl.style.backgroundColor = '#fff'
    thirtyEl.style.color = 'dimgray'
    eleschoolEl.style.backgroundColor = '#fff'
    eleschoolEl.style.color = 'dimgray'
    fiftyEl.style.backgroundColor = '#fff'
    fiftyEl.style.color = 'dimgray'
    tenEl.style.backgroundColor = '#fff'
    tenEl.style.color = 'dimgray'
})
// 초등학생 선택에 클릭 이벤트가 발생하면,
fiftyEl.addEventListener("click", function() {
    // 배경색 바꾸기
    fiftyEl.style.backgroundColor = '#0d6efd'
    // 글씨색 바꾸기
    fiftyEl.style.color = '#fff'
    //나머지 원래대로
    twentyEl.style.backgroundColor = '#fff'
    twentyEl.style.color = 'dimgray'
    thirtyEl.style.backgroundColor = '#fff'
    thirtyEl.style.color = 'dimgray'
    fourtyEl.style.backgroundColor = '#fff'
    fourtyEl.style.color = 'dimgray'
    eleschoolEl.style.backgroundColor = '#fff'
    eleschoolEl.style.color = 'dimgray'
    tenEl.style.backgroundColor = '#fff'
    tenEl.style.color = 'dimgray'
})
//누구와 함께하였는지 클릭할때 사용
//가족 선택 영역자
const withfamilyEl=document.getElementsByClassName('btn-outline-secondary')[9];
//친구 선택 영역자
const withfriendsEl=document.getElementsByClassName('btn-outline-secondary')[10];
//연인 선택 영역자
const withloverEl=document.getElementsByClassName('btn-outline-secondary')[11];
//기타 선택 영역자
const withothersEl=document.getElementsByClassName('btn-outline-secondary')[12];
// 가족 선택에 클릭 이벤트가 발생하면,
withfamilyEl.addEventListener("click", function() {
    // 배경색 바꾸기
    withfamilyEl.style.backgroundColor = '#0d6efd'
    // 글씨색 바꾸기
    withfamilyEl.style.color = '#fff'
    //나머지 원래대로
    withfriendsEl.style.backgroundColor = '#fff'
    withfriendsEl.style.color = 'dimgray'
    withloverEl.style.backgroundColor = '#fff'
    withloverEl.style.color = 'dimgray'
    withothersEl.style.backgroundColor = '#fff'
    withothersEl.style.color = 'dimgray'
    
})
// 친구 선택에 클릭 이벤트가 발생하면,
withfriendsEl.addEventListener("click", function() {
    // 배경색 바꾸기
    withfriendsEl.style.backgroundColor = '#0d6efd'
    // 글씨색 바꾸기
    withfriendsEl.style.color = '#fff'
    //나머지 원래대로
    withfamilyEl.style.backgroundColor = '#fff'
    withfamilyEl.style.color = 'dimgray'
    withloverEl.style.backgroundColor = '#fff'
    withloverEl.style.color = 'dimgray'
    withothersEl.style.backgroundColor = '#fff'
    withothersEl.style.color = 'dimgray'
    
})
// 연인 선택에 클릭 이벤트가 발생하면,
withloverEl.addEventListener("click", function() {
    // 배경색 바꾸기
    withloverEl.style.backgroundColor = '#0d6efd'
    // 글씨색 바꾸기
    withloverEl.style.color = '#fff'
    //나머지 원래대로
    withfamilyEl.style.backgroundColor = '#fff'
    withfamilyEl.style.color = 'dimgray'
    withfriendsEl.style.backgroundColor = '#fff'
    withfriendsEl.style.color = 'dimgray'
    withothersEl.style.backgroundColor = '#fff'
    withothersEl.style.color = 'dimgray'
    
})
// 기타 선택에 클릭 이벤트가 발생하면,
withothersEl.addEventListener("click", function() {
    // 배경색 바꾸기
    withothersEl.style.backgroundColor = '#0d6efd'
    // 글씨색 바꾸기
    withothersEl.style.color = '#fff'
    //나머지 원래대로
    withfamilyEl.style.backgroundColor = '#fff'
    withfamilyEl.style.color = 'dimgray'
    withfriendsEl.style.backgroundColor = '#fff'
    withfriendsEl.style.color = 'dimgray'
    withloverEl.style.backgroundColor = '#fff'
    withloverEl.style.color = 'dimgray'
    
})
//별점 마킹 모듈 프로토타입으로 생성
function Rating(){};
Rating.prototype.rate = 0;
Rating.prototype.setRate = function(newrate){
    //별점 마킹 - 클릭한 별 이하 모든 별 체크 처리
    this.rate = newrate;
    let items = document.querySelectorAll('.rate_radio');
    items.forEach(function(item, idx){
        if(idx < newrate){
            item.checked = true;
        }else{
            item.checked = false;
        }
    });
}
let rating = new Rating();//별점 인스턴스 생성
document.addEventListener('DOMContentLoaded', function(){
    //별점선택 이벤트 리스너
    document.querySelector('.rating').addEventListener('click',function(e){
        let elem = e.target;
        if(elem.classList.contains('rate_radio')){
            rating.setRate(parseInt(elem.value));
        }
    })
});
//거리 계산 연습
var ourCoords = { //낙산공원 좌표
    latitude : 38.205425147527805,   //위도
    longitude : 128.5156111566003   //경도
};

window.onload = getMyLocation;

function getMyLocation() {

     // navigator.geolocation 없다면 null을 반환하고 조건식의 결과는 false
    if (navigator.geolocation) {
        
        //getCurrentPosition(successhandler, errorHandler, option)
        navigator.geolocation.getCurrentPosition(
            displayLocation, 
            displayError); 
    } else {
        alert("내 위치 정보제공 설정이 꺼져있거나, 지원하지 않는 브라우져 입니다." );
    }
}

function displayLocation(position) {

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    var distance = computeDistance(position.coords, ourCoords);
    $("#distance").html("당신과 테디베어팜 사이의 대략적인 거리:"+distance.toFixed(1)+"km");
                        
}

function displayError(error) {
    var errorTypes = {
        0: "알려지지 않은 에러",
        1: "사용자가 권한 거부",
        2: "위치를 찾을 수 없음",
        3: "요청 응답 시간 초과"
    };
    var errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
        errorMessage = errorMessage + " " + error.message;
    }
    $("#location").html(errorMessage);        
}


// 구면 코사인 법칙(Spherical Law of Cosine) 으로 두 위도/경도 지점의 거리를 구함
// 반환 거리 단위 (km)
function computeDistance(startCoords, destCoords) {
    var startLatRads = degreesToRadians(startCoords.latitude);
    var startLongRads = degreesToRadians(startCoords.longitude);
    var destLatRads = degreesToRadians(destCoords.latitude);
    var destLongRads = degreesToRadians(destCoords.longitude);

    var Radius = 6371; //지구의 반경(km)
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
                    Math.cos(startLatRads) * Math.cos(destLatRads) *
                    Math.cos(startLongRads - destLongRads)) * Radius;

    return distance;
}

function degreesToRadians(degrees) {
    radians = (degrees * Math.PI)/180;
    return radians;
}
// 제출하기 버튼 누르면 팝업창 닫음
const submitEl = document.getElementById('submit')

submitEl.addEventListener("click", function() {
    // 햄버거 바 아이콘을 보이게 처리,
    menuOpenEl.style.display = 'block'
    // 닫는 아이콘은 보이지 않게 처리
    menuCloseEl.style.display = 'none'
    // 사이드 메뉴를 원상태로 숨깁니다
    sideMenuEl.style.display = 'none'
    //outside_menu 숨기기
    outsideMenuEl.style.display='none'
})