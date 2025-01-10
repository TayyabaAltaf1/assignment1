function simulateFileReading() {
    // Get the file path from the input field
    var filePath = document.getElementById('filePath').value;

    try {
        // Check if the file path ends with .txt
        if (!filePath.endsWith('.txt')) {
            throw new Error("Invalid file type: The file path must end with .txt");
            
        }

        // Simulate reading the file (in a real scenario, you'd read the file here)
        document.getElementById('result').innerText =""; 
        console.log("Successfully simulated reading the file:");
    } catch (e) {
        // Handle the error and display the error message
        document.getElementById('result').innerText = "";
        console.log("Invalid file type: The file path must end with .txt");
    }
}

















// "Successfully simulated reading the file: " + filePath;
// + e.message;