//누구와 함께하였는지 클릭할때 사용
//초등학생 영역자
const eleschoolEl=document.getElementsByClassName('btn-outline-secondary')[0];
//10대 영역wk
const tenEl=document.getElementsByClassName('btn-outline-secondary')[1];
//20대 영역자
const twentyEl=document.getElementsByClassName('btn-outline-secondary')[2];
//30대 선택 영역자
const thirtyEl=document.getElementsByClassName('btn-outline-secondary')[3];
//40대 영역자
const fourtyEl=document.getElementsByClassName('btn-outline-secondary')[4];
//50대 선택 영역자
const fiftyEl=document.getElementsByClassName('btn-outline-secondary')[5];
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
const withfamilyEl=document.getElementsByClassName('btn-outline-secondary')[6];
//친구 선택 영역자
const withfriendsEl=document.getElementsByClassName('btn-outline-secondary')[7];
//연인 선택 영역자
const withloverEl=document.getElementsByClassName('btn-outline-secondary')[8];
//기타 선택 영역자
const withothersEl=document.getElementsByClassName('btn-outline-secondary')[9];
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