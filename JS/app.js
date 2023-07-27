const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', ()=> {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach( n => n.addEventListener("click", ()=>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));


function updateCounter() {
  const endDate = new Date('2023-12-31T23:59:59'); // Date start
  const currentDate = new Date();
  const timeDifference = endDate - currentDate;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // The element render in the front 
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  } else {
    // if finish show a message
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    clearInterval(timer); // stop the interval timer
  }
}

//call the date every second (1000 ms)
const timer = setInterval(updateCounter, 1000);

function toggleFAQ(button) {
  let content = button.nextElementSibling;
  content.style.display = (content.style.display === "block") ? "none" : "block";
}
