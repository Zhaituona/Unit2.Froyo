// This function will be called when the window is loaded
window.onload = function() {
    // Prompt the user to enter froyo flavors separated by commas
    const userInputFlavors = prompt("Enter your froyo fruit flavors, separated by commas (e.g., vanilla, starwberry, coffee):");
    if (userInputFlavors) {
        if(containsNumbers(userInputFlavors)){
            console.error("You can only input flavours, not numbers")
        }else{
        const flavorCounts = tallyFlavors(userInputFlavors);
        console.table(flavorCounts);
        }
    }
};

// handling for if user input the number instand of flavor 
function containsNumbers(input) {
    return /\d/.test(input); // Regular expression to test for digits
}

// Function to tally the counts of each froyo flavor
function tallyFlavors(input) {
    // Split the input string by commas and trim whitespace from each flavor
    const flavors = input.split(',').map(flavor => flavor.trim());
    const flavorCount = {};
    
    // Loop through each flavor and count the occurrences going through loop coff
    flavors.forEach(flavor => {
        // If the flavor exists in the object, increment its count, otherwise set it to 1
        flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
    });

    return flavorCount;
}