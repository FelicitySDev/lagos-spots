const filterButtons = document.querySelectorAll("#filters button");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    console.log(`Filtering by: ${category}`);
    // TODO: filter the rendered spots list by category
  });
});
