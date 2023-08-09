import {knex as setupKnex} from 'knex'

export const config = setupKnex({
  client: 'sqlite3',
  connection: {
    filename: './tmp/app.db',
  },
  useNullAsDefault: true,
})