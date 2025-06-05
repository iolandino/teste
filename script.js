
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}

function translate() {
  const input = document.getElementById("translateInput");
  const resultDiv = document.getElementById("translationResult");
  const word = input.value.trim().toLowerCase();
  const dict = { "universidade": "wai-universi", "livro": "wai-libru", "aula": "wai-aura" };
  resultDiv.textContent = dict[word] || "Tradução não encontrada.";
}

function registerUser() {
  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value.trim();
  if (!name || !email || !password) return alert("Preencha todos os campos.");
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.some(u => u.email === email)) return alert("Email já cadastrado.");
  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}

function loginUser() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const message = document.getElementById("login-message");
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    message.textContent = "Email ou senha incorretos.";
    message.style.color = "red";
    return;
  }
  sessionStorage.setItem("loggedUser", JSON.stringify(user));
  message.textContent = "Login realizado com sucesso!";
  message.style.color = "green";
  setTimeout(() => window.location.href = "index.html", 1000);
}

function logout() {
  sessionStorage.removeItem("loggedUser");
  alert("Você saiu.");
  window.location.href = "login.html";
}
