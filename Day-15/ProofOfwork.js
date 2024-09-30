const { Keypair } = require("@solana/web3.js")
const {nacl}=require("tweetnacl");


// genarating keypair
const keypair=keypair.generate();

//public
const pubkey=keypair.publicKey.toString();
const secretKey=keypair.secretKey;

const message=new TextEncoder().encode("hello world");

const sign=nacl.sign.detached(message,secretKey);

const  result=nacl.sign.detached.verify(
    message,
    sign,
    keypair.publicKey.toBytes(),
);


