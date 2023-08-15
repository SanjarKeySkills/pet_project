// // List on DOM tree via querySelector

// let text = "";

// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const ul = document.querySelector("ul");

// // in the input's key the information is saved - input.value to save it

// input.addEventListener("input", (event) => {
//     text = event.target.value;
// });

// // target - here is this - the noda we put on this event
// // input.value = event.target.value (it is noda_)
// // put event on the button

// button.addEventListener("click", () => {
//     if (!text.trim()) return;

//     const li = document.createElement("li");
//     // createElement - is a method that creates noda
//     li.innerHTML = text[0].toUpperCase() + text.slice(1);
//     ul.append(li);

//     input.value = "";
//     text = "";

//     // input value delets value of noda in input, but in let text = data is still ssaved

//     // Сама по себе - this относится к глобальному объекту (window).
//     // В методе - this относится к родительскому объекту.
//     // В функции - this относится к глобальному объекту.
//     // В функции в 'strict mode' - this = undefined.
//     // В стрелочной функции - this относится к контексту где функция была создана.
//     // В событии - this ссылается на элемент запустивший событие.
// });
// // весь принцип работы Дом дерева - слушатель событий, создание элемента, добавление элемента

// ***

// Promises

// function fetchFn() {
//     const result = fetch("https://jsonplaceholder.typicode.com/todos/1")
//         .then((response) => response.json())
//         .then((json) => console.log(json));

//     return result;
// }

// const result = fetchFn();

// console.log(result);

// // Это и был запрос на бекенд

// const promise = new Promise((resolve, reject) => {
//     // сдесь создан промис который является экземпляром класса промис
//     console.log("Preparing DATA...");

//     setTimeout(() => {
//         const data = {
//             name: "Aika",
//             age: 32,
//         };
//         resolve(data);
//     }, 3000);
// });

// promise.then((res) => console.log("Promise result: ", res));
// // then - это метод класса промис и он отрабоает тогда когда у нас отработает resolve
// // приходящие после отработки resolve данные приходят в then и преобразуются как правило в json формат

// // promise.then((res) => res).then((data) => data);
// // нельзя промис созранять в переменную - он всегда будет возвращать промис
// // console.log(result);

// ***

// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// // JS язык синхронный, а запрос асинхронный

// async function fetchFn() {
//     let promise = new Promise((resolve, reject) => {
//         // return await fetch("https://jsonplaceholder.typicode.com/todos")
//         //     .then((res) => res.json())
//         //     .then((data) => resolve(data));

//         setTimeout(() => {
//             reject(new Error("Error code: 404"));
//         }, 2000);
//     });

//     const result = await promise
//         .then((res) => console.log(res, ""))
//         .catch((e) => console.log(e))
//         .finally((res) => {
//             console.log("made it ");
//         });
//     // alert(result);
// }

// fetchFn();

// await нельзя использовать без async - он означает что в функции будут асинхронные действия
// файлы где есть запросы - там fn делаются только при помощи async
// там будет запрос с дополнительными параметрами (текст) и этот текст будет отпарвлять на бэкенд
// и ожидание этой функции должно быть асинхронными

// then - обработчик когда все идет успешно
// reject - возращает catch - он обрабатывает ошибку

// ***
// ***
// ***

// ***  Work with Arrays

// const arr = [{ status: true }, { status: false }, { status: true }];

// const arr = ["red", "blue", "green"];
// let inputState = "";

// const input = document.querySelector("input");
// const button = document.querySelector("button");

// function searchForArray() {
//     const result = arr.find((it) => it.includes(inputState));
//     console.log(result);
// }

// button.addEventListener("click", () => {
//     searchForArray(inputState);
// });

// function setInputState(text) {
//     inputState = text;
// }

// input.addEventListener("input", (event) => {
//     setInputState(event.target.value);
// });

// ***

// ***

// ***

// ***FETCH***

// CRUD (методы HTTP запросов)
// C - POST
// R - GET
// U - PUT - update
// D - DELETE

//  const a = fetch() // a - Promise (который является обьектом) и котор содержит в себе -
// - {Prototype (в нем хранятся методы этого фетча - then, catch, finally), Status { fulfilled, rejected, pending}, Data }

// const API_URL = "http://localhost:3000/todos";
//
// Method - GET
// то есть дали один аргумент в виде API_URL и по умолчанию Fethc делает GET запрос если нет дополнительныз настроек

// fetch(API_URL)
//     .then((res) => res.json())
//     // преобразует из json в JS
//     .then((data) => {
//         const span = document.createElement("span");
//         span.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
//         // а тут преобразует из JS в JSON

//         document.body.append(span);
//     });

// // METHOD - POST
// const taskInfo = {
//     task: "Eat",
// };

// fetch(API_URL, {
//     method: "POST",
//     // fetch метод post
//     headers: {
//         "Content-type": "application/json",
//     },
//     // настойки по отправляемым или принимаемым данным
//     body: JSON.stringify(taskInfo),
//     // и в body указываем то что мы отправляем
// })
//     .then((res) => {
//         return res.json();
//         // сюда возвращается responce
//     })
//     .then((data) => {
//         console.log(data);
//     });

// // здесь идет ссылка и обьект с информацией для Fetch

// // METHOD - DELETE

// console.log(`${API_URL}/1`);

// fetch(`${API_URL}/3`, {
//     // это делает для того чтобы удалить первый элемнт базы - id:1 обращается по данному url адресу
//     method: "DELETE",
//     // методом DELETE можно удлаить какую то задачу
// })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         // console.log(data);
//     });

// // METHOD - PATCH

// // ***

// const promise = new Promise((resolve, reject) => {
//     throw new Error(123);
//     setTimeout(() => {
//         resolve({ name: "Sam" });
//     }, 3000);
//     // то ф-ция которая принимает два аргумента колбек функцию и период time in doli sek
// });

//
//
//
// New API (StartWars)

const API_URL = "https://jsonplaceholder.typicode.com/todos"; // Endpoint

fetch(API_URL)
    .then((res) => res.json())
    .then((todos) => {
        const ul = document.createElement("ul");
        for (let i = 0; i < todos.length; i++) {
            const li = document.createElement("li");
            li.append(todos[i].title);
            ul.append(li);
        }
        document.body.append(ul);
    });
