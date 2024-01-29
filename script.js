const searchInput = document.querySelector("#search-input");

const resultArtists = document.querySelector(".main-content.result");

const resultPlayList = document.querySelector(".main-content.cards");

function requestApi(searchTerm){

    const url = `http://localhost:4000/artists?name_like=${searchTerm}`;
    fetch(url).then((response) => response.json()).then((result) => displayResult(result));
};

function displayResult(result){

    resultPlayList.classList.add("hidden");

    const artistName = document.querySelector(".card-item__title-result");
    const artistImage = document.querySelector(".card-item__image-result");

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
    
    resultArtists.classList.remove("hidden");
}

document.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();

    if(searchTerm === ""){

        resultPlayList.classList.remove("hidden");
        resultArtists.classList.add("hidden");
        return

    }

    requestApi(searchTerm);
});