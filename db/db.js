// je décompose grâce à {} opérateur de décomposition uniquement la class Sequelize de notre librairie installer plutôt
import {Sequelize} from "sequelize";
import 'dotenv/config.js'
// j'importe la config (qui permet de lire les variables d'environnement d'environnement ) que j'ai j'ai installer via :
// 'npm install dotenv'
// {} opérateur de décomposition

// on crée une nouvelle instance de la classe Sequelize ( nouvelle instance qui veut dire que l'on souhaite créer un objet
// à partir d'un objet deja existant)

// export veut dire qu'on souhaite utiliser cette variable en dehors du fichier (si par exemple je veut l'utiliser dans
// index.js, je vais devoir l'importer)

// connection a la bdd avec des variables d'environnement.
export const sequalize = new Sequelize(process.env.DATABASE, process.env.DBUSERNAME, process.env.DBPASSWORD, {
    dialect: 'mariadb',
})


// version sans variable d'environnement
// export const sequalize = new Sequelize('dbname', 'user', 'password', {
//     dialect: 'mariadb',
// })


// je tente des connexions à la base de données si ça fonctionne, je retourne un message de success, sinon un message d'erreur
try {
    console.log('Connection has been established successfully')
} catch (error) {
    console.error('Unable to connect to the database', error)
}

// Il n'y a pas nativement en node un équivalent a PDO il faut passer par une librairie, pour mariaDb, il faut installer
// le connecteur via la commande suivante : " npm install mariadb"
// dans notre cas on utilise un ORM (Objet Relational Mapping)