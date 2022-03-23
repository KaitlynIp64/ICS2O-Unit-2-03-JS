// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets user's address number and address name and shows it back to user.
 */
function enterClicked() {
  // input
  const streetNumber = parseInt(document.getElementById("street-number-entered").value)
  const streetName = document.getElementById("street-name-entered").value
  // output
document.getElementById("address").innerHTML =
    "Your address is: " + streetNumber + " " + streetName + "."
}
