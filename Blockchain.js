const Block = require('./Block')
const SHA256 = require('crypto-js/sha256')

class Blockchain {
    constructor() {
        // In a reversed linked list we keep a reference to the block 
        // at the end of the list instead of the root
        this.currentBlock = null
        this.height = 0
        this.TARGET_DIFFICULTY = BigInt("0x0000" + "F".repeat(60));
    }

    addBlock() {
        // Add genesis block
        if (this.currentBlock === null)
            this.currentBlock = new Block(this.height, null)
        // Add block to the end of the blockchain
        else
            this.currentBlock = new Block(this.height, this.hashPreviousBlock(this.currentBlock))
            
        console.log(this.currentBlock)
        this.height++
    }

    // Proof of Work
    hashPreviousBlock(previousBlock) {
        while(true) {
            let hash = SHA256(JSON.stringify(previousBlock)).toString()
            if (BigInt(`0x${hash}`) < this.TARGET_DIFFICULTY)
                return hash
            else
                previousBlock.nonce++
        }
    }
}

module.exports = Blockchain