const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result, searchTerm))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    resultArtist.innerHTML = ''; // Limpa os resultados antigos

    if (result.length === 0) {
        resultArtist.classList.remove('active'); // Esconde se não houver resultados
        return;
    }

    result.forEach(element => {
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

    resultArtist.classList.add('active'); // Exibe os resultados apenas se houver artistas
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        resultArtist.innerHTML = ''; // Limpa os resultados ao apagar a pesquisa
        return;
    }

    requestApi(searchTerm);
});
