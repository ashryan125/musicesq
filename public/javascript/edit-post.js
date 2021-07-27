async function editFormHandler(event) {
  event.preventDefault();

  const song_title = document
    .querySelector('input[name="post-title"]')
    .value;
  
  const rating = document
    .querySelector('input[name="rating"]:checked')
    .value;

  const review = document.querySelector('input[name="review"]').value;

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      song_title,
      review,
      rating,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
