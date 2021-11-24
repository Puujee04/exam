console.log('Mission 1');
for(let i = 0; i <= 100; i++){
    console.log(i);
}

// 2.
console.log("Mission 2");
for(let i = 60; i>=30; i--){
    if(!(i % 2 === 0)){
        console.log(i);
    }
}
// 3. 
console.log("Mission 3");
str='';
strPlace = 7;
for(let i=0; i<8; i++){
    for(let j=0; j<8; j++){
        if(strPlace === j){
            str=str+'+';
        }
        else{
            str = str + '#';
        }
    }
    strPlace--;
    console.log(str);
    str='';
}
// 4.
console.log('Mission 4');
function convertRegNum(str){
    let result = '';
    let temp = str.slice(2, 4);
    if(parseInt(temp) > 25){
        result = '19' + temp+'-';
        temp = str.slice(4, 6);
    }
    else{
        result = '20' + temp+'-';
        temp = str.slice(4, 6);
        temp = (parseInt(temp) + 20).toString();
    }
    result = result + temp + '-';
    temp = str.slice(6, 8);
    result = result + temp;
    console.log(result);
    if(parseInt(str[str.length-1]) % 2 === 0){
        console.log("Female");
    }
    else{
        console.log("Male");
    }
}
convertRegNum('АБ90020321');
// 5. Бүх .red-boxes гэсэн класстай элемэнтийг улаан болго;
// -- Энд кодоо бичнэ үү!!
const $red = document.querySelectorAll('.red-boxes');
for(let i=0; i<$red.length; i++){
    $red[i].style.backgroundColor = 'red';
}
// 6. blue-box гэсэн ID-тай элемэнтийг цэнхэр болго;
// -- Энд кодоо бичнэ үү!!
const $blue = document.getElementById('blue-box box');
$blue.style.backgroundColor = 'blue';


// 7. Бүх div - ийг бор болго;
// -- Энд кодоо бичнэ үү!!
const $brown = document.querySelectorAll('div');
for(let i=0; i<$brown.length; i++){
    $brown[i].style.backgroundColor = 'brown';
}

// 8. Шинээр box гэсэн класстай section tag үүсгээд, хар өнгөтэй болгоно.
//    Дотор нь box гэсэн класстай article tag үүсгэнэ.
//    article tag - ыг улаан өнгөтэй бөөрөнхий болгоно (JS - ээр)
//    section tag - ыг body руу append хийнэ.
//    улаан бөөрөнхий дээр дарахад бөөрөнхийг ногоон болгоно.
// -- Энд кодоо бичнэ үү!!
let ele = document.createElement('section');
ele.classList = 'box';
ele.style.backgroundColor = 'black';

let art = document.createElement('article');
art.classList = 'box';
art.style.background = 'red';
art.style.borderRadius = '50px';
art.addEventListener('click', function(){
    art.style.background = 'green';
})
ele.append(art);

const $body = document.querySelector('body');
$body.append(ele);