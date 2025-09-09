/* Function to read cookies, get their name-value pairs, and display the name-value
   pairs in the output area */
const displayCookieValues = function() {
    const output = document.getElementById("output");
    output.innerHTML = ""; // clear first

    // Split cookies into array
    const cookies = document.cookie.split(";");

    // Process and display each cookie of the array by creating the necessary elements
    cookies.forEach(cookie => {
        let [name, value] = cookie.split("=");
        if (name && value) {
            name = name.trim();
            value = decodeURIComponent(value);
            const p = document.createElement("p");
            p.textContent = `${name}: ${value}`;
            output.appendChild(p);
        }
    });
};

// Event handler called when page has loaded
window.onload = () => {
    // Add code here to call function to display cookie values
    displayCookieValues();
}