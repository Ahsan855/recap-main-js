//ES6 রিলেটেড সাতটা জিনিস তোমাকে জানতে হবে 

//1. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে অবজেক্ট এর প্রপার্টি এর মান কিভাবে বসায় সেটা জানতে হবে। বিশেষ করে নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। বা কোন একটা অবজেক্ট এর প্রপার্টি array সেই array থেকে ভ্যালু এনে কিভাবে টেমপ্লেট স্ট্রিং এর মধ্যে বসাতে পারবে । 

/* const myStyle= {
    name: 'Muhammad Ahsan Habib',
    Villages : 'Karotkola',
    Distric : 'bogura',
    myFriends :['ahsan', 'habib', 'Rifat', 'Habiba', 'Ruhul amin', 'Afruza'],
    RifatDetails:{
        name: 'muhammad Rifat Hasan',
        village:'matidali',
        phone:'01744154906',
        Distric:'bogura'
    }
}
// console.log(myStyle.name);
// console.log(myStyle.Villages);
// console.log(myStyle.RifatDetails.phone);
// console.log(myStyle.myFriends[5]);
const myName = `This is ${myStyle.name}`
const RifatDetails = `This is rifatDtails is ${myStyle.RifatDetails.name}`
console.log(RifatDetails);
const myFriends = `this is 3rd ${myStyle.myFriends[5]}`
console.log(myFriends); */

//2. স্প্রেড অপারেটর (...) কিভাবে কাজ করে। বিশেষ করে একটা array কে কপি করে নতুন করে array বানাবে এবং সেখানে একটা উপাদান যোগ করবে। আবার একটা উপাদান কে বাদ দিয়ে বাকি সব উপাদানকে কিভাবে যোগ করবে (filter ইউজ করে)
const myFriends = ['ahsan', 'habib', 'Rifat', 'Habiba', 'Ruhul amin', 'Afruza Begum']
console.log(...myFriends);
const spreadFriend = ['Arafat', ...myFriends]
console.log(spreadFriend);
console.log('ahsan details: ', spreadFriend);
console.log(myFriends);
const friend = ['Remove frnd name: ', 'My Friends ', ...myFriends.filter(name => name != 'Rifat'), 'live in bogura']
console.log(friend); // shift,unshift,pop,push er kaj spread operator diye kora jay . 
console.log(friend); //array return kore
console.log(...friend); // ... dile string return kore .
console.log(myFriends.filter(friend => friend.length > 5));

let arrOne = [0, 1, 2, 3, 4];
let arrTwo = [5, 6, 7, 8, 9]
console.log(...arrOne, ...arrTwo); //concat kora jay 
function calculate(a, b, c, d) {
    console.log('total', +(a + b + c + d));
}
calculate(...arrOne);

//3. 1. শূন্য প্যারামিটারওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৯ রিটার্ন করবে।  
const zeroPera = () => 9
console.log(zeroPera(9));

//৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ১২ দিয়ে গুণ করে গুণফল রিটার্ন করবে। 
const singlePera = x => x * 12
console.log(singlePera(12));

//৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে চার দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 
const doublePera = (x, y) => (x + y) / 4
console.log(doublePera(10, 30));

//৩.৪ একাধিক লাইনওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৫ যোগ করবে তারপর যোগফল দুইটাকে আবার গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
const arrowFunction = (x, y) => {
    const fiveEven = x + 5
    const tenEven = y + 10
    const multiplyTwo = fiveEven * tenEven
    return multiplyTwo;
}
console.log(arrowFunction(5, 10))

//৪. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

const mySelf = {
    name: 'Emtiaz Hossain Emon',
    age: 22,
    dream: 'React Native Developer',
    bestFriends: ['Rion', 'Ashraful', 'Hazim', 'Sifat', 'Sufian'],
    rionDetails: {
        home: 'Pirgonj',
        age: 23,
        phone: '01712345678'
    }
} //ekdom upore declare kora ace
const {
    dream
} = mySelf
const {
    phone
} = mySelf.rionDetails
console.log(dream, phone);

//৫. shorthand দিয়ে অবজেক্ট কিভাবে ডিক্লেয়ার করে, {a , b } স্টাইলে।
var key = 'foo',
    value = 'bar';
var obj = {}
obj[key] = value;

var obj = {
    [key]: value
};
console.log(obj);
const x = 10;
const y = 20;
// const ob = {
//     x: x,
//     y: y
// }
const ob = {
    x,
    y
}
console.log(ob);

let cat = 'Miaow';
let dog = 'Woof';
let bird = 'Peet peet';

let someObject = {
    cat,
    dog,
    bird
}
console.log(someObject);

//৬. ফাংশন এর মধ্যে ডিফল্ট প্যারামিটার কিভাবে ডিক্লেয়ার করে
function sum(a, b, c = 10) {
    return a + b + c
}
console.log(sum(20, 30, 40)); //  90 
console.log(sum(20, 30)); //  60  
//৭. অপশনাল চেইনিং কি জিনিস, সেটা কখন কিভাবে ইউজ করে ? না জানলে গুগলে সার্চ দাও

/* The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.

The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.
 */
function multiply(a, b) {
    b = (typeof b !== 'undefined') ? b : 1
    return a * b
}
console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5