let userData;

function getData() {
  fetch("https://randomuser.me/api/?results=25")
    .then((response) => response.json())
    .then((data) => {
      userData = data.results;
      console.log(userData);

      userData.forEach((user) => {
        let newCard = makeCard(user);

        appendCard(newCard);
      });
    });
}

function makeCard(user) {
  let newCard = document.createElement("div");
  let cardCSS =
    "w-fit max-w-[250px] bg-red-300 mx-4 mt-16 bg-white rounded-lg text-gray-900 ";

  newCard.className = cardCSS;
  newCard.innerHTML = `
      <div class="rounded-t-lg h-32 overflow-hidden">
        <img
          class="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div
        class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden"
      >
        <img
          class="object-cover object-center h-32"
          src="${user.picture.large}"
          alt="Woman looking front"
        />
      </div>
      <div class="text-center mt-2">
        <h2 class="font-semibold">${
          user.name.title + user.name.first + user.name.last
        }</h2>
        <p class="text-gray-500">Freelance Web Designer</p>
      </div>
      <h3 class="text-center text-gray-500">${user.email}</h3>
      <h4 class="text-center text-gray-500">${
        user.location.city +
        "," +
        user.location.state +
        "," +
        user.location.country
      }</h4>

      <div class="p-4 border-t mx-8 mt-2">
        <button
          class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-4 py-2 "
        >
          Follow
          </button>
      </div>
    </div>`;
  console.log(newCard);

  return newCard;
}

function appendCard(Card) {
  document.querySelector(".cards").append(Card);
}

getData();
