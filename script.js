function calculateEstimate() {
    // Get the dropdown element and the selected value
    const service = document.getElementById("serviceSelect").value;
    const resultText = document.getElementById("estimateResult");
    
    let estimate = "";

    // Determine cost calculation based on choice
    switch(service) {
        case "fan":
            estimate = "Estimated Baseline: ₦3,000 - ₦7,000 (Depends on winding/capacitor replacement)";
            break;
        case "audio":
            estimate = "Estimated Baseline: ₦8,000 - ₦20,000 (Depends on component availability)";
            break;
        case "tv":
            estimate = "Estimated Baseline: ₦15,000+ (Requires initial panel/board diagnostic)";
            break;
        default:
            estimate = "Please select a valid service option from the menu.";
    }

    // Display the result on the webpage
    resultText.innerHTML = estimate;
}
