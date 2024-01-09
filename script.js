const registrationForm = document.getElementById("registrationForm");
const otpSection = document.getElementById("otp-section");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(registrationForm);

  fetch("register.php", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // OTP generated successfully
      alert("OTP sent to your email.");
      registrationForm.style.display = "none";
      otpSection.style.display = "block";
    } else {
      // Handle registration error
      alert(data.error);
    }
  })
  .catch(error => {
    console.error(error);
  });
});

// Handle OTP verification
// ...