async function newFormHandler(event) {
    event.preventDefault();
  

    const song_title = document.querySelector('input[name="song-title"]').value;
    const song_artist = document.querySelector('input[name="song-artist"]').value;

    const rating = document.querySelector('input[name="rating"]:checked').value;

    const review = document.querySelector('input[name="review"]').value;
    // const newRating = parseInt(rating);
   

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        song_title,
        song_artist,
        review,
        rating
      }), 
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
        console.log(songTitle, "\n", songArtist, "\n", review, "\n", rating),
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);