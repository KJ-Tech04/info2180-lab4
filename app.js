document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('search-form');
  const input = document.getElementById('search');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const query = encodeURIComponent(input.value.trim());

    fetch(`superheroes.php?query=${query}`)
      .then(response => response.text())
      .then(data => {
        resultDiv.innerHTML = data;
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = '<p>Something went wrong. Please try again.</p>';
      });
  });
});
