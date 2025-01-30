function handleSearch() {
    const query = document.getElementById('search').value;
    fetch(`http://localhost:5000/wips?title=${encodeURIComponent(query)}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Converts to JSON
    })
    .then(data => {
        const results = document.getElementById('results');
        if (data.error) {
            results.innerHTML = `<p>${data.error}</p>`;
        } else {
            results.innerHTML = `
            <p>Book Title: ${data.title}</p>
            <p>Book Status: ${data.status}</p>
            <p>Book Year: ${data.year}</p>
            <p>Book Word Count: ${data.wc}</p>
            `;
        }
    })
    .catch(error => console.error('Fetch error:', error));
}