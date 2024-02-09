import "dotenv/config.js";
const appEnv = {
    APP_PORT: process.env.APP_PORT,
    APP_NAME: process.env.APP_NAME,
    APP_URL: process.env.APP_URL,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_PORT: process.env.DB_PORT,
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_APP_PASS: process.env.GMAIL_APP_PASS
}
export default appEnv