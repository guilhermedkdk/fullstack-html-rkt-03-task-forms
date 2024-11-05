const styleToggle = document.querySelector('.switch input[type="checkbox"]');
const switchText = document.querySelector(".switch-text");

const fileInput = document.querySelector("#file-upload");
const fileNameDisplay = document.querySelector("#file-name");

const checkboxContainers = document.querySelectorAll(".checkbox-container");

switchText.textContent = "Escuro";

styleToggle.addEventListener("change", () => {
  if (styleToggle.checked) {
    switchText.textContent = "Claro";
  } else {
    switchText.textContent = "Escuro";
  }
});

const truncateFileName = (fileName, maxLength = 20) => {
  if (fileName.length <= maxLength) return fileName;

  const extension = fileName.split(".").pop();
  const nameWithoutExt = fileName.slice(0, fileName.lastIndexOf("."));

  const truncatedLength = maxLength - 3 - (extension.length + 1);

  return `${nameWithoutExt.slice(0, truncatedLength)}...${extension}`;
};

fileInput.addEventListener("change", () => {
  if (fileInput.files && fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;
    fileNameDisplay.textContent = truncateFileName(fileName);
  } else {
    fileNameDisplay.textContent = "Nenhum arquivo selecionado";
  }
});

// biome-ignore lint/complexity/noForEach: <explanation>
checkboxContainers.forEach((container) => {
  const checkbox = container.querySelector("input");
  const img = container.querySelector(".checkbox-image img");
  const imgBorder = container.querySelector(".checkbox-image");

  img.style.display = "none";

  checkbox.addEventListener("change", () => {
    img.style.display = checkbox.checked ? "flex" : "none";
    imgBorder.style.border = checkbox.checked
      ? "1.5px solid var(--brand-light)"
      : "1.5px solid var(--input-stroke)";
  });
});
