const { hashPassword, verifyPassword, generateSalt } = require('./password.js');

async function runTests() {
  console.log("=== Testing Password Utils ===\n");

  // Test 1: Hash a password with salt rounds
  console.log("Test 1: Hashing a password");
  const password = "testPassword123";
  const saltRounds = 10;
  const hash = await hashPassword(password, saltRounds);
  console.log(`Password: ${password}`);
  console.log(`Salt rounds: ${saltRounds}`);
  console.log(`Hash: ${hash}\n`);

  // Test 2: Verify correct password
  console.log("Test 2: Verifying correct password");
  const isCorrect = await verifyPassword(password, hash);
  console.log(`Password: ${password}`);
  console.log(`Verification result: ${isCorrect}\n`);

  // Test 3: Verify incorrect password
  console.log("Test 3: Verifying incorrect password");
  const isWrong = await verifyPassword("wrongPassword", hash);
  console.log(`Password: wrongPassword`);
  console.log(`Verification result: ${isWrong}\n`);

  // Test 4: Generate salt
  console.log("Test 4: Generating salt");
  const salt = await generateSalt(12);
  console.log(`Salt (12 rounds): ${salt}\n`);

  // Test 5: Hash with custom salt rounds
  console.log("Test 5: Hashing with custom salt rounds");
  const hash12 = await hashPassword(password, 12);
  console.log(`Password: ${password}`);
  console.log(`Salt rounds: 12`);
  console.log(`Hash (12 rounds): ${hash12}\n`);

  console.log("All tests completed!");
}

// Run tests and handle errors
runTests().catch(error => {
  console.error("Test failed:", error);
  process.exit(1);
});