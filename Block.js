class Block {
    constructor(blockNumber, previousBlockHash) {
        this.timestamp = Date.now()
        this.nonce = 0
        this.blockNumber = blockNumber
        this.previousBlockHash = previousBlockHash
    }
}

module.exports = Block