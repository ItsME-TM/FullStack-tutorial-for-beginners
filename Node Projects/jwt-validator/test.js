const jwt = require("jsonwebtoken");
const { validateToken, checkExpiry, decodeToken } = require("./validator.js");

const secretKey = "testSecret123";
const payload = { userId: 456, role: "user" };

async function runTests() {
  console.log("Starting JWT Validator tests...");

  try {
    // 1. Generate a test token
    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
    console.log("✓ Test token generated");

    // 2. Test decodeToken
    const decoded = decodeToken(token);
    if (decoded.userId === payload.userId) {
      console.log("✓ decodeToken test passed");
    } else {
      console.error("✗ decodeToken test failed: Payload mismatch");
    }

    // 3. Test checkExpiry (Valid)
    const expiryStatus = checkExpiry(token);
    if (expiryStatus === "Token is valid") {
      console.log("✓ checkExpiry (valid) test passed");
    } else {
      console.error("✗ checkExpiry (valid) test failed");
    }

    // 4. Test validateToken (Correct secret)
    const validResult = validateToken(token, secretKey);
    if (validResult.ok && validResult.decoded.userId === payload.userId) {
      console.log("✓ validateToken (valid) test passed");
    } else {
      console.error("✗ validateToken (valid) test failed");
    }

    // 5. Test validateToken (Wrong secret)
    const invalidResult = validateToken(token, "wrongSecret");
    if (!invalidResult.ok) {
      console.log("✓ validateToken (invalid secret) test passed");
    } else {
      console.error("✗ validateToken (invalid secret) test failed");
    }

    // 6. Test checkExpiry (Expired)
    const expiredToken = jwt.sign(payload, secretKey, { expiresIn: "-1h" });
    const expiredStatus = checkExpiry(expiredToken);
    if (expiredStatus === "Token has expired") {
      console.log("✓ checkExpiry (expired) test passed");
    } else {
      console.error("✗ checkExpiry (expired) test failed");
    }

    console.log("\nAll tests completed!");
  } catch (error) {
    console.error("\n✗ An error occurred during testing:", error.message);
    console.log("Make sure you have implemented all functions in validator.js");
  }
}

runTests();
