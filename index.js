// // Zadacha N 1
// const items = [
//   { name: "Ноутбук", price: "900" },
//   { name: "Мышка", price: "100" },
//   { name: "Монитор", price: "300" },
//   { name: "Клавиатура", price: "45" },
//   { name: "Наушники", price: "90" },
//   { name: "Смартфон", price: "270" },
//   { name: "Телевизор", price: "570" },
// ];
// // metod filter

// // сокращаем код - так как можно сделать код еще короче.
// // const filteredItems = items.filter((item) => {
// //     return item.price < 100
// // })

// // const filteredItems = items.filter((item) => item.price < 100);

// // // таким образом мы значительно соокращаем код из 3 строчек делаем 1.
// // // При это убираем лишь слово return, скобки вокруг item и скобки объекта также убираем.

// // console.log(filteredItems);

// const needToFiltered = items.filter(items => items.price < 100);
// const newArr = items.filter(items => items.price > 200);
// //  получается Фильтр - филтрует массив и показывает только то что в условиях есть. если по примеру свеху пройтись то можно заметить -
// //  по условию - в 1) варианте жто что меньше 100 то покажи. остальное не нужно. по 2) условию что больше 200 покажи а что меньше не нужно.

// // console.log(needToFiltered);
// console.log(newArr);

// // метод map
// const aboutMap = items.map((items) => {
//     return items.name;
// })
// console.log(aboutMap);

// // Метод Find
// // Метод Файд позволяет нам найти только один объект и не больше, это значит - если в массие будет несколько значений с такими же параметрами
// // он найдет самый первый и все дальше не пойдет по массиву на этом остановится.
// const aboutFind = items.find((items) => {
//     return items.name === 'Смартфон'
// })
//  console.log(aboutFind);
//  ____________________________________________________________________________________________________________________________-

// 20 методов массивов в JavaScript, которые вы должны знать.

const arr = [1, 6, 2, 3, 8, 4, 5];

// // 1
// // forEach - перебор элементов массива
// const newArray = arr.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })
// console.log(newArray);

// // unswer will be
// // 1 0
// // 2 1
// // 3 2
// // 4 3
// // 5 4
// // undefined

// //____________________________________--

// //map
// const newMap = arr.map(item => item * 2); //короткая форма записи, если условие одно - то эта форма.
// console.log(newMap);

// const newMapLong = arr.map ((item) => { //длинная форма  записи, если условии будет много лучше использовать эту
//     return item * 2;
// })
// console.log(newMapLong);
// _______________________________________________________________________
// // reduce - перебор элементов массия и возврат новой структуры данных
// const something = arr.reduce((acc, item) => (acc + item));

// console.log(something);
// ____________________________________________________________
//  find - найти эл по условию

// const elem = arr.find((item, index, _arr) => {
//     console.log(item, index, _arr);
//     return item === 3;
// })
// console.log(elem);
//_________________________________________________________________
// // findIndex - возвращает индекс. работает как find

// const idElem = arr.findIndex((item, index, _arr) => {
//     return item === 3;
// });
// console.log(idElem); // 2

//______________________________________________________________________-

// filter - возвращает новый массив по истинному условию

// const filteredArr = arr.filter((item, index, _arr) => {
//     return item >= 3;
// })
// console.log(filteredArr); // [ 3, 4, 5 ]

//___________________________________________________________-

// // push - вставляет эл в конец массива | Он мутирует массив - это значит исходный массив меняется.
// arr.push(10);
// arr.push(11, 12, 13);
// console.log(arr);
// //  _______________________________________

// // unshift - вставлет эл в началало массива
// arr.unshift(-2, -1 , 0);
// console.log(arr);

// // pop - удаляет эл - из конца массива и одновременно возвращает его и мутирует массив.
// const lastEl = arr. pop();
// console.log(lastEl, arr);

// shift - удаление из начала и возвращение
// const firstEl = arr.shift();
// console.log(firstEl, arr);

// ____________________________________________________________________---

// concat - соединяет массив - создает новый массив с переданными значениями в конце. не МУТИРУЕТ исходный массив

// const newArr = arr.concat([11, 12, 13]);
// console.log(newArr, arr);

// ____________________
//  join - позволяет седенить массив в строку
// const str = "qweasd";
// const strArr = str.split("");
// console.log(strArr);
// const newSTR = strArr.join("-");
// console.log(newSTR);


//  SORT -позволяет отсортировать массив
const newArr =  arr.sort();
console.log(newArr, arr.sort());

