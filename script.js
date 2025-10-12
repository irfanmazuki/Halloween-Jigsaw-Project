function closeModal(modalId) {
  var modal = document.getElementById("myModal");
  const myModal2 = document.getElementById("myModal2");
  if (modalId === 1) {
    modal.style.display = "none";
  } else if (modalId === 2) {
    myModal2.style.display = "none";
  }
}

