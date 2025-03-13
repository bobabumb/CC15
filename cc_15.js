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
resolveButton.addEventListener("click", function ());
}
// task 2 adding risk items dynamically
addRiskItem(riskName, riskLevel, department);
document.getElementById("riskForm").reset();