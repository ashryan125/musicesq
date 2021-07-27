let searchInput = document.getElementById("searchTitleInput");
let artistNameInput = document.getElementById("song-artist");

async function apiCall(event) {
    event.preventDefault;


    // get song
    searchInput.onkeydown = function () {
        var searchData = document.getElementById("searchTitleInput").value;
        console.log(searchData);

        if (searchData.length) {
            // while (document.getElementsByClassName('autoComplete')[0]) {
            //     document.getElementsByClassName('autoComplete')[0].remove();
            // }

            var request = new XMLHttpRequest();
            request.open('GET', `http://localhost:3001/api/input/${searchData}`, true);
            //console.log(searchData)
            request.onload = function () {
                // Begin accessing JSON data here
                let data = this.response;

                let results = data;
                if (request.status >= 200 && request.status < 400) {
                    document.querySelectorAll("#autocomplete-list").forEach(el => el.remove());
                    document.querySelectorAll(".inputItem").forEach(el => el.remove());

                    let listParent = document.getElementById('autocomplete')
                    console.log(results);

                    wrapper = document.createElement("DIV");
                    wrapper.setAttribute("id", "autocomplete-list");
                    listParent.parentNode.appendChild(wrapper);

                    let parData = JSON.parse(results);
                    console.log(parData)

                    parData.forEach(element => {

                        console.log(element.track.length);
                        let b = document.createElement("DIV");
                        b.setAttribute("class", "inputItem");
                        /*make the matching letters bold:*/
                        b.innerHTML = "<strong>" + element.track.substr(0, element.track.length) + "   -    " + element.artistName + "</strong>";
                        b.innerHTML += element.track.substr(element.track.length);
                        b.innerHTML += "<input type='hidden' value='" + element.track + "'>";
                        /*execute a function when someone clicks on the item value (DIV element):*/

                        wrapper.appendChild(b);
                        b.addEventListener("click", function (e) {
                            /*insert the value for the autocomplete text field:*/
                            searchInput.value = this.getElementsByTagName("input")[0].value;
                            /*close the list of autocompleted values,
                            (or any other open lists of autocompleted values:*/
                            console.log(element.artistName)
                            artistNameInput.value = element.artistName;
                            closeAllLists();
                        });

                    });



                } else {
                    console.log('error');
                }
            };
            request.send();
        }
    }
}

function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
}

function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
    }
}

//closes the lists
function closeAllLists(elmnt) {

    document.querySelectorAll("#autocomplete-list").forEach(el => el.remove());
    document.querySelectorAll(".inputItem").forEach(el => el.remove());
}

/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});


document.querySelector('#searchTitleInput').addEventListener('keydown', apiCall);