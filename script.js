const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result, searchTerm));
}

function displayResults(result, searchTerm) {
    resultPlaylist.classList.add('hidden');
    resultArtist.innerHTML = ''; 

    if (!searchTerm.trim()) {
        resultArtist.classList.remove('active'); 
        return;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();

    const filteredResults = result.filter(element => {
        const lowerName = element.name.toLowerCase();
        return lowerName.startsWith(lowerSearchTerm[0]) && lowerName.includes(lowerSearchTerm);
    });

    if (filteredResults.length === 0) {
        resultArtist.classList.remove('active'); 
        return;
    }

    filteredResults.forEach(element => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        artistCard.innerHTML = `
            <div class="card-img">
                <img class="artist-img" src="${element.urlImg}" alt="${element.name}" />
                <div class="play">
                    <span class="fa fa-solid fa-play"></span>
                </div>
            </div>
            <div class="card-text">
                <a title="${element.name}" class="vst" href=""></a>
                <span class="artist-name">${element.name}</span>
                <span class="artist-categorie">Artista</span>
            </div>
        `;

        resultArtist.appendChild(artistCard);
    });

    resultArtist.classList.add('active'); 
}

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase().trim(); 

    if (searchTerm === '') {
        resultArtist.classList.remove('active');
        resultArtist.innerHTML = ''; 
        return;
    }

    requestApi(searchTerm);
});
