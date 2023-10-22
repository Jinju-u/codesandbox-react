// 아론함수
// 인수가 있을 때는 () 안에 인수 써주기
const func = (str) => {
  // 처리
  return str;
};

// 처리가 한 줄로 끝날 때는 쭈굴이 괄호랑 return 불요 (최악이야 ..)
const other = (str) => str;

console.log(other("harry potter"));

// 분할대입
// 오브젝트
const profile = {
  name: "jinju",
  age: 28,
};

// 분할대입
const { name, age } = profile;
console.log(`${name}, ${age}살입니당`);

// 배열
const profileArr = ["soccer", "mancity"];

// 분할대입
const [hobby, team] = profileArr;
console.log(`요즘 취미는 ${hobby}이고, 좋아하는 팀은 ${team} 입니당`);

// 스프레드 구문
const arr1 = [1, 2];

const sumFunc = (num1, num2) => console.log(num1 + num2);

sumFunc(arr1[0], arr1[1]);
// 요소가 하나씩 나옴
sumFunc(...arr1);

// 분할대입 + 스프레드
const split = [1, 2, 3, 4, 5];

const [num1, num2, ...arr] = split;

console.log(num1);
console.log(num2);
console.log(...arr);

// 배열을 복사할 때의 스프레드 구문
const copy = ["foden", 47];
const cp = [...copy];
console.log(cp);

// 복사할 때 const cp = copy 를 하면 안되는 이유
// cp 의 값을 바꾸면 copy 값까지 영향을 받음. 같은 것을 참조하기 때문

// 배열 결합
const join = ["haaland", 9];
const ji = [...copy, ...join];
console.log(ji);
