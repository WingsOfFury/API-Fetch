/*
Nutze wieder die Picsum Api
https://picsum.photos/v2/list

Da Du Dir die Daten jetzt schon in der Console ausgeben lassen kannst, darfst Du als nächstes 
für jeden Datensatz eine Kombination aus Bild und Autor in ein figure-Element wrappen und 
in Deinem HTML ausgeben lassen.

Die Elemente in Deinem HTML sollten dann so aussehen: 
<figure>
    <img src="https://picsum.photos/id/0/5616/3744">
    <figcaption>Alejandro Escamilla</figcaption>
</figure>


Verwende dafür:     --> einen Loop <--     --> appendChild <--

Gib in Deinem CSS dem img-Tag eine Breite von 50%, damit das Ganze nicht zu unübersichtlich wird. 😉
*/



fetch("https://picsum.photos/v2/list")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        data.forEach((person) => {

            const contactElement = document.createElement("figure");
            const contactElementName = document.createElement("img");
            const contactElementName1 = document.createElement("figcaption");
            contactElementName.src = `${person.download_url}`;
            contactElementName1.innerText = `${person.author}`;
            
            console.log(person);

            contactElement.appendChild(contactElementName);
            contactElement.appendChild(contactElementName1);
            document.body.appendChild(contactElement);
        })
        });
