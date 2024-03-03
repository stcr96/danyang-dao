// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./CredentialBox.sol";

interface iESDanyang {
  function remainingAmountForPromotion() external view returns (uint256);

  function remainingAmountForSale() external view returns (uint256);

  function isOnSale() external view returns (bool);

  function mintedSalesTokenIdList(
    uint256 offset,
    uint256 limit
  ) external view returns (uint256[] memory);

  function buy(uint256 tokenId) external payable;

  function buyBundle(uint256[] memory tokenIdList) external payable;

  // functions for admin
  function updateSalesStatus(bool _isOnSale) external;

  function updateBaseURI(string calldata newBaseURI) external;

  function freezeMeatdata() external;

  function mintForPromotion(
    address to,
    uint256 amount
  ) external;

  function withdrawETH() external;
}

contract ESDanyang is iESDanyang, ERC721, ReentrancyGuard, CredentialBox {
  using Strings for uint256;

  uint256 public constant PRICE = 0.01 ether;
  uint256 public constant MAX_SUPPLY = 10000;
  uint256 private _nextReservedTokenId = 9800;
  uint256 private _remainingAmountForPromotion = 200;
  uint256 private _remainingAmountForSale = 9800;
  uint256[] private _mintedTokenIdList;
}