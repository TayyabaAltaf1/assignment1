function parseJSON() {
    // Get the JSON string from the input field
    var jsonString = document.getElementById('jsonString').value;

    try {
        // Try to parse the JSON string
        var parsedObject = JSON.parse(jsonString);
         document.getElementById('result').innerText = "";
        //   + JSON.stringify(parsedObject, null, 2);
         console.log("Parsed JSON:");
    } catch (e) {
        // Handle error if JSON parsing fails
        document.getElementById('result').innerText = "";
        console.log("Error: Invalid JSON string.");
    }
}