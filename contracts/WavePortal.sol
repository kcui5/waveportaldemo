// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.18;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    mapping(address => uint256) private addressesToWaveCounts;

    constructor() {
        console.log("installation is so scary");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
        addressesToWaveCounts[msg.sender] += 1;
        console.log("%s has waved %d times!", msg.sender, addressesToWaveCounts[msg.sender]);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}