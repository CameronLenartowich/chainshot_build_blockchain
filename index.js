const Blockchain = require('./Blockchain')

const testBlockchain = () => {
    let thisBlockchain = new Blockchain()
    let numberOfBlocksToAdd = 5

    for(let i = 0 ; i < numberOfBlocksToAdd ; i++) {
        thisBlockchain.addBlock()
    }
}

testBlockchain();