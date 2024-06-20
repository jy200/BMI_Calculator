var checkbox = document.getElementById("switchMeasure");
const measure1 = document.querySelector(".defaultMeasure");
const measure2 = document.querySelector(".altMeasure");
const submit = document.getElementById("submitBox");
const BMI_info = document.querySelector(".BMI-container");
const BMI_num = document.getElementById("BMI-number");

// Prevent typing letters into number inputs
document.querySelectorAll("input").forEach((text) => {
  text.addEventListener("keypress", function (e) {
    var allowedChars = "0123456789";
    function contains(stringValue, charValue) {
      return stringValue.indexOf(charValue) > -1;
    }
    var invalidKey =
      (e.key.length === 1 && !contains(allowedChars, e.key)) ||
      (e.key === "." && contains(e.target.value, "."));
    invalidKey && e.preventDefault();
  });
});

checkbox.addEventListener("change", () => {
  validateSwitchMeasure();
});

submit.addEventListener("click", () => {
  outputBMI();
});

function validateSwitchMeasure() {
  if (checkbox.checked) {
    measure1.style.display = "none";
    measure2.style.display = "block";
  } else {
    measure2.style.display = "none";
    measure1.style.display = "block";
  }
}

function outputBMI() {
  if (checkbox.checked) {
    const weight = document.getElementById('altWeight').value;
    const height = document.getElementById('altHeight').value;
    console.log(weight, height);
    if (!weight || !height) {
      alert("Please enter your measurements");
      return;
    }
    let result = parseInt(weight) / (parseInt(height) / 100) ** 2;
    BMI_num.textContent = result.toFixed(1);
    BMI_info.style.display = "flex";
    //weight (kg) / [height (m)]^2
  } else {
    const feet = document.getElementById('defHeight-1').value;
    const inches = document.getElementById('defHeight-2').value;
    const weight = document.getElementById('defWeight').value;
    if (!weight || !feet || !inches) {
      alert("Please enter your measurements");
      return;
    }
    let result =
      (parseInt(weight) / (parseInt(feet) * 12 + parseInt(inches)) ** 2) * 703;
    BMI_num.textContent = result.toFixed(1);
    BMI_info.style.display = "flex";
    //weight (lb) / [height (in)]^2 x 703
  }
}
