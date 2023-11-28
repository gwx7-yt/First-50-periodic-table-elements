if (!window.periodicTableInitialized) {
  const elements = [
    "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon",
    "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium"
  ];

  let periodicTable = document.getElementById("periodicTable");

  elements.forEach((element, index) => {
    const elementDiv = document.createElement("div");
    elementDiv.classList.add("element");
    elementDiv.textContent = element;
    elementDiv.addEventListener("click", () => {
      showElementInfo(elementsData[index]);
    });
    periodicTable.appendChild(elementDiv);
  });
window.periodicTableInitialized = true; // 
}
const elementsData = [
  { name: "Hydrogen", atomicNumber: 1, mass: 1.008, electron: 1, proton: 1, neutron: 0, symbol: "H" },
  { name: "Helium", atomicNumber: 2, mass: 4.0026, electron: 2, proton: 2, neutron: 2, symbol: "He" },
  { name: "Lithium", atomicNumber: 3, mass: 6.94, electron: 3, proton: 3, neutron: 4, symbol: "Li" },
  { name: "Beryllium", atomicNumber: 4, mass: 9.0122, electron: 4, proton: 4, neutron: 5, symbol: "Be" },
  { name: "Boron", atomicNumber: 5, mass: 10.81, electron: 5, proton: 5, neutron: 6, symbol: "B" },
  { name: "Carbon", atomicNumber: 6, mass: 12.011, electron: 6, proton: 6, neutron: 6, symbol: "C" },
  { name: "Nitrogen", atomicNumber: 7, mass: 14.007, electron: 7, proton: 7, neutron: 7, symbol: "N" },
  { name: "Oxygen", atomicNumber: 8, mass: 15.999, electron: 8, proton: 8, neutron: 8, symbol: "O" },
  { name: "Fluorine", atomicNumber: 9, mass: 18.998, electron: 9, proton: 9, neutron: 10, symbol: "F" },
  { name: "Neon", atomicNumber: 10, mass: 20.18, electron: 10, proton: 10, neutron: 10, symbol: "Ne"},
  { name: "Sodium", atomicNumber: 11, mass: 22.99, electron: 11, proton: 11, neutron: 12, symbol: "Na" },
  { name: "Magnesium", atomicNumber: 12, mass: 24.305, electron: 12, proton: 12, neutron: 12, symbol: "Mg" },
  { name: "Aluminium", atomicNumber: 13, mass: 26.982, electron: 13, proton: 13, neutron: 14, symbol: "Al" },
  { name: "Silicon", atomicNumber: 14, mass: 28.085, electron: 14, proton: 14, neutron: 14, symbol: "Si" },
  { name: "Phosphorus", atomicNumber: 15, mass: 30.974, electron: 15, proton: 15, neutron: 16, symbol: "P" },
  { name: "Sulfur", atomicNumber: 16, mass: 32.06, electron: 16, proton: 16, neutron: 16, symbol: "S" },
  { name: "Chlorine", atomicNumber: 17, mass: 35.45, electron: 17, proton: 17, neutron: 18, symbol: "Cl" },
  { name: "Argon", atomicNumber: 18, mass: 39.95, electron: 18, proton: 18, neutron: 22, symbol: "Ar" },
  { name: "Potassium", atomicNumber: 19, mass: 39.10, electron: 19, proton: 19, neutron: 20, symbol: "K" },
  { name: "Calcium", atomicNumber: 20, mass: 40.08, electron: 20, proton: 20, neutron: 20, symbol: "Ca" }
];
const elementInfo = document.getElementById("elementInfo");
elementsData.forEach((elementData, index) => {
  const elementDiv = document.createElement("div");
  elementDiv.classList.add("element");
  elementDiv.textContent = elementData.name;
  elementDiv.setAttribute("data-info", JSON.stringify(elementData));
  elementDiv.addEventListener("click", () => {
    showElementInfo(elementData);
  });
});
function showElementInfo(elementData) {
  const { name, atomicNumber, mass, electron, proton, neutron, symbol } = elementData;
  const infoText = `Element: ${name}<br>Atomic Number: ${atomicNumber}<br>Mass: ${mass}<br>Electron: ${electron}<br>Proton: ${proton}<br>Neutron: ${neutron}<br>Symbol: ${symbol} `;
  elementInfo.innerHTML = infoText;
  elementInfo.style.display = "block";
setTimeout(() => {
    elementInfo.style.display = "none";
}, 6000);
}