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
// FAQ Accordion Toggle Interaction
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        
        // Toggle active status for the clicked element
        faqItem.classList.toggle('active');
        
        // Close other open panels smoothly (Optional UX clean-up)
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
    });
});
