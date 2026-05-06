const jwt = require("jsonwebtoken");
const secretKey = 'secretKey123';
const payload = {
  userId: 123,
  username: 'john_doe',
  role: 'admin'
};
const expires = '1h';
const token = jwt.sign(payload, secretKey,
    { expiresIn: expires}
)
console.log("Generated JWT Token:", token);