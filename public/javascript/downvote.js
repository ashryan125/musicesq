async function downvoteClickHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
  
    const response = await fetch('/api/posts/upvote', {
      method: 'PUT',
      body: JSON.stringify({
        post_id: id,
        downvote: 1
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      document.location.reload();
    } else {
      alert('You can only vote once!');
    }
  };
  
  document.querySelector('.downvote-btn').addEventListener('click', downvoteClickHandler);