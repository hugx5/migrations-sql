import fastify from "fastify"
import { knex } from "./database";
import { transferableAbortSignal } from "util";

const app = fastify();

app.get("/hello", async () => {
  const tables = await knex ('sqlite_schema').select('*')
  return tables     

})


app
.listen({
  port:3000,
 }).then(() => {
  console.log("Listening on port 3000");
})