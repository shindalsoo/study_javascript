// async 함수 3개가 있다고 하면 일반적으로는 이런 방식으로 쓰게 되죠.

var async1 = function (param, shindalsoo) {
    shindalsoo(param * 2);
  };
  var async2 = function (param, callback) {
    callback(param * 3);
  };
  var async3 = function (param, callback) {
    callback(param * 4);
  };
  var start = 1;
  async1(start, (result) => {
    console.log(result); // 2
  });
  async1(start, (result) => {
    async2(result, (result) => {
      console.log(result); // 6
    });
  });
  async1(start, (result) => {
    async2(result, (result) => {
      async3(result, (result) => {
        console.log(result); // 24
      });
    });
  });
  
  // 문제는... 함수가 복잡해지면서 들여쓰기에 의해서 코드가 알아보기 힘들어집니다.
  