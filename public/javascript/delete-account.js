async function deleteUser(event) {
  event.preventDefault();

  if (
    window.confirm(
      "You sure? Once deleted all posts/activity will also be deleted"
    )
  ) {
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];

    // const id = req.session.user_id;

    console.log(id);

    // const response = await fetch(`/api/users/${id}`, {
    //   method: "DELETE",
    // });

    if (response.ok) {
      document.location.replace("/homepage/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".delete-user-btn")
  .addEventListener("click", deleteUser);
