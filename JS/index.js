async function getDetails() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const userAgent = navigator.userAgent;

    const deviceType = /Mobi|Android|iPhone/.test(userAgent) ? "Mobile" : "Desktop";

    document.getElementById('ipDisplay').innerHTML = `IP Address: ${data.ip} <br>City: ${data.city} <br>ZIP Code: ${data.postal} <br>Country: ${data.country_name} <br>Device: ${deviceType}`;
  } catch (error) {
    document.getElementById('ipDisplay').textContent = 'Unable to fetch details.';
  }
}

getDetails();

function toggleNavbar() {
  const navbar = document.getElementById("navbar");
  if (navbar.style.transform === "translateY(0%)") {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0%)";
  }
}