// THEME TOGGLE
const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

toggle.onclick = () => {
  document.body.classList.toggle("light");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
};

// TYPING
const words = ["Developer", "Designer", "Freelancer"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
  current = words[i];
  document.getElementById("typing").textContent = current.substring(0, j);

  if (!deleting) j++;
  else j--;

  if (j === current.length) deleting = true;
  if (j === 0) {
    deleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, 100);
}
type();

// PROJECTS
const projects = [
  { title: "Portfolio", category: "web" },
  { title: "App UI", category: "app" }
];

const container = document.getElementById("project-container");

function displayProjects(filter) {
  container.innerHTML = "";

  projects
    .filter(p => filter === "all" || p.category === filter)
    .forEach(p => {
      container.innerHTML += `
        <div class="card reveal">
          <h3>${p.title}</h3>
          <p>${p.category}</p>
        </div>
      `;
    });
}

function filterProjects(cat) {
  displayProjects(cat);
}

displayProjects("all");

// SCROLL REVEAL
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// SCROLL PROGRESS + TOP BUTTON
window.onscroll = () => {
  let scroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  document.getElementById("progress-bar").style.width =
    (scroll / height) * 100 + "%";

  document.getElementById("topBtn").style.display =
    scroll > 300 ? "block" : "none";
};

document.getElementById("topBtn").onclick = () =>
  window.scrollTo({ top: 0, behavior: "smooth" });
