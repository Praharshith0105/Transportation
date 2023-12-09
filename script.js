function submitReview() {
    const rating = document.getElementById('rating').value;
    const suggestions = document.getElementById('suggestions').value;
  
    // Validate the rating (assuming it's between 1 and 5)
    if (rating >= 1 && rating <= 5) {
      // Display the review in the reviews container
      const reviewsContainer = document.getElementById('reviews-container');
      const reviewElement = document.createElement('div');
      reviewElement.className = 'review';
      reviewElement.innerHTML = `
        <p><strong>Rating:</strong> ${rating}</p>
        <p><strong>Suggestions:</strong> ${suggestions}</p>
      `;
      reviewsContainer.appendChild(reviewElement);
  
      // Clear the form fields after submission
      document.getElementById('rating').value = '';
      document.getElementById('suggestions').value = '';
  
      alert('Review submitted successfully!');
      window.location.href = 'thankyou.html';
    } else {
      alert('Please enter a valid rating (between 1 and 5).');
    }
  }