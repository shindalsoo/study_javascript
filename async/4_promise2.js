// 2. Promise.resolve(function()) 로 시작하는 패턴
function async1(param) {
    return Promise.resolve(param * 2);
  }
  function async2(param) {
    return Promise.resolve(param * 3);
  }
  function async3(param) {
    return Promise.resolve(param * 4);
  }
  var start = 1;
  async1(start)
    .then(async2)
    .then(async3)
    .then((result) => {
      console.log(result); // 24
    });
  