const express = require('express');
const router = express.Router();
var url = require('url');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://reqres.in/';

router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/getUserList', (req, res) => {
  let request = JSON.parse(JSON.stringify(url.parse(req.url, true).query));
  axios.get(`${API}api/users?page=${request.pageNumber}`)
    .then(users => {
      res.status(200).json(users.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

router.get('/getSingleUser', (req, res) => {
  let request = JSON.parse(JSON.stringify(url.parse(req.url, true).query));
  // res.status(200).json(`${API}api/users/${request.uid}`);
  axios.get(`${API}api/users/${request.uid}`)
    .then(result => {
      res.status(200).json(result.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;