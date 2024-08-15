// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// import "@openzeppelin/contracts/access/Ownable.sol";

// Define the interface for BatchRegistry
interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn {
    IBatchRegistry public batchRegistry;

    constructor(address _batchRegistryAddress) {
        batchRegistry = IBatchRegistry(_batchRegistryAddress);
    }

    function callCheckIn() public {
        batchRegistry.checkIn();
    }
}