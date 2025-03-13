// task 1 base structure
const riskDashboard = document.getElementById("riskDashboard");
console.log("risk dashboard loaded");

function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.className = "riskCard";

    updateRiskCardStyle(riskCard, riskLevel);
    
    riskCard.innerHTML = `
    <p><strong>risk name:</strong>${riskName}</p>
    <p><strong>risk level:</strong><span class="riskLevelText">${riskLevel}</span></p>
    <p><strong>department:</strong>${department}</p>
    <button class="resolveButton">resolve</button>
    `;
// task 3 removing risk items
const resolveButton = riskCard.querySelector(".resolveButton");
resolveButton.addEventListener("click", function (event) {
// task 6 handling event propagation
     event.stopPropagation();
     riskDashboard.removeChild(riskCard);
  });

  riskCard.addEventListener("click", function (event) {
     event.stopPropagation();
  });

  riskDashboard.appendChild(riskCard);
}
// task 5 implementing bulk updates
function increaseRiskLevels () {
    const riskCards = document.querySelectorAll(".riskCard");
    riskCards.forEach((riskCard) => {
        const riskLevelText = riskCard.querySelector(".riskLevelText");
        let currentLevel = riskLevelText.textContent.trim();

        switch (currentLevel.toLowerCase()) {
            case "low":
                riskLevelText.textContent = "medium";
                updateRiskCardStyle(riskCard, "medium");
                break;
            case "medium":
                riskLevelText.textContent = "high";
                updateRiskCardStyle(riskCard, "high");
                break;
            case "high":
                default: // does nothing
        }
    });
}
// task 4 categorizing risks by level
function updateRiskCardStyle(riskCard, riskLevel) {
    switch (riskLevel.toLowerCase()) {
        case "low":
            riskCard.style.backgroundColor = "green";
            break;
        case "medium":
            riskCard.style.backgroundColor = "yellow";
            break;
        case "high":
            riskCard.style.backgroundColor = "red";
            break;
        default:
            riskCard.style.backgroundColor = "white";
    }
}
document.getElementById("riskForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("department").value;

// task 2 adding risk items dynamically
addRiskItem(riskName, riskLevel, department);
document.getElementById("riskForm").reset();
});