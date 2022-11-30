
const { ethers } = require('hardhat');
const { expect } = require('chai');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(),'ether');
}

describe('Token', ()=> {
    let token;
    let accounts;
    beforeEach(async () => {
        const Token = await ethers.getContractFactory('Token');
        token = await Token.deploy('Awesome Token','ASM',1000000);
        accounts = await ethers.getSigners();
    })

    describe('Deployment', ()=> {
        const name = 'Awesome Token';
        const symbol = 'ASM';
        const decimals = '18';
        const totalSupply = '1000000'

        it('has correct name', async () => {
            expect(await token.name()).to.equal(name)
        })
    
        it('has correct symbol', async () => {
            expect(await token.symbol()).to.equal(symbol);
        })
    
        it('has correct decimals', async () => {
            expect(await token.decimals()).to.equal(decimals);
        })
    
        it('has correct total supply', async () => {
            expect(await token.totalSupply()).to.equal(tokens(totalSupply));
        })

        it('it assign total supply to deployer', async () => {
            expect(await token.balanceOf(accounts[0].address)).to.equal(tokens(totalSupply));
        })
    })

})