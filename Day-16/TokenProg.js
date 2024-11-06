const {
    Connection, 
    PublicKey, 
    Keypair, 
    Transaction,
    SystemProgram,
    LAMPORTS_PER_SOL
  } = require('@solana/web3.js');
  const {
    Token,
    TOKEN_PROGRAM_ID,
    MintLayout,
    AccountLayout
  } = require('@solana/spl-token');
  
  // Create a connection
  const connection = new Connection("https://api.devnet.solana.com", "confirmed");
  
  // Create a mint
  async function createMint() {
    const mintAuthority = Keypair.generate();
    const freezeAuthority = Keypair.generate();
    const payer = Keypair.generate();
  
    const mint = await Token.createMint(
      connection,
      payer,
      mintAuthority.publicKey,
      freezeAuthority.publicKey,
      9, // decimals
      TOKEN_PROGRAM_ID
    );
    
    console.log('Created mint:', mint.publicKey.toString());
  }
  
  // Call the function
  createMint();
  