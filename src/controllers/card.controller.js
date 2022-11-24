
import { getConnection } from '../database/database.js';

const getCards = async (req, res) => {
    const connection = await getConnection();
    const name = req.query.name;
    let result;

    if (name) {
        result = await connection.query(`SELECT id, name, small_img, large_img, cardmarket_url
                                               FROM cards
                                               WHERE name LIKE '%${name}%'
                                               ORDER BY name ASC
                                               LIMIT 100`);
    } else {

        result = await connection.query(`SELECT id, name,small_img, large_img, cardmarket_url
                                               FROM cards
                                               ORDER BY name ASC
                                               LIMIT 100`);
    }
  
    res.json(result);
}

export const methods = {
    getCards
}