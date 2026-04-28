// Typing Animation
const words = ["Web Developer", "Designer", "Freelancer"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
  current = words[i];
  document.getElementById("typing").textContent = current.substring(0, j);

  if (!deleting && j < current.length) j++;
  else if (deleting && j > 0) j--;

  if (j === current.length) deleting = true;
  if (j === 0) {
    deleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, 100);
}
type();


// PROJECTS (EDIT HERE)
const projects = [
  {
    title: "Portfolio Website",
    desc: "My personal portfolio",
    tech: "HTML, CSS, JS",
    image: "assets/images/project1.png",
    github: "#",
    live: "#"
  }
];

const container = document.getElementById("project-container");

projects.forEach(p => {
  container.innerHTML += `
    <div class="card">
      <img src="${p.image}" class="project-img">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <small>${p.tech}</small><br>
      <a href="${p.github}">GitHub</a> |
      <a href="${p.live}">Live</a>
    </div>
  `;
});


// Scroll Progress + Top Button
window.onscroll = () => {
  let scroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  document.getElementById("progress-bar").style.width =
    (scroll / height) * 100 + "%";

  document.getElementById("topBtn").style.display =
    scroll > 300 ? "block" : "none";
};

document.getElementById("topBtn").onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


// IMAGE MODAL
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("cert") || e.target.classList.contains("project-img")) {
    modal.style.display = "block";
    modalImg.src = e.target.src;
  }
});

closeBtn.onclick = () => modal.style.display = "none";

modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
