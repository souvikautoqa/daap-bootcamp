
const { ethers } = require('hardhat');
const { expect } = require('chai');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(),'ether');
}

describe('Token', ()=> {
    let token, accounts, deployer, receiver;
    beforeEach(async () => {
        const Token = await ethers.getContractFactory('Token');
        token = await Token.deploy('Awesome Token','ASM',1000000);
        accounts = await ethers.getSigners();
        deployer = accounts[0];
        receiver = accounts[1];
    })

    describe('Deployment', ()=> {
        const name = 'Awesome Token';
        const symbol = 'ASM';
        const decimals = '18';
        const totalSupply = 1000000;

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
            expect(await token.balanceOf(deployer.address)).to.equal(tokens(totalSupply));
        })
    })

    describe('Transfer token', () =>{
        let amount, transaction, result ;

        describe('Success', () => {
            beforeEach( async ()=> {
                amount = tokens(100);
                transaction =  await token.connect(deployer).transfer(receiver.address,amount);
                result = await transaction.wait();
            })
    
            it('transfers token balances', async () =>{
                expect(await token.balanceOf(deployer.address)).to.equal(tokens(999900));
                expect(await token.balanceOf(receiver.address)).to.equal(amount);
            })
    
            it('emits transfer event', async ()=>{
                const event = result.events[0];
                expect(event.event).to.equal('Transfer');
                const args = event.args;
                expect(args.from).to.equal(deployer.address);
                expect(args.to).to.equal(receiver.address);
                expect(args.value).to.equal(amount);
            })
        })

        describe('faliure', ()=>{
            it('rejects insufficient balances', async() =>{
                const invalidAmt = tokens(100000000);
                await expect(token.connect(deployer).transfer(receiver.address,invalidAmt)).to.be.reverted;
            })

            it('rejects insufficient receipient', async() =>{
                const validAmt = tokens(100);
                await expect(token.connect(deployer).transfer('0x0000000000000000000000000000000000000000',validAmt)).to.be.reverted;
            })
        })


        


    })

})