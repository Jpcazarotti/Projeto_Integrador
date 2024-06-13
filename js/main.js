document.addEventListener("DOMContentLoaded", function () {
  const buttonOnline = document.getElementById("button_aten_online");
  const buttonPresencial = document.getElementById("button_aten_presencial");
  const collapseOnline = document.getElementById("aten_online");
  const collapsePresencial = document.getElementById("aten_presencial");

  buttonOnline.addEventListener("click", function () {
    if (collapsePresencial.classList.contains("show")) {
      new bootstrap.Collapse(collapsePresencial, { toggle: true });
    }
  });

  buttonPresencial.addEventListener("click", function () {
    if (collapseOnline.classList.contains("show")) {
      new bootstrap.Collapse(collapseOnline, { toggle: true });
    }
  });
});

function toggleNumber() {
  var numberDiv = document.getElementById('samu-number');
  if (numberDiv.style.display === 'none' || numberDiv.style.display === '') {
      numberDiv.style.display = 'block';
  } else {
      numberDiv.style.display = 'none';
  }
}
