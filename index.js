import axios from "axios";
import { Pokemon } from "./models/Pokemon.js";
// J'importe Axios de mon node module (là où est installé toutes mes libraires)
// J'importe mon objet pokemon qui représente mon modèle Pokemon ( qui lui represent la table Pokemon en bdd)

// ma route d'api que je souhaite requêter
let getAllPokemonUrl = "https://pokeapi.co/api/v2/pokemon";

// je déclare une fonction que je vais appeler à chaque fois que je vais vouloir enregistrer un pokemon
function registerPokemon(resultFromApi){
        const data = {
            name: resultFromApi.name,
        }

        // grâce à la méthode create que j'appelle de mon modèle pokemon, je peux enregistrer en base de données, un nouveau
        // pokemon, pour cela, il faut que lui passe un objet compatible avec mon modèle ( dans ce cas pour faire enregistrer
        // un pokemon, j'ai juste besoin d'un objet avec la propriété name qui a pour valeur une chaine de caractère
        Pokemon.create(data)
            .then(response => console.log("pokemon add with success"))
            .catch(error => console.log(error))
}

function catchAllPokemon(url){
    axios.get(url).then(response => {
        response.data.results.forEach(pokemonFromApi => {
            registerPokemon(pokemonFromApi)
        })
        if (response.data.next){
            catchAllPokemon(response.data.next)
        }else{
            console.log('Fin du pokedex')
        }
    })
}

catchAllPokemon(getAllPokemonUrl)