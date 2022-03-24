function enterClicked () {
  // this function gets user's street number and street name and displays it back to user

  // get age from text field and cast it to integer
  let streetNumber = parseInt(document.getElementById("street-number").value)
	// get street number from text field 
  let streetName = document.getElementById("street-name").value

  // displays their address to user
  document.getElementById('user-info').innerHTML = "Your address is " + streetNumber + " " + streetName + "."
}
