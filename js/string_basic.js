//  string_basic.js

// console.log(this)
// window.alert('a');

let str0 = 'Hello'; // 문자열 string
let str10 = new String('Hello'); // 문자열 객체(object)

console.log(str0 == str10); // 값 비교
console.log(str0 === str10.valueOf()); // 타입 & 값 비교 // valueOf 기본데이터타입으로 변경

let num = new Number(123); // number => object
let num01 = 123 // number;
console.log(num == num01);
console.log(num.valueOf() === num01); // 메소드 valueOf()객체 => 기본데이터타입 변환.
console.log((123).valueOf());  // 메소드 valueOf()는 객체 => 기본데이터타입으로 변환.
console.log('123');

// 원시타입 : string, number, boolean, undefined,
// 객체타입 : 함수, Object( {name:?, age:?}), 배열, null,

console.log(" Hello ".trim());
console.log("This is the only story".slice(10,15));

var str2 = '     how are you   to      day     everyone.    ';
console.log(str2.trim());
console.log(str2.replace(/\s/g, ''));
console.log(str2.split(' ').filter(el=>el!='').join(' '));
console.log(str2.split(' ').filter(el=>el!='').join('/'));
console.log(str2.split(' ').filter(el=>el!='').join());
console.log(str2.replace(/\s+/g, ''));


const str3 = 'This is the only one story'
console.log(str3.slice(8,11));
console.log(str3.slice(-8,11));
console.log(str3.slice(10,4));
console.log(str3.slice(30));
console.log(str3.slice(0, -10));
console.log(str3.slice(8, 100));
console.log(str3.slice());

console.log(str3.substring(8,11));
console.log(str3.substring(11,8));
console.log(str3.substring(11,-8));
console.log(str3.substring(10,4));
console.log(str3.substring(30));
console.log(str3.substring(0,-10));
console.log(str3.substring(8,100));
console.log(str3.substring());

console.log(str3.substr(8,11));
console.log(str3.substr(11,8));
console.log(str3.substr(11,-8));
console.log(str3.substr(-10,8));
console.log(str3.substr(10));
console.log(str3.substr(0,-10));
console.log(str3.substr(8,100));
console.log(str3.substr());

// 정규표현식 문자열을 찾고 싶을때?


// indexOf()

// search()
// only, story o를 포함하고 있으면 (패턴)
console.log("This is the only one story".replace('the', 'THE'));

let ary = [];
let oby = {};
let reg = /good/; //new RegExp();
let regStr = "bad MORNING, GOOD ATRERNOON, goodevening, and good night";
console.log(regStr.replace(/good\s/gi, 'bad ')); // 옵션 g는  글로벌의 줄임말로 전체 문장을 뜻함 * i옵션은 대소문자 구분하지 않고 전체 문장에서 찾아오겟다는 뜻 
                                                // \s 공백

// sample 번호
let jmn = '9503041234567';
jmn = '950304-1234567';
jmn = '950304 2234567';

function checkGender(no){
    //입력 번호의
    return '남자' || '여자';
}
const num1 = 123;
const num2 = 123.45;
const bool = true;
const str = '문자열타입';
const arr = [1,2,'a','b',3];
const obj = {key: 'data', value: 15};

console.log(num1.toString());
console.log(num2.toString());
console.log(bool.toString());
console.log(str.toString());
console.log(arr.toString());
console.log(obj.toString());
console.log(obj.key.toString());
console.log(obj.value.toString());

const str1= 'good morning, good afternoon, good evening, and good night'
console.log(str1.indexOf('even'));
console.log(str1.lastIndexOf('good'));
console.log(str1.lastIndexOf('dawn'));
console.log(str1.indexOf('good',15));
console.log(str1.charAt(30));
console.log(str1.charAt(100));
console.log(str1.includes('even'));
console.log(str1.includes('dawn'));

const str4 = "good morning, good afternoon,  GOOD EVENING, AND GOOD NIGHT";
console.log(str4.toLowerCase().indexOf('good'));
console.log(str4.toUpperCase().indexOf('GOOD'));
console.log(str4.search('GOOD'));
console.log(str4.search(/GOOD/i));

const str5 = "bad MORNING, GOOD ATRERNOON, goodevening, and good night";
console.log(str5.match(/good\s\w+/gi));
console.log(str5.match(/bad\s\w+/gi));
console.log(str5.match(/none\s\w+/gi));
console.log(str5.match('good'));

const str6 = "GOOD MORNING, GOOD AFTERNOON, good evening, and good night";
console.log(str6.replace('good','bad'));
console.log(str6.toLowerCase().replace('good','bad'));
console.log(str6.replace(/good/i,'bad'));
console.log(str6.replace(/good/gi,'bad'));

var str7 = 'this is the only method! 대소문자 변환 THE END';
console.log(str7.toLowerCase());
console.log(str7.toUpperCase());

const str8 = '문자열1';
const str9 = '문자열2';
console.log(str8.concat(str9));

console.log(''.concat(str8, str9));

let strarr = ['good', ' ', 'morning', '!']
console.log(''.concat(...strarr));
