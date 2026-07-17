// script.js 상단에 추가할 서비스 워커 등록 로직
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((registration) => {
        console.log('서비스 워커가 성공적으로 등록되었습니다. 범위:', registration.scope);
      })
      .catch((error) => {
        console.log('서비스 워커 등록에 실패했습니다:', error);
      });
  });
}
