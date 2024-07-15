if (!window.periodicTableInitialized) {
  const elements = [
    "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon",
    "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium",
    "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc",
    "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium",
    "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin"
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
window.periodicTableInitialized = true; 
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
  { name: "Potassium", atomicNumber: 19, mass: 39.1, electron: 19, proton: 19, neutron: 20, symbol: "K" },
  { name: "Calcium", atomicNumber: 20, mass: 40.08, electron: 20, proton: 20, neutron: 20, symbol: "Ca" },
  { name: "Scandium", atomicNumber: 21, mass: 44.956, electron: 21, proton: 21, neutron: 24, symbol: "Sc" },
  { name: "Titanium", atomicNumber: 22, mass: 47.867, electron: 22, proton: 22, neutron: 26, symbol: "Ti" },
  { name: "Vanadium", atomicNumber: 23, mass: 50.942, electron: 23, proton: 23, neutron: 28, symbol: "V" },
  { name: "Chromium", atomicNumber: 24, mass: 51.996, electron: 24, proton: 24, neutron: 28, symbol: "Cr" },
  { name: "Manganese", atomicNumber: 25, mass: 54.938, electron: 25, proton: 25, neutron: 30, symbol: "Mn" },
  { name: "Iron", atomicNumber: 26, mass: 55.845, electron: 26, proton: 26, neutron: 30, symbol: "Fe" },
  { name: "Cobalt", atomicNumber: 27, mass: 58.933, electron: 27, proton: 27, neutron: 32, symbol: "Co" },
  { name: "Nickel", atomicNumber: 28, mass: 58.693, electron: 28, proton: 28, neutron: 31, symbol: "Ni" },
  { name: "Copper", atomicNumber: 29, mass: 63.546, electron: 29, proton: 29, neutron: 35, symbol: "Cu" },
  { name: "Zinc", atomicNumber: 30, mass: 65.38, electron: 30, proton: 30, neutron: 35, symbol: "Zn" },
  { name: "Gallium", atomicNumber: 31, mass: 69.723, electron: 31, proton: 31, neutron: 39, symbol: "Ga" },
  { name: "Germanium", atomicNumber: 32, mass: 72.63, electron: 32, proton: 32, neutron: 41, symbol: "Ge" },
  { name: "Arsenic", atomicNumber: 33, mass: 74.922, electron: 33, proton: 33, neutron: 42, symbol: "As" },
  { name: "Selenium", atomicNumber: 34, mass: 78.971, electron: 34, proton: 34, neutron: 45, symbol: "Se" },
  { name: "Bromine", atomicNumber: 35, mass: 79.904, electron: 35, proton: 35, neutron: 45, symbol: "Br" },
  { name: "Krypton", atomicNumber: 36, mass: 83.798, electron: 36, proton: 36, neutron: 48, symbol: "Kr" },
  { name: "Rubidium", atomicNumber: 37, mass: 85.468, electron: 37, proton: 37, neutron: 48, symbol: "Rb" },
  { name: "Strontium", atomicNumber: 38, mass: 87.62, electron: 38, proton: 38, neutron: 50, symbol: "Sr" },
  { name: "Yttrium", atomicNumber: 39, mass: 88.906, electron: 39, proton: 39, neutron: 50, symbol: "Y" },
  { name: "Zirconium", atomicNumber: 40, mass: 91.224, electron: 40, proton: 40, neutron: 51, symbol: "Zr" },
  { name: "Niobium", atomicNumber: 41, mass: 92.906, electron: 41, proton: 41, neutron: 52, symbol: "Nb" },
  { name: "Molybdenum", atomicNumber: 42, mass: 95.95, electron: 42, proton: 42, neutron: 54, symbol: "Mo" },
  { name: "Technetium", atomicNumber: 43, mass: 98, electron: 43, proton: 43, neutron: 55, symbol: "Tc" },
  { name: "Ruthenium", atomicNumber: 44, mass: 101.07, electron: 44, proton: 44, neutron: 57, symbol: "Ru" },
  { name: "Rhodium", atomicNumber: 45, mass: 102.91, electron: 45, proton: 45, neutron: 58, symbol: "Rh" },
  { name: "Palladium", atomicNumber: 46, mass: 106.42, electron: 46, proton: 46, neutron: 60, symbol: "Pd" },
  { name: "Silver", atomicNumber: 47, mass: 107.87, electron: 47, proton: 47, neutron: 61, symbol: "Ag" },
  { name: "Cadmium", atomicNumber: 48, mass: 112.41, electron: 48, proton: 48, neutron: 64, symbol: "Cd" },
  { name: "Indium", atomicNumber: 49, mass: 114.82, electron: 49, proton: 49, neutron: 66, symbol: "In" },
  { name: "Tin", atomicNumber: 50, mass: 118.71, electron: 50, proton: 50, neutron: 69, symbol: "Sn" }
];

function showElementInfo(element) {
  const elementInfo = document.getElementById("elementInfo");
  elementInfo.innerHTML = `
    <h2>${element.name} (${element.symbol})</h2>
    <p>Atomic Number: ${element.atomicNumber}</p>
    <p>Atomic Mass: ${element.mass}</p>
    <p>Electrons: ${element.electron}</p>
    <p>Protons: ${element.proton}</p>
    <p>Neutrons: ${element.neutron}</p>
  `;
  elementInfo.style.display = "block";
   
            setTimeout(() => {
                elementInfo.style.display = "none";
            }, 4000); 
        }

document.addEventListener("click", function(event) {
  const elementInfo = document.getElementById("elementInfo");
  if (!event.target.closest(".element") && elementInfo.style.display === "block") {
    elementInfo.style.display = "none";
  }
});
