document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.getElementById('main-content');
  let selectedElement = null;

  // Highlight element on hover
  mainContent.addEventListener('mouseover', (event) => {
    const target = event.target;
    if (target !== mainContent && target !== selectedElement) {
      target.classList.add('highlight');
    }
  });

  mainContent.addEventListener('mouseout', (event) => {
    const target = event.target;
    if (target !== mainContent && target !== selectedElement) {
      target.classList.remove('highlight');
    }
  });

  // Select element on click
  mainContent.addEventListener('click', (event) => {
    event.stopPropagation();
    const target = event.target;

    // Remove highlight from the previously selected element
    if (selectedElement) {
      selectedElement.classList.remove('highlight');

      