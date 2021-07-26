function apiCall() {
    var searchInput = document.getElementById("searchMovie");

    // get movie
    searchInput.onkeydown = function () {
        var searchData = document.getElementById("searchTitleInput").value;

        if (searchData.length) {
            while (document.getElementsByClassName('autoComplete')[0]) {
                document.getElementsByClassName('autoComplete')[0].remove();
            }

            var request = new XMLHttpRequest();
            request.open('GET', `http://localhost:3001/api/input/${seawrchData}`, true);
            request.onload = function () {
                // Begin accessing JSON data here
                let data = JSON.parse(this.response);

                let wrapper = document.createElement('div');
                wrapper.className = "autoComplete";
                app.appendChild(wrapper);
                let results = data;
                if (request.status >= 200 && request.status < 400) {
                    console.log(data);
                    Object.keys(data.Search).map(function (key, index) {
                        console.log(data.Search[index].Title);

                        const searchResultsContainer = document.createElement('div');
                        searchResultsContainer.setAttribute('class', 'row');

                        const h1 = document.createElement('h1');
                        h1.textContent = data.Search[index].Title;
                        wrapper.appendChild(searchResultsContainer);
                        searchResultsContainer.appendChild(h1);
                        console.log(searchResultsContainer);
                    });
                } else {
                    console.log('error');
                }
            };
            request.send();
        }
    }
}

document.getElementById('searchTitleInput').addEventListener('keydown', apiCall);