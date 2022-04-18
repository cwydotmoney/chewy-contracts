// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

interface IComptroller {
    function claimReward(uint8 rewardType, address holder) external;
    function compAccrued(address holder) view external returns (uint256 comp);
    function enterMarkets(address[] memory _iTokens) external;
    function pendingComptrollerImplementation() view external returns (address implementation);
}