import {DataTypes} from "sequelize";
import {sequalize} from "../db/db.js";
// J'importe l'objet DataTypes qui me permet de définir le type des champs de mon modèle.
// J'importe l'objet Sequelize que j'ai créé et exporté dans le fichier db.js pour ensuite interagir avec ma base de données




// Je crée et j'exporte la variable Pokemon qui contient mon modèle.
// Modèle qui est une représentation de ma table en base de données grâce à la méthode define de l'objet sequalize pour le
// définir, premier argument à passer modelName = nom de la bdd et le second les options de la definition du modèle
export const Pokemon = sequalize.define('pokemon', {
    // je viens définir les différents champs dans ma table pokemon
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        }
    }, {
    // par default deux tables sont attendu createdAt et updatedAt mais je ne les souhaite pas
    createdAt: false,
    updatedAt: false,
    }
)