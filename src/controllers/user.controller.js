import { getConnection } from '../database/database.js';

export const authUser = async(req, res) => {
    const connection = await getConnection();

    const username = req.query.username;
    const password = req.query.password;

    const user = await connection.query(`SELECT id, username, email
                                         FROM users
                                         WHERE username = '${username}' AND password = '${password}'`);
                                         
    if (user.length > 0) res.json(user[0]);
    else res.send(false);
}

export const methods = {
    authUser
}