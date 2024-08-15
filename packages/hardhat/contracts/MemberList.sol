// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./BatchRegistry.sol";

contract MemberList is BatchRegistry {

    address[] public checkedInAddresses;

    constructor(address initialOwner, uint16 batchNumber)
        BatchRegistry(initialOwner, batchNumber)
    {}

    // New function to handle check-in and tracking
    function checkInAndTrack() public {
        // Call the original checkIn function from BatchRegistry
        BatchRegistry.checkIn();

        // Add the sender to the checkedInAddresses array if it's their first time
        if (yourContractAddress[tx.origin] == address(0)) {
            checkedInAddresses.push(tx.origin);
        }
    }

    // Function to get all checked-in addresses
    function getCheckedInAddresses() public view returns (address[] memory) {
        return checkedInAddresses;
    }
}

