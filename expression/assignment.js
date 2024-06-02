/**
 * 표현식을 정복하자.
 * 리스트 : [], 딕셔너리 : {}, 튜플 : ()
 */
// 리스트 형식
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 결과 10
console.log(b); // 결과 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // 결과는 Array형식 [30, 40, 50]

// 딕셔너리 형식
({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40, e: 50 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40, e: 50} // 나머지 모두 들어감

/**
 * 객체 및 배열 리터럴 표현식을 사용하면 즉석에서 쉽게 데이터 뭉치를 만들수 있다.
 */
var x = [1, 2, 3, 4, 5];
var [y, z] = x; // 구조를 분해해서 할당됨
console.log(y); // 1
console.log(z); // 2
console.log(x); // [1, 2, 3, 4, 5]

var foo = ["one", "two", "three"];
var [red, yellow, green] = foo; // 구조분해 할당
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

// 선언에서 분리한 할당
var aa, bb;
[aa, bb] = [1, 2];
console.log(aa); // 1
console.log(bb); // 2

// 변수에 기본값을 할당하면, 분해한 값이 undefined일 때 그 값을 대신 사용한다.
var aaa, bbb;
[aaa = 5, bbb = 7] = [1];
console.log(aaa); // 1
console.log(bbb); // 7

// 변수값 교환하기
var a1 = 1;
var b1 = 3;
[a1, b1] = [b1, a1];
console.log(a1); // 3
console.log(b1); // 1

// 함수가 반환한 배열 분석
function f() {
  return [1, 2];
}
var a2, b2;
[a2, b2] = f();
console.log(a2); // 1
console.log(b2); // 2

// 일부 반환 값 무시하기
function g() {
  return [1, 2, 3];
}
var [a3, , b3] = g();
console.log(a3); // 1
console.log(b3); // 3
var [, ,] = g(); // 반환값을 모두 무시할 때는 이렇게 사용

// 변수에 배열의 나머지를 할당하기
var [a4, ...b4] = [1, 2, 3];
//var [a4, ...b4,] = [1, 2, 3]; // 나머지 요소의 오른쪽 뒤에 쉼표가 있으면 SyntaxError 발생함
console.log(a4); // 1
console.log(b4); // [2, 3]

/*
객체 구조 분해
*/
// 기본 할당
var o = { p: 42, q: true };
var { p, q } = o;
console.log(p); // 42
console.log(q); // true

// 선언 없는 할당 (구조 분해를 통해 변수의 선언과 분리하여 변수에 값을 할당할 수 있음)
var a5, b5;
({ a5, b5 } = { a5: 1, b5: 2 });
console.log(a5); // 1
console.log(b5); // 2

// 새로운 변수 이름으로 할당하기
var o2 = { p2: 42, q2: true };
var { p2: foo, q2: bar } = o2; // key:value에서 value가 변수명이 됨
console.log(foo); // 42
console.log(bar); // true

// 객체로부터 해체된 값이 undefined인 경우, 변수에 기본값이 할당 됨
var { a6 = 10, b6 = 5 } = { a6: 3 };
console.log(a6); // 3
console.log(b6); // 5

// 새로운 변수명 할당과 기본값 할당을 한번에 할 수 있음
var { a7: aa7 = 10, b7: bb7 = 5 } = { a7: 3 };
console.log(aa7); // 3
console.log(bb7); // 5

/*
함수 매개변수의 기본값 설정하기
ECMAScript
  뜻 : ECMAScript는 언어의 사양(Specification)입니다
  표준국제기구: Ecma International (비영리 표준화 기구)
JavaScript
  뜻 : ECMAScript 표준을 따르는 개발언어입니다.

동의어 : 
  ECMAScript 6 = ES6 = ES2015 = ECMAScript 2015
  ES5 : 그 이전 버전을 말함
*/
//ES5 버전
function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? "big" : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius); // big { x: 18, y: 30 } 30
  // 이제 드디어 차트 그리기 수행
}
drawES5Chart({
  cords: { x: 18, y: 30 },
  radius: 30,
});

// ES2015 버전
function drawES2015Chart({
  size = "big",
  cords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, cords, radius); // big { x: 18, y: 30 } 30
  // 차트 그리기 수행
}
drawES2015Chart({
  cords: { x: 18, y: 30 },
  radius: 30,
});

/*
중첩된 객체 및 배열의 구조 분해
*/
var metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/ko/docs/Tools/Scratchpad",
};
var {
  title: englishTitle,
  translations: [{ title: localeTitle }],
} = metadata;
console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"

/*
for of 반복문과 구조 분해
*/
var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];
for (var {
  name: n2,
  family: { father: f2 },
} of people) {
  console.log("Name: " + n2 + ", Father: " + f2);
}
// 결과 두줄
// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"

/*
함수 매개변수로 전달된 객체에서 필드 해체하기
*/
function userId({ id }) {
  return id;
}
function whois({ displayName: displayName, fullName: { firstName: name } }) {
  console.log(displayName + " is " + name);
}
var user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};
console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"

/*
계산된 속성 이름과 구조 분해
*/
// 계산된 속성 이름(computed property name)은, 객체 리터럴과 비슷하게 구조 분해에도 사용될 수 있습니다.
let key = "z";
let { [key]: foo2 } = { z: "bar" };
console.log(foo2); // "bar"

// 객체 구조 분해에서 Rest
// Rest/Spread Properties for ECMAScript 제안(stage 3)에서는 구조 분해에 rest 구문을 추가하고 있습니다. rest 속성은 구조 분해 패턴으로 걸러지지 않은 열거형 속성의 키를 가진 나머지 항목들을 모읍니다.
let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
a; // 10
b; // 20
rest; // { c: 30, d: 40 }

// 속성 이름이 유효한 JavaScript 식별자명이 아닌 경우
// 구조 분해는 JavaScript 식별자 이름으로 적합하지 않은 속성명이 제공된 경우에도 이용할 수 있습니다. 이 때는 대체할 유효한 식별자명을 제공해야 합니다.
const foo = { "fizz-buzz": true };
const { "fizz-buzz": fizzBuzz } = foo;
console.log(fizzBuzz); // "true"
