const express = require('express');
const router = express.Router();
const pg = require('pg');

const Pool = pg.Pool;
const pool = new Pool ({
    database: 'tasks', // database name is tasks
    host: 'localhost', // where database is
    port: 5432, // default port # for postgreSQL 
    max: 10, // max connections at one time
    idleTimeoutMillis: 30000
})

pool.on('connect', () => {
    console.log('PostgreSQL connected');
});

pool.on('error', (error) => {
    console.log('Error connecting to PostgreSQL', error);
})