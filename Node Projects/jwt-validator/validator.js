// token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJqb2huX2RvZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3ODA1ODI1OSwiZXhwIjoxNzc4MDYxODU5fQ.Hlp0dlVfyxf560vfevzmqiwAYdODHsjlFDl5PUvuqu4

const jwt = require("jsonwebtoken");
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJqb2huX2RvZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3ODA1ODI1OSwiZXhwIjoxNzc4MDYxODU5fQ.Hlp0dlVfyxf560vfevzmqiwAYdODHsjlFDl5PUvuqu4";
const secretKey = 'secretKey123';

try{
    function validateToken(token, secret) {
        if(!token) return console.error("No token provided for validation.");
        if (!secret) return console.error("Secret key is required for validation.");
        try{
            const decoded = jwt.verify(token, secret);
            return { ok: true, decoded};
        }catch(error){
            return { ok: false, error: error.message};
        }
    }

    function checkExpiry(token) {
        if(!token) return console.error("No token provided for expiry check.");
        const decoded = jwt.decode(token);
        if(!decoded || !decoded.exp) return console.error("Invalid token: Unable to decode or missing expiry.");
        const currentTime = Math.floor(Date.now() / 1000);
        return decoded.exp > currentTime ? "Token is valid" : "Token has expired";
    }

    function decodeToken(token) {
        if(!token) return console.error("No token provided for decoding.");
        const decoded = jwt.decode(token);
        if(!decoded) return console.error("Invalid token: Unable to decode.");
        return decoded;
    }

    const validationResult = validateToken(token, secretKey);
    const expiryStatus = checkExpiry(token);
    const decodedPayload = decodeToken(token);

    console.log("Validation Result:", validationResult);
    console.log("Expiry Status:", expiryStatus);
    console.log("Decoded Payload:", decodedPayload);

}catch(error){
    console.error("Error validating JWT Token:", error.message);
}