const jwt = require("jsonwebtoken");

/**
 * Validates a JWT token using a secret key
 * @param {string} token - The JWT token to validate
 * @param {string} secret - The secret key used for signing
 * @returns {Object} An object containing { ok: true, decoded } or { ok: false, error }
 */
function validateToken(token, secret) {
  if (!token) throw new Error("No token provided");
  if (!secret) throw new Error("Secret key is required");
  
  try {
    const decoded = jwt.verify(token, secret);
    return { ok: true, decoded };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

/**
 * Checks if a JWT token is expired without verifying signature
 * @param {string} token - The JWT token to check
 * @returns {string} A message indicating if the token is valid or expired
 */
function checkExpiry(token) {
  if (!token) throw new Error("No token provided");
  
  const decoded = jwt.decode(token);
  if (!decoded || !decoded.exp) {
    throw new Error("Invalid token: Unable to decode or missing expiry");
  }
  
  const currentTime = Math.floor(Date.now() / 1000);
  return decoded.exp > currentTime ? "Token is valid" : "Token has expired";
}

/**
 * Decodes a JWT token payload without verifying signature
 * @param {string} token - The JWT token to decode
 * @returns {Object} The decoded payload
 */
function decodeToken(token) {
  if (!token) throw new Error("No token provided");
  
  const decoded = jwt.decode(token);
  if (!decoded) {
    throw new Error("Invalid token: Unable to decode");
  }
  
  return decoded;
}

module.exports = {
  validateToken,
  checkExpiry,
  decodeToken,
};
