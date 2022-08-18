const attributeValue = document.querySelector("#validation-input");

attributeValue.addEventListener("blur", onBlur);

function onBlur(event) {
  const attributeLength = attributeValue.dataset.length;
  const attributeText = event.target.value;
  console.log(attributeText);

  attributeValue.classList.remove("valid", "invalid");
  if (attributeText.length === Number(attributeLength)) {
    attributeValue.classList.add("valid");
  } else {
    attributeValue.classList.add("invalid");
    console.log(Number(attributeValue.dataset.length));
  }
}
