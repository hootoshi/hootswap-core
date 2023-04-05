pragma solidity =0.5.16;

import '../HootSwapLP.sol';

contract ERC20 is HootSwapLP {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
