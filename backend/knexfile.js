
module.exports = {
  production: {
    client: 'postgresql',
    
    connection: {
      database: 'dass2iogch2pm9',
      host:'ec2-52-21-247-176.compute-1.amazonaws.com',
      user:'tdrvtrgkasocar',
      port:5432,
      password:'60f0ce69a234b595c3e02d7a463e312d6dcd3feb6143445db852f7c55301b215'
    },
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  },
  
  staging: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
  
  },

  development: {
    client: 'postgresql',
    connection: {
      host:'127.0.0.1',
      database: 'postgres',
      user:     'postgres',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  },

};
