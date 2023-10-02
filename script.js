function toggleDiv(element) {
    const content = element.querySelector("p");
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }
