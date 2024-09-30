const crypto = require('crypto');

// Function to calculate the hash
function calculateHash(index, previousHash, timestamp, data, nonce) {
    return crypto.createHash('sha256').update(index + previousHash + timestamp + data + nonce).digest('hex');
}

// Proof of Work function
function mineBlock(previousHash, index, data, difficulty) {
    let nonce = 0;
    let hash;

    // Keep hashing until we find a valid hash
    do {
        nonce++;
        hash = calculateHash(index, previousHash, Date.now(), data, nonce);
    } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));

    console.log(`Block mined: ${hash}`);
    console.log(`Nonce: ${nonce}`);
    return hash;
}

// Example usage
const previousHash = "0"; // Genesis block hash
const difficulty = 4; // Number of leading zeros
const blockData = "Some transaction data";

// Mine the block
console.log("Mining...");
mineBlock(previousHash, 1, blockData, difficulty);
