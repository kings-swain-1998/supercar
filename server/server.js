const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const server = jsonServer.create()
const router = jsonServer.router('./database.json');
const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults());
const SECRET_KEY = '123456789';
const expiresIn = '1 days';
// const express = require('express');
// const app = express();
// const path = require('path');

// app.use(express.static(path.resolve('client', 'build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve('client', 'build', 'index.html'));
// });


// Create a token from a payload 
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

// Verify the token 
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
}

// Register New User
server.post('/auth/register', (req, res) => {
  console.log("register endpoint called; request body:");
  console.log(req.body);
  const { email, password, firstname, lastname, avatar } = req.body;

  if (isAuthenticated({ email, password }) === true) {
    const status = 401;
    const message = 'Email and Password already exist';
    res.status(status).json({ status, message });
    return
  }

  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({ status, message })
      return
    };

    // Get current users data
    var data = JSON.parse(data.toString());

    // Get the id of last user
    var last_item_id = data.users[data.users.length - 1].id;

    //Add new user
    data.users.push({ id: last_item_id + 1, email: email, password: password, avatar: avatar, firstname: firstname, lastname: lastname }); //add some data
    fs.readFile("./database.json", (err, datas) => {
      const datab = JSON.parse(datas.toString());
      datab.userLocal.push({ id: last_item_id + 1, userLocal: last_item_id + 1, firstname: firstname, lastname: lastname, avatar: avatar });
      var writeData1 = fs.writeFile("./database.json", JSON.stringify(datab), (err, result) => {  // WRITE
        if (err) {
          const status = 401
          const message = err
          res.status(status).json({ status, message })
          return
        }
      });
    })

    var writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {  // WRITE
      if (err) {
        const status = 401
        const message = err
        res.status(status).json({ status, message })
        return
      }
    });

  });

  // Create token for new user
  const access_token = createToken({ email, password })
  console.log("Access Token:" + access_token);
  res.status(200).json({ access_token })
})

// Login to one of the users from ./users.json
server.post('/auth/login', (req, res) => {
  console.log("login endpoint called; request body:");
  console.log(req.body);
  const { email, password } = req.body;
  if (isAuthenticated({ email, password }) === false) {
    console.log(email, password)
    const status = 401
    const message = 'Incorrect email or password'
    res.status(status).json({ status, message })
    return
  } else {
    const userList = userdb.users;
    var findIndex = () => {
      for (let i = 0; i <= userList.length; i++) {
        if (userList[i].email === email && userList[i].password === password) {
          return i
        }
      }
    }
    const index = findIndex();
    console.log(index);
    const userItem = userList[index];
    console.log(userItem);
    const access_token = createToken({ email, password })
    console.log("Access Token:" + access_token);
    res.status(200).json({
      "token": access_token,
      "userID": JSON.stringify(userItem.id),
      "firstname": JSON.stringify(userItem.firstname).split("\"").join(""),
      "lastname": JSON.stringify(userItem.lastname).split("\"").join(""),
      "avatar": JSON.stringify(userItem.avatar).split("\"").join("")
    });
  }

})

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Error in authorization format'
    res.status(status).json({ status, message })
    return
  }
  try {
    let verifyTokenResult;
    verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);

    if (verifyTokenResult instanceof Error) {
      const status = 401
      const message = 'Access token not provided'
      res.status(status).json({ status, message })
      return
    }
    next()
  } catch (err) {
    const status = 401
    const message = 'Error access_token is revoked'
    res.status(status).json({ status, message })
  }
});



server.use(router);

server.listen(8080, () => {
  console.log('Run Auth API Server')
});