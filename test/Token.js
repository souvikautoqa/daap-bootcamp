
const { ethers } = require('hardhat');
const { expect } = require('chai');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(),'ether');
}

describe('Token', ()=> {
    let token;
    beforeEach(async () => {
        const Token = await ethers.getContractFactory('Token');
        token = await Token.deploy('Awesome Token','ASM',100000);
    })

    describe('Deployment', ()=> {
        const name = 'Awesome Token';
        const symbol = 'ASM';
        const decimals = '18';
        const totalSupply = '1000000'

        it('has correct name', async () => {
            expect(await token.name(), name);
        })
    
        it('has correct symbol', async () => {
            expect(await token.symbol(), symbol);
        })
    
        it('has correct decimals', async () => {
            expect(await token.decimals(),decimals);
        })
    
        it('has correct total supply', async () => {
            expect(await token.totalSupply(),tokens(totalSupply));
        })
    })

})