// 결과를 넘겨받는 sync 함수는 순차적인 실행에 문제가 없죠. 그냥 쓰면 됩니다.
var sync1 = function (param) {
    return param * 2;
  };
  var sync2 = function (param) {
    return param * 3;
  };
  var sync3 = function (param) {
    return param * 4;
  };
  var start = 1;
  console.log(sync3(sync2(sync1(start)))); // 24
  