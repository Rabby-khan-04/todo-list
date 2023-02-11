let counter = 1;
document.getElementById("add_btn").addEventListener("click", () => {
  const inputBox = document.querySelector("#list-input");
  const inputTxt = inputBox.value;

  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${counter++}</td>
  <td>${inputTxt}</td>
  <td>
  <button class="btn btn-success check-Btn">Done</button>
  <button class="btn btn-danger delete-btn">Delete</button>
  </td>`;

  document.querySelector("#list-body").appendChild(tr);
  inputBox.value = "";

  const deleteBtns = document.getElementsByClassName("delete-btn");

  for (const dBtn of deleteBtns) {
    dBtn.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.style.display = "none";
    });
  }

  const checkBtn = document.getElementsByClassName("check-Btn");

  for (const cBtn of checkBtn) {
    cBtn.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.style.backgroundColor = "#75b798";
    });
  }
});

document.getElementById("clear_btn").addEventListener("click", (e) => {
  document.getElementById("list-body").style.display = "none";
});
