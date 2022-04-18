// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;

interface IIncentivesController {
    function claimReward(address[] calldata assets, uint256 amount, address to) external returns (uint256);
    function getRewardsBalance(address[] calldata assets, address user) external view returns (uint256);
}