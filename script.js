// Fetch photos from an API or use local data
const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

// Fetch data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const photoContainer = document.getElementById('photo-container');

    // Loop through the data and create photo cards
    data.forEach(photo => {
      const photoCard = document.createElement('div');
      photoCard.classList.add('photo-card');

      const photoImg = document.createElement('img');
      photoImg.src = photo.thumbnailUrl;
      photoImg.alt = photo.title;

      const photoTitle = document.createElement('h3');
      photoTitle.textContent = photo.title;

      photoCard.appendChild(photoImg);
      photoCard.appendChild(photoTitle);
      photoContainer.appendChild(photoCard);
    });
  })
  .catch(error => console.error(error));

// Search functionality
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();

  // Filter photo cards based on search term
  const photoCards = document.querySelectorAll('.photo-card');
  photoCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});