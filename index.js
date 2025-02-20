import 'dotenv/config';
import { dbConnect } from "./db/index.js";
import app from "./app.js"
dbConnect().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`SERVER IS RUNNING AT PORT:  ${process.env.PORT} `);
    })
}
).catch(
    (err) => {
        console.log(`DATABASE CONNECTION FAILED :`, err)
    }
)


