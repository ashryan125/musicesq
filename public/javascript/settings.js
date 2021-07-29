//logout
async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }


// delete account
async function deleteUser(event) {
    event.preventDefault();

    if (
        window.confirm(
            "You sure? Once deleted all posts/activity will also be deleted"
        )
    ) {

        let arr = window.location.toString().split("/")
        let ind = arr.length -1
        let id = arr[ind]

        console.log(id);

        const response = await fetch(`/api/users/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert(response.statusText);
        }
    }
}


//event listeners
document.querySelector(".delete-user-btn").addEventListener("click", deleteUser);
document.querySelector('.delete-user-btn').addEventListener('click', logout);