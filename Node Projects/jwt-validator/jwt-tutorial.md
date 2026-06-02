# JWT (JSON Web Token) Tutorial

## What is a JWT?
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

## Structure of a JWT
A JWT consists of three parts separated by dots (`.`):
1. **Header**: Usually contains the type of token (JWT) and the signing algorithm (like HS256).
2. **Payload**: Contains the claims (information) about an entity (typically the user) and additional data.
3. **Signature**: Used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.

Example: `xxxxx.yyyyy.zzzzz`

## Key Concepts

### 1. Signing vs Encryption
- **Signing**: A signed token can verify the *integrity* of the claims contained within it. It doesn't hide the information from others; it just proves it hasn't been tampered with.
- **Encryption**: Hides the information from others.

### 2. Verification (`jwt.verify`)
Verification checks the signature against the secret key. If the signature is valid and the token hasn't expired, it returns the decoded payload. If anything is wrong, it throws an error.

### 3. Decoding (`jwt.decode`)
Decoding just reads the payload without checking the signature. This is useful for checking if a token is expired *before* trying to verify it, or for reading public info when you don't have the secret key. **Never trust decoded data without verification.**

### 4. Expiration (`exp`)
The `exp` claim in the payload indicates when the token expires. It's a Unix timestamp (seconds since 1970).

## Best Practices
1. **Keep Secrets Secret**: Never share your secret key or check it into source control.
2. **Don't store sensitive data in payload**: Since the payload is only Base64 encoded (not encrypted by default), anyone with the token can read it.
3. **Use HTTPS**: Always transmit tokens over secure connections.
4. **Short Expiration**: Set reasonable expiration times to minimize the risk if a token is stolen.
