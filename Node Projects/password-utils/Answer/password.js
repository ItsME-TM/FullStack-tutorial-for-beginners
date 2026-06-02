const bcrypt = require('bcrypt');

async function hashPassword(password, saltRounds) {
    if(!password) return console.error("Password is required for hashing.");
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
}

async function verifyPassword(password, hash) {
    if(!password || !hash) return console.error("Both password and hash are required for verification.");
    const match = await bcrypt.compare(password, hash);
    return match;
}

async function generateSalt(saltRounds) {
    return await bcrypt.genSalt(saltRounds);
}

module.exports = {                            
    hashPassword,                             
    verifyPassword,                           
    generateSalt                              
};