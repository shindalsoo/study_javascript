/*
논리 연산자
&& : 논리식이 모두 참이면 참을 반환 (논리 and 연산)
|| : 논리식 중에서 하나라도 참이면 참을 반환 (논리 or 연산)
*/
let statusCode;
statusCode = statusCode || 200;
console.log(`statusCode:${statusCode}`); // 결과 200

let returnCode;
returnCode = returnCode && 200;
console.log(`returnCode:${returnCode}`); // 결과 undefined
