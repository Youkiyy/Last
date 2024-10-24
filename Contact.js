// Phone navbar
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const Navlink = document.getElementById("navlinks");
  
    menuToggle.addEventListener("click", () => {
      Navlink.classList.toggle("active");
    });
  });
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('Name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

   
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);


    alert("Thank you Your message has been received");

   
    document.getElementById('contactForm').reset();
  });