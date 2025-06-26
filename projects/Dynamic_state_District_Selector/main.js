let primarySelect = document.querySelector("#primary");
let secondarySelect = document.querySelector("#secondary");

//   let data = [
//     { key: 'one', values: [1, 2, 3, 4, 5] },
//     { key: 'two', values: [11, 22, 33, 44, 55] },
//     { key: 'three', values: [111, 222, 333, 444, 555] },
//     { key: 'four', values: [1111, 2222, 3333, 4444, 5555] },
//     { key: 'five', values: [11111, 22222, 33333, 44444, 55555] },
//   ];

let stateData;

// fetch('states.json')
fetch(
  "https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/refs/heads/master/states-and-districts.json"
)
  .then((response) => response.json())
  .then((data) => {
    stateData = data;

    //   stateData.states.forEach((st) => {
    //     let newOption = document.createElement('option');
    //     newOption.innerText = st.state;
    //     primarySelect.append(newOption);
    //   });

    addRows(stateData.states, primarySelect, "state");

    //   addRows(stateData.states, primarySelect);
    //   stateData.states[0].districts.forEach((val) => {
    //     let newOption = document.createElement('option');
    //     newOption.innerText = val;
    //     secondarySelect.append(newOption);
    //   });

    addRows(stateData.states[0].districts, secondarySelect);
  });

primarySelect.addEventListener("change", () => {
  stateData.states.forEach((st) => {
    if (st.state == primarySelect.value) {
      secondarySelect.replaceChildren();
      // st.districts.forEach((dist) => {
      //   let newOption = document.createElement('option');
      //   newOption.innerText = dist;
      //   secondarySelect.append(newOption);
      // });

      addRows(st.districts, secondarySelect);
    }
  });
});

function addRows(list, select, path = "") {
  list.forEach((data) => {
    let newOption = document.createElement("option");
    newOption.innerText = path == "" ? data : data[`${path}`];
    select.append(newOption);
  });
}
