/*
Nutze die Picsum Api
https://picsum.photos/v2/list

Lass dir die Liste in der Console ausgeben.
*/

fetch("https://picsum.photos/v2/list")
    .then((response) => response.json())

    .then((data) => {
console.log(data)

    });