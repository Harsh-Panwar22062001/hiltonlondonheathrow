// models/User.js

const connection = require('../db');

function createUser(name, email, password) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results.insertId);
    });
  });
}

function getUserByEmail(email) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      if (results.length === 0) {
        resolve(null);
        return;
      }
      resolve(results[0]);
    });
  });
}

module.exports = {
  createUser,
  getUserByEmail
};
