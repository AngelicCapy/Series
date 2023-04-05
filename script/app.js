

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




/**
 * Récupère les données de l'api avec Fetch
 * @param {string} lien - lien de l'api
 * @returns {object} - données de l'api
 */

async function getMovie(lien) {
    const reponse = await fetch(link, { method: 'GET' })
        .then(r => r.json())
        .catch(err => console.log(err));
    displayMovie(reponse);
}

/**
 * Affiche les données de l'api dans le DOM
 * @param {object} reponse - données de l'api
 * @var {object} data - données de l'api
 * @returns {void} 
 */
function displayMovie(reponse) {
    const data = reponse;
    
}
