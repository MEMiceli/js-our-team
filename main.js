// Ciao ragazzi,
// esercizio di oggi: Our Team
// nome repo: js-our-team
// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Scriviamo prima la logica in italiano e poi traduciamo in codice.
// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
// Buon lavoro!


// array di lavoratori
const teamCards = [
    {
        worker: {
            imageCard:"img/wayne-barnett-founder-ceo.jpg",
            name:"Wayne Barnett",
            position:"Founder & CEO",
        },
    },
    {
        worker: {
            imageCard:"img/angela-caroll-chief-editor.jpg",
            name:"Angela Caroll",
            position:"Chiev Editor",
        },
    },
    {
        worker: {
            imageCard:"img/walter-gordon-office-manager.jpg",
            name:"Walter Gordon",
            position:"Office manager",
        },
    },
    {
        worker: {
            imageCard:"img/angela-lopez-social-media-manager.jpg",
            name:"Angela Lopez",
            position:"Social Media Manager",
        },
    },
    {
        worker: {
            imageCard:"img/scott-estrada-developer.jpg",
            name:"Scott Estrada",
            position:"Developer",
        },
    },
    {
        worker: {
            imageCard:"img/wayne-barnett-founder-ceo.jpg",
            name:"Barbara Ramos",
            position:"Graphic Designer",
        },
    },
];

const list = document.querySelector(".team-container")

for(let i = 0; i < teamCards.length; i++){
    console.log(teamCards[i])
    const scheda = `
        <div class="team-card">
                <div class="card-image">
                <img
                    src="${teamCards[i].worker.imageCard}"
                    alt="${teamCards[i].worker.name}"
                />
                </div>
                <div class="card-text">
                <h3>${teamCards[i].worker.name}</h3>
                <p>${teamCards[i].worker.position}</p>
                </div>
            </div>
            `;
    list.innerHTML += scheda;        
}



