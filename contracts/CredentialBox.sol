// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@openzeppelin/contracts/access/Ownable.sol";

abstract contract CredentialBox is Ownable {
  address private issuerAddress;
  uint256 private idCount;

  struct Credential {
    uint256 id;
    address issuer;
    address holder;
    string value;
  }

  mapping(address => Credential) private credentials;

  constructor() {
    issuerAddress = msg.sender;
    idCount = 1;
  }

  function clainCredential(address _holderAddress, string calldata _value) public onlyOwner returns (bool) {
    Credential storage credential = credentials[_holderAddress];

    require(credential.id == 0);
    credential.id = idCount;
    credential.issuer = issuerAddress;
    credential.holder = _holderAddress;
    credential.value = _value;
    
    idCount += 1;

    return true;
  }

  function getCredential(address _holderAddress) public view returns (Credential memory) {
    return credentials[_holderAddress];
  }
}