// Function to check discount eligibility
function checkDiscountEligibility() {
    const age = parseInt(document.getElementById('age').value, 10);
    const isPremiumMember = document.getElementById('membership').checked;
    const resultMessage = document.getElementById('resultMessage');

    if (age > 60 || isPremiumMember) {
        // resultMessage.textContent = "You are eligible for a discount!";
        resultMessage.className = "eligible";
        console.log("eligible");
    } else {
        // resultMessage.textContent = "You are not eligible for a discount.";
        resultMessage.className = "not-eligible";
        console.log("not-eligible");
    }
}

// Attach event listener to the button
 document.getElementById('checkEligibilityButton').addEventListener('click', checkDiscountEligibility);