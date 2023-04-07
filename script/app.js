

// Récupère le boutton submit du DOM
const submit = document.getElementById('submit');


/** 
* Ecoute le click sur le bouton submit
* @param {string} - valeur de l'input
* @returns {object} - données de l'api
*/

submit.addEventListener('click',
    () => getMovie("https://www.omdbapi.com/?apikey=" + "fb81b239" + "&t=" + document.getElementById('value').value)
);



async function getMovie(lien) {
    /**
     * Récupère les données de l'api avec Fetch
     * @param {string} lien - lien de l'api
     * @returns {object} - données de l'api
     */

    const reponse = await fetch(lien, { method: 'GET' })
        .then(r => r.json())
        .catch(err => new Error(err));
    displayMovie(reponse);
}


function displayMovie(reponse) {
    /**
     * Affiche les données de l'api dans le DOM
     * @param {object} reponse - données de l'api
     * @var {object} data - données de l'api
     * @var {object} titre - élément du DOM
     * @var {object} poster - élément du DOM
     * @returns {void} 
     */

    const data = reponse;
    const titre = document.getElementById('Titre');
    const poster = document.getElementById('Poster');
    const resumer = document.getElementById('Resumer');
    const annee = document.getElementById('Annee');


    titre.innerHTML = data.Title;
    poster.src = data.Poster;
    resumer.innerHTML = data.Plot;
    annee.innerHTML = data.Year;
    
    console.log(data)


}
