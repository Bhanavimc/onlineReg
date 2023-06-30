document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var event = document.getElementById("event").value;
  
    // Validate form inputs
    if (name === "" || email === "" || event === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Perform registration (You can customize this as per your requirement)
    // For demonstration purposes, we'll simply display a success message
    var message = "Registration successful!";
  
    document.getElementById("registrationStatus").innerText = message;
  });
  