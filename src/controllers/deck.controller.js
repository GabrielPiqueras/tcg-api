
import { getConnection } from '../database/database.js';

const create = async (req, res) => {
    const connection = await getConnection();
    const data = JSON.parse(req.query.data);
    const { userId, title, isPublic, total, cards } = data;

    const deckObj = {
        user_id: userId,
        title: title,
        public: isPublic,
        total: total
    }

    let result = 2;

    console.log(userId, title, isPublic, total);

    connection.query('INSERT INTO decks SET ?', deckObj, function (error, results, fields) {
        if (error) throw error;

        const deck_id = results.insertId;

        // Convertir a modo array para poder insertar valores en array
        const arrayCards = cards.map(card => {
            return Object.values({
                deck_id: deck_id,
                card_id: card.id,
                quantity: card.quantity
            });
        });

        connection.query('INSERT INTO deck_cards (deck_id, card_id, quantity) VALUES ?', [arrayCards], function (error, results, fields) {
            if (error) {
                res.json(false);
                throw error;
            } else {
                res.json(true);
            }
        });
    });
}

export const methods = {
    create
}