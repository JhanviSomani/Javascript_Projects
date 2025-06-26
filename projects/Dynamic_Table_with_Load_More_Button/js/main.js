companyDataTable = document.querySelector("#table-body");

function makeRow(user) {
  const newRow = document.createElement("tr");
  newRow.classList.add(
    "bg-white",
    "transition-all",
    "duration-500",
    "hover:bg-gray-50"
  );

  newRow.innerHTML = `<td class="">
                                  <div class="flex items-center py-5 px-5 ">
                                      <input type="checkbox" value="" class="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100">
                                  </div>
                              </td>
                              <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "> ${user.company}</td>
                              <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> ${user.user_id}</td>
                              <td class=" px-5 py-3">
                                  <div class=" flex items-center gap-3">
                                      <img src="${user.image_url}" alt="Floyd image" class="w-12 h-12 rounded-full object-cover ">
                                      <div class="data">
                                          <p class="font-normal text-sm text-gray-900">${user.name}</p>
                                          <p class="font-normal text-xs leading-5 text-gray-400"> ${user.email} </p>
                                      </div>
                                  </div>
                              </td>
                              <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> ${user.type}</td>
                              <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> ${user.industry_type}</td>
                              <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> ${user.join_date}</td>
                              <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> ${user.budget}</td>
                              <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 max-w-[100px] text-ellipsis overflow-hidden">${user.country} </td>
                              <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                  <div class="py-1.5 px-2.5 bg-emerald-50 rounded-full flex justify-center w-20 items-center gap-1">
                                      <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <circle cx="2.5" cy="3" r="2.5" fill="#059669"></circle>
                                      </svg>
                                      <span class="font-medium text-xs text-emerald-600 ">${user.status}</span>
                                  </div>
                              </td>
                              <td class="flex p-5 items-center gap-0.5">
                                  <button class="p-2  rounded-full bg-white group transition-all duration-500 hover:bg-indigo-600 flex item-center">
                                    <i class="bi bi-pencil-square cursor-pointer"></i>
                                  </button>
                                  <button class="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-red-600 flex item-center">
                                    <i class="bi bi-trash-fill"></i>
                                  </button>
                                  <button class="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-black flex item-center">
                                      <i class="bi bi-three-dots-vertical"></i>
                                  </button>
                              </td>`;

  return newRow;
}

let userData;
let dataAmount = 10;
function getData() {
  // fetch('js-table.json')
  fetch(
    "https://raw.githubusercontent.com/Jaydeep-Ramanuj/6-March-2-00_Batch/refs/heads/main/JavaScript/js-table.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      userData = data;

      userData.slice(0, dataAmount).forEach((user) => {
        companyDataTable.append(makeRow(user));
      });
    });
}

getData();

document.querySelector(".load-more-btn").addEventListener("click", () => {
  let currentList = userData.slice(dataAmount, dataAmount + 10);
  dataAmount += 10;
  companyDataTable.replaceChildren();

  currentList.forEach((user) => {
    companyDataTable.append(makeRow(user));
  });
});
