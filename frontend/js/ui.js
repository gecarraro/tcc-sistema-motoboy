function toast(msg, tipo="ok"){
  let el = document.getElementById("toast");

  if(!el){
    el = document.createElement("div");
    el.id = "toast";
    el.className = "toast";
    document.body.appendChild(el);
  }

  el.innerText = msg;
  el.style.display = "block";
  el.style.background = tipo === "erro" ? "#dc2626" : "#16a34a";

  setTimeout(()=> el.style.display="none", 3000);
}
