/*
Promise 는 사용하는 방식이 크게 두 가지로 볼 수 있습니다.
1. new Promise(function(resolve, reject)) 를 사용하는 패턴
2. Promise.resolve(function()) 로 시작하는 패턴
resolve, reject는 비동기 작업의 처리과정에서 성공/실패를 구분하는 방법이다.
new Promise((resolve, reject)=>{
  if(조건) {
    resolve('성공!');
  }
  reject('실패');
})
*/
function async1(param) {
    return new Promise(function (resolve, reject) {
      resolve(param * 2);
    });
  }
  function async2(param) {
    return new Promise(function (resolve, reject) {
      resolve(param * 3);
    });
  }
  function async3(param) {
    return new Promise(function (resolve, reject) {
      resolve(param * 4);
    });
  }
  
  // then then으로 이어지는 개념 : Promise 체이닝
  var start = 1;
  async1(start)
    .then(async2)
    .then(async3)
    .then((result) => {
      console.log(result); // 24
    })
    .catch(() => {});
  