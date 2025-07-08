document.addEventListener("DOMContentLoaded", () => {
  const firstName = localStorage.getItem("Name11");
  const lastName = localStorage.getItem("Name22");
  const startDate = localStorage.getItem("startDate");
  const endDate = localStorage.getItem("endDate");
  document.getElementById("displayFirstName").value =
    firstName || "Not provided";
  document.getElementById("displayLastName").value = lastName || "Not provided";
  document.getElementById("displayStartDate").value =
    startDate || "Not provided";
  document.getElementById("displayEndDate").value = endDate || "Not provided";
  document.getElementById("ticFirstName").innerText =
    firstName || "Not provided";
  document.getElementById("ticLastName").innerText = lastName || "Not provided";
  document.getElementById("ticStartDate").innerText =
    startDate || "Not provided";
  document.getElementById("ticEndDate").innerText = endDate || "Not provided";

  document.querySelectorAll(".ticFirstName").forEach((el) => {
    el.innerText = firstName || "Not provided";
  });
  document.querySelectorAll(".ticLastName").forEach((el) => {
    el.innerText = lastName || "Not provided";
  });
  document.querySelectorAll(".ticStartDate").forEach((el) => {
    el.innerText = startDate || "Not provided";
  });
  document.querySelectorAll(".ticEndDate").forEach((el) => {
    el.innerText = endDate || "Not provided";
  });
});

function save2() {

  window.location.href = "cost.html";
}

let count = 0;

function pl() {
    count++;
    document.getElementById("how").innerHTML = count;
  
    const price = document.getElementById("price");
    if (count == 1) {
      let pri = 350 * 1;
      price.innerHTML = `${pri}$`;
    } else if (count == 2) {
      let pri = 350 * 2;
      price.innerHTML = `${pri}$`;
    } else if (count == 3) {
      let pri = 350 * 3;
      price.innerHTML = `${pri}$`;
    } else if (count == 4) {
      let pri = 350 * 4;
      price.innerHTML = `${pri}$`;
    } else if (count == 5) {
      let pri = 350 * 5;
      price.innerHTML = `${pri}$`;
    } else if (count == 6) {
      let pri = 350 * 6;
      price.innerHTML = `${pri}$`;
    } else if (count == 7) {
      let pri = 350 * 7;
      price.innerHTML = `${pri}$`;
    } else if (count == 8) {
      let pri = 350 * 8;
      price.innerHTML = `${pri}$`;
    }
  

    localStorage.setItem("p1", price.textContent);
  }
  lStorage.setItem("p1", pri2);

function mi() {
  count--;
  document.getElementById("price").textContent = count;
}
