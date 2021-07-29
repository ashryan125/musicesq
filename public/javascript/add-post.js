async function newFormHandler(event) {
    event.preventDefault();
  

    const song_title = document.querySelector('input[name="songTitle"]').value;
    
    const song_artist = document.querySelector('input[name="song-artist"]').value;
    const song_url = document.querySelector('input[name="song-url"]').value;

    const rating = document.querySelector('input[name="rating"]:checked').value;

    const review = document.querySelector('input[name="review"]').value;
    console.log(song_title)
    console.log(song_artist)
    console.log(song_url)
    console.log(rating)
    console.log(review)
    // const newRating = parseInt(rating);
   

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        song_title,
        song_artist,
        song_url,
        review,
        rating
      }), 
      headers: {
        'Content-Type': 'application/json'
      }
      
    });
    if (response.ok) {
      console.log("it worked")
      document.location.replace('/dashboard/your-posts');
    } else {
        console.log(songTitle, "\n", songArtist, "\n", review, "\n", rating),
      alert(response.statusText);
    }
  }
  

  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);