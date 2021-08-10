// // 아이콘 선택자
// const menuOpenEl = document.getElementById('btn--open')
// // 닫는 아이콘 선택자
// const menuCloseEl = document.getElementById('btn--close')
// // 사이드 네비게이션 선택자
// const sideMenuEl = document.getElementById('pop')
// //outside_menu 영역 선택자
// const outsideMenuEl=document.getElementById('outside__menu')

//누구와 함께하였는지 클릭할때 사용
//가족 선택 영역자
const withfamilyEl=document.getElementsByClassName('btn-outline-secondary')[0];
//친구 선택 영역자
const withfriendsEl=document.getElementsByClassName('btn-outline-secondary')[1];
//연인 선택 영역자
const withloverEl=document.getElementsByClassName('btn-outline-secondary')[2];
//기타 선택 영역자
const withothersEl=document.getElementsByClassName('btn-outline-secondary')[3];
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
