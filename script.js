function checkChallan() {
  let vehicle = document.getElementById("vehicleNumber").value;

  if (vehicle === "") {
    alert("Please enter vehicle number");
    return;
  }

  // Show result section
  document.getElementById("resultSection").classList.remove("hidden");

  // Redirect to official challan site
  window.open("https://echallan.parivahan.gov.in/", "_blank");
}

function payNow() {
  alert("Payment gateway will be integrated here (Razorpay)");
}

function hireLawyer() {
  alert("Our lawyer will contact you shortly!");
}