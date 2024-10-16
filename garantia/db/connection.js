const { Pool } = require('pg')
const pool = new Pool({
    connectionString: 'postgresql://garantia_user:h9BCOciQiMHTDalXweUrk7uP6NPok74Q@dpg-cs7qu088fa8c73clmceg-a.oregon-postgres.render.com/garantia',
    ssl: {
        rejectUnauthorized: false 
    }
})

module.exports = {pool}