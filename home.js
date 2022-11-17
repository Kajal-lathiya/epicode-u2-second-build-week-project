//variables
const topsidecards = document.querySelector("#topsidecards");
//--------------------------------------------//
//-------------- SONGS -----------------------//
async function getAlbums() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a384224cb5msh269936e2552c740p19046ejsnc63fad635c19",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=vlospa`,
    options
  );

  const listOfSearch = await response.json();
  console.log(listOfSearch);
  return listOfSearch; //                                                       listOfSearch
}
window.onload = async () => {
  const listOfSearch = await getAlbums();
  console.log(listOfSearch);
  fillPageAlbums(listOfSearch);
};

const fillPageAlbums = function (listOfSearch) {
  topsidecards.innerHTML = "";
  for (i = 0; i < 10; i++) {
    topsidecards.innerHTML += `<div class="col" id="top-buttons">
  <div class="background-card mb-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${listOfSearch.data[i].album.cover_medium}"
          class="img-fluid rounded-start aspect-ratio-one-to-one" style="width: 100%"
          alt="..."
        />
      </div>
      <div class="col-md-8 d-flex align-items-center">
        <div class="card-body d-flex align-items-center justify-content-between">
          <p class="card-title text-truncate">${listOfSearch.data[i].album.title}</p>
          <i class="fa-solid fa-circle-play fa-2xl"></i>
        </div>
      </div>
    </div>
  </div>
</div>`;
  }
};
//-------------- Playlists/Artists -----------------------//
