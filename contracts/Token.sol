// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
    // state variable - belongs to  contract and will be stored in the blockchain
    // public creates a name() function
    string public name;  
    string public symbol;
    uint256 public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    constructor (string memory _name, string memory _symbol, uint256 _totalSupply) {
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply * (10 ** decimals);
        console.log(balanceOf[msg.sender]);
        balanceOf[msg.sender] = totalSupply;
        console.log(balanceOf[msg.sender]);
    }



 }
