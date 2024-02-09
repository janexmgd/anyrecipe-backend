import pg from 'pg'
import appEnv from '../../env.js'
const { Pool } = pg

const { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } = appEnv

const db = new Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    port: DB_PORT
})
db.connect((err) => {
    if (err) {
        throw err
    } else {
        console.log(`connected database ${DB_NAME} AT host ${DB_HOST}`);
    }
})
export default db