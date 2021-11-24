const string = 'apple, banana, kiwi';

// 1. Өгсөн string - ийн бүх үсгийг том болго: 'APPLE, BANANA, KIWI'
// -- Энд кодоо бичнэ үү!
let text = string.toUpperCase();
console.log(text);
// 2. Өгсөн string - ийг дараах хэлбэртэй болго: 'Apple; Banana; Kiwi'
// -- Энд кодоо бичнэ үү!
let arr = string.split(',');
for(let i=0; i<arr.length; i++){
    arr[i][0].toUpperCase();
}
console.log(arr);
const array = ['d', 'e', 'c', 'a', 'b'];
// 3. Өгсөн array - ыг үсгийн дарааллаар эрэмблэ.
// -- Энд кодоо бичнэ үү!

// 4. Өгсөн array - ын голын 3н элемэнтийг салгаж аваад array1 - гэсэн хувьсагчид хийнэ.
//    array болон array1 ийг хэвлэ.
// -- Энд кодоо бичнэ үү!

// 5. Өгсөн array - ын эхний элемэнтийг устага
// -- Энд кодоо бичнэ үү!

// 6. Өгсөн array - ын сүүлийн элемэнтийг устага
// -- Энд кодоо бичнэ үү!

// 7. Өгсөн array - ын урд 'z' үсэг нэм
// -- Энд кодоо бичнэ үү!

// 8. Өгсөн array - ын ард 'j' үсэг нэм
// -- Энд кодоо бичнэ үү!

// 9. Өгсөн array - ыг JSON string болго.
// -- Энд кодоо бичнэ үү!
