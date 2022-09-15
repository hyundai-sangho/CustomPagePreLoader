// 사이트가 켜질 때 loading.gif가 보이고 시간이 지나 화면이 전부 load 되면
// loading.gif를 둘러싼 div 박스에 hidden 클래스를 추가해서 화면에서 보이지 않도록 설정
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader")
  loader.className += " hidden" // class "loader hidden"
})
