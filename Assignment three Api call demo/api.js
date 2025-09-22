// Simple API call function
async function getData() {
    try {
        // Make API call
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        
        // Display result
        document.getElementById('result').innerHTML = 
            `<h3>${data.title}</h3>
             <p>${data.body}</p>`;
    } catch (error) {
        document.getElementById('result').innerHTML = 'Error: ' + error.message;
    }
}