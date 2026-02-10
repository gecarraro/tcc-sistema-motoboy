const API = "http://localhost:8080";

function getToken() {
  return localStorage.getItem("token");
}

async function login(email, senha) {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha })
  });

  const data = await res.json();
  localStorage.setItem("token", data.token);
  return data;
}

async function getClientes() {
  const res = await fetch(`${API}/clientes`, {
    headers: {
      Authorization: "Bearer " + getToken()
    }
  });

  return res.json();
}


async function criarCliente(cliente) {
  const res = await fetch(`${API}/clientes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken()
    },
    body: JSON.stringify(cliente)
  });

  return res.json();
}

async function criarPedido(clienteId) {
  const res = await fetch(`${API}/pedidos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken()
    },
    body: JSON.stringify({ clienteId })
  });

  return res.json();
}

async function listarPedidos() {
  const res = await fetch(`${API}/pedidos`, {
    headers: {
      Authorization: "Bearer " + getToken()
    }
  });

  return res.json();
}

async function getPrecos() {
  const res = await fetch(`${API}/precos`, {
    headers: {
      Authorization: "Bearer " + getToken()
    }
  });

  return res.json();
}


async function criarPreco(preco) {
  const res = await fetch(`${API}/precos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken()
    },
    body: JSON.stringify(preco)
  });

  return res.json();
}