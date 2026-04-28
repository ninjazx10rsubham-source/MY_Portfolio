:root {
  --bg: #0f172a;
  --text: #ffffff;
  --primary: #3b82f6;
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: var(--bg);
  color: var(--text);
}

/* Sections */
.section {
  padding: 80px 20px;
  text-align: center;
}

/* Navbar */
nav {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  backdrop-filter: blur(10px);
}

/* Buttons */
.btn {
  padding: 10px 20px;
  background: var(--primary);
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}
.btn:hover {
  transform: scale(1.1);
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* Skills */
.skill {
  padding: 10px;
  background: #1e293b;
}

/* Cards */
.card {
  padding: 20px;
  background: #1e293b;
  transition: 0.3s;
}
.card:hover {
  transform: translateY(-10px);
}

/* Images */
.profile-img {
  width: 150px;
  border-radius: 50%;
  margin-top: 20px;
}

.project-img {
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
}

.cert {
  width: 100%;
  cursor: pointer;
  transition: 0.3s;
}
.cert:hover {
  transform: scale(1.05);
}

/* Progress Bar */
#progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: var(--primary);
  width: 0%;
}

/* Scroll Top */
#topBtn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
}

/* MODAL */
.modal {
  display: none;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.9);
}

.modal-content {
  display: block;
  margin: auto;
  width: 80%;
  max-width: 700px;
  margin-top: 80px;
}

.close {
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 40px;
  color: white;
  cursor: pointer;
}
