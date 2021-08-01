//setting initial variables to pass content into
let searchInput = document.getElementById("searchTitleInput");
let artistNameInput = document.getElementById("song-artist");
let artistUrlInput = document.getElementById("song-url");

// master function for autofill input search field
async function apiCall(event) {
    event.preventDefault;


    // get song
    searchInput.onkeydown = function () {
        var searchData = document.getElementById("searchTitleInput").value;
        console.log(searchData);

        if (searchData.length) {

            var request = new XMLHttpRequest();
            request.open('GET', `/api/input/${searchData}`, true);
            request.onload = function () {
                // Begin accessing JSON data here
                let data = this.response;

                let results = data;

                //status check
                if (request.status >= 200 && request.status < 400) {

                    //clear previously rendered content
                    document.querySelectorAll("#autocomplete-list").forEach(el => el.remove());
                    document.querySelectorAll(".inputItem").forEach(el => el.remove());

                    //set content to be generated
                    let listParent = document.getElementById('autocomplete')
                    wrapper = document.createElement("DIV");
                    wrapper.setAttribute("id", "autocomplete-list");
                    listParent.append(wrapper);

                    //parse the data for the each statement
                    let parData = JSON.parse(results);
                    //console.log(parData)

                    //generates content for each array item
                    parData.forEach(element => {
                        console.log(element.track.length);

                        //set elements to generate
                        let b = document.createElement("DIV");
                        b.setAttribute("class", "inputItem");

                        //make the matching letters bold:
                        b.innerHTML = "<strong>" + element.track.substr(0, element.track.length) + "   -    " + element.artistName + "</strong>";
                        b.innerHTML += element.track.substr(element.track.length);
                        b.innerHTML += "<input type='hidden' value='" + element.track + "'>";
                        wrapper.appendChild(b);

                        //execute a function when someone clicks on the item value (DIV element):
                        b.addEventListener("click", function (e) {
                            //insert the value for the autocomplete text field:
                            searchInput.value = this.getElementsByTagName("input")[0].value;
                            //*close the list of autocompleted values,

                            //console.log(element.artistName)
                            //console.log(element.extUrl.spotify)

                            //sets the value of the corresponding inputs
                            artistNameInput.value = element.artistName;
                            artistUrlInput.value = element.extUrl.spotify;
                            closeAllLists();
                        });

                    });

                } else {
                    //error handling
                    console.log('error');
                    request.abort();
                    return;
                }
            };
            request.send();
        }
    }
}

// function addActive(x) {
//     //a function to classify an item as "active":
//     if (!x) return false;
//     //start by removing the "active" class on all items:
//     removeActive(x);
//     if (currentFocus >= x.length) currentFocus = 0;
//     if (currentFocus < 0) currentFocus = (x.length - 1);
//     //add class "autocomplete-active":
//     x[currentFocus].classList.add("autocomplete-active");
// }

// function removeActive(x) {
//     //a function to remove the "active" class from all autocomplete items:
//     for (var i = 0; i < x.length; i++) {
//         x[i].classList.remove("autocomplete-active");
//     }
// }

//closes the lists
function closeAllLists(elmnt) {

    document.querySelectorAll("#autocomplete-list").forEach(el => el.remove());
    document.querySelectorAll(".inputItem").forEach(el => el.remove());
}

//execute a function when someone click away to close the list
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});

//execute a function when a key is pressed
document.querySelector('#searchTitleInput').addEventListener('keydown', apiCall);


