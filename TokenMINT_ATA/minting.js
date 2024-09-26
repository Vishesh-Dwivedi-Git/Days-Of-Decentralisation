const associatedToken = getAssociatedTokenAddressSync(
    mintKeypair.publicKey,
    wallet.publicKey,
    false,
    TOKEN_2022_PROGRAM_ID,
);

console.log(associatedToken.toBase58());

const transaction2 = new Transaction().add(
    createAssociatedTokenAccountInstruction(
        wallet.publicKey,
        associatedToken,
        wallet.publicKey,
        mintKeypair.publicKey,
        TOKEN_2022_PROGRAM_ID,
    ),
);

await wallet.sendTransaction(transaction2, connection);

const transaction3 = new Transaction().add(
    createMintToInstruction(mintKeypair.publicKey, associatedToken, wallet.publicKey, 1000000000, [], TOKEN_2022_PROGRAM_ID)
);

await wallet.sendTransaction(transaction3, connection);