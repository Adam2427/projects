function doSubmit() {
  let form = document.getElementById("form");

  let formData = new FormData(form);
  let data = "";
  for (const [key, value] of formData) {
    data += `${key}: ${value}\n`;
  }
  // console.log(data);
  alert(data);
}
let dob = document.getElementById("DOB");
dob.addEventListener("change", doDateOfBirth);
function doDateOfBirth() {
  let date = dob.value.slice(0, 4);
  if (date < 2022 || date > 2022) {
    alert(" Please Enter Date of Birth 01-01-2022 to 31-12-2022");
    dob.value = "";
  }
}
// min="2022-01-01"
// max="2023-01-01"
