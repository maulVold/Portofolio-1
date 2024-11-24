document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(nextSlide, 4000);
});
// Modal
function showDetails(service) {
  var modal = document.getElementById("modal");
  var serviceDetails = document.getElementById("serviceDetails");
  var scrollPosition = window.scrollY;
  modal.style.display = "block";

  // Isi Konten
  switch (service) {
    case "2d_animation":
      serviceDetails.innerHTML = `
        <h2>2D Animation</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla elit sed diam ultricies, sed tempus purus tristique.</p>
      `;
      break;
    case "web_dev":
      serviceDetails.innerHTML = `
        <h2>Web Development</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla elit sed diam ultricies, sed tempus purus tristique.</p>
      `;
      break;
    case "film_making":
      serviceDetails.innerHTML = `
        <h2>Film Making</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla elit sed diam ultricies, sed tempus purus tristique.</p>
      `;
      break;
    case "interior_design":
      serviceDetails.innerHTML = `
        <h2>Interior Design</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla elit sed diam ultricies, sed tempus purus tristique.</p>
      `;
      break;
    case "graphic_design":
      serviceDetails.innerHTML = `
        <h2>Graphic Design</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla elit sed diam ultricies, sed tempus purus tristique.</p>
      `;
      break;
    case "3d_animation_game_dev":
      serviceDetails.innerHTML = `
        <h2>3D Animation and Game Development</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla elit sed diam ultricies, sed tempus purus tristique.</p>S
      `;
      break;
    default:
      serviceDetails.innerHTML = "<p>Service details not available</p>";
  }
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

window.addEventListener("click", function (event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
