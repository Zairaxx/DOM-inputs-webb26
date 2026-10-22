let carList = document.querySelector("#car-list");

let checkboxes = document.querySelectorAll("[type=checkbox]")

let cars = [{
    brand: "Volvo",
    year: 2025,
    color: "Blue"
}, {
    brand: "Ferrari",
    year: 1994,
    color: "Black"
}, {
    brand: "Audi",
    year: 2024,
    color: "Silver"
}]

//Rendera bilar

let renderCars = (arr) => {

    carList.innerHTML = "";

    arr.forEach(car => {
        let carItem = document.createElement("li");
        carItem.classList.add("car-item")
        carItem.innerHTML = `
    <p><strong>Modell:</strong>${car.brand}</p>
    <p><strong>Årsmodell:</strong>${car.year}</p>
    <p><strong>Färg:</strong>${car.color}</p>
    `
        carList.append(carItem);
    });
}

let filterCars = () => {
    //Hitta icheckade färger
    let chosenColors = [];

    let checkedBoxes = document.querySelectorAll("[type=checkbox]:checked")
    checkedBoxes.forEach(box => chosenColors.push(box.value))

    //Filtrera baserat på om de finns i chosenColors

    let filteredCars = cars.filter(car => chosenColors.includes(car.color))
    renderCars(filteredCars);
}

renderCars(cars);

checkboxes.forEach(box => box.addEventListener("change", filterCars))

