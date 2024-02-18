function fetchContentById(id) {
    fetch(id + ".html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${id}.html: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(error));
}