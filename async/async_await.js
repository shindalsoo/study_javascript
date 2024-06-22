/*---------------------------------------
async 란?
---------------------------------------*/
function myFunc(){
    return 'func';
}
async function myAsync(){
    return 'async';
}
console.log(myFunc()); // 결과가 바로 나온다.
console.log(myAsync()); // 결과는 약속의 번호표를 리턴한다.
myAsync().then((result)=>{ // 약속의 결과는 then 이라는 장소에서 받아야 한다.
    console.log(result); 
});

/*---------------------------------------
promise란?
---------------------------------------*/
function delayP(sec){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve(new Date().toISOString()); 
        }, sec * 1000);
    })
}
console.log(delayP(3)); // 약속을 리턴한다. */
delayP(3).then((result)=>{ // 약속장소 then에서 결과를 받는다.
	console.log(result);
})

/*---------------------------------------
async + promise 복합사용
---------------------------------------*/
function delayP(sec){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve(new Date().toISOString()); 
        }, sec * 1000);
    })
}
async function myAsync(){
  delayP(3).then((result)=>{ // 약속장소 then에서 결과를 받는다.
    console.log(result);
  });
  return 'async';
}
console.log(myAsync()); // 결과: 약속1개+3초후 timestring
myAsync().then((result)=>{ // 결과: 문자열+3초후 timestring
	console.log(result);
});

/*---------------------------------------
await 사용
---------------------------------------*/
function delayP(sec){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve(new Date().toISOString()); 
        }, sec * 1000);
    })
}
async function myAsync(){
  await delayP(3); // 끝날때 까지 기다려줌
  return 'async';
}
myAsync().then((result)=>{ // 결과: 3초후 문자열
	console.log(result);
});

/*---------------------------------------
await 결과물을 받환받음
---------------------------------------*/
function delayP(sec){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve(new Date().toISOString()); 
        }, sec * 1000);
    })
}
function normalFun(){
	return 'wow';
}
async function myAsync(){
  // 사용법1
  const result1 = await delayP(3); // 3초 기다림
  // 사용법2
  const result2 = await delayP(3).then((time)=>{ // 추가 3초 기다림
    return 'x';
  });
  // 특이한 사용법
  const result3 = await normalFun(); // async 밖에서도 await는 사용할 수 있음
  console.log(result1); // 결과: timestring
  console.log(result2); // 결과: x
  console.log(result3); // 결과: wow
  return 'async';
}
myAsync().then((result)=>{ // 결과: 3초후 timestring + 문자열
	console.log(result);
});
