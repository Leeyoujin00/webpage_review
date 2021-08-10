//scrolltotop 
//데스크탑 스크롤투탑 
const $scrollToTop = document.querySelector("#scrollToTop");

//데스트탑일떄 스크롤투탑 기능 작성
$scrollToTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });})

  // 윈도우에 스크롤 이벤트가 발생시,
// 스크롤 위치에 따라 scrollToTop 아이콘 투명도 변경
window.addEventListener("scroll", function () {
 
  // 만약 스크롤 위치가 600 이상이라면,
  window.scrollY >= 600
    ? ($scrollToTop.style.opacity = 1) // scrollToTop 버튼이 보이게 합니다
    : ($scrollToTop.style.opacity = 0); // 아니라면 안보이게 합니다
});