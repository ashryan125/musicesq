async function deleteUser(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  //   function confirmDialog(msg) {
  //     return new Promise(function (resolve, reject) {
  //       let confirmed = window.confirm(msg);

  //       return confirmed ? resolve(true) : reject(false);
  //     });
  //   }

  //   confirmDialog("Are you sure you want to delete your account?")
  //     .then(() => doYourDeleteAction(task.id))
  //     .catch((err) => alert("Unable to delete!"));

  const response = await fetch(`/api/users/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/homepage/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".delete-user-btn")
  .addEventListener("click", deleteUser);
