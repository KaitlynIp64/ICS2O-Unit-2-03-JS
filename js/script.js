// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const streetNumber = document.getElementById("street-number").value
  const streetName = parseInt(document.getElementById("street-name-entered").value)

  // output
  document.getElementById("address").innerHTML =
    "Your info is: " + streetNumber + ", streetNumber " + streetAddress + "."
}
