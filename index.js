//* Forms Javascript

<!-- Reference:  https://youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD&si=QQ1cTW4t4FS2n0Zj -->


			


function validateForm() {
            
            var firstName = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;
            var email = document.getElementById("email").value;
            var address = document.getElementById("address").value;
            var eircode = document.getElementById("eircode").value;

            
            if (firstName === "" || lastName === "" || email === "" || address === "" || eircode === "") {
                alert("Please fill in all fields.");
                return false;
            }

            // To check if the email is a valid one
            var emailRegex = /^\S+@\S+\.\S+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return false;
            }

            // This allows the Eircode to be validated
              var eircodeRegex = /^[A-Za-z0-9]{}$/;
            if (!eircodeRegex.test(eircode)) {
                alert("Please enter a valid Eircode.");
                return false;
            }

            // If everything is entered correctly the form is submitted 
            alert("Form submitted successfully!");
            return true;
			
			
			
        }
