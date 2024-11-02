//your JS code here. If required.
//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if (title && author && isbn) {
        const tableBody = document.getElementById('book-list');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete">Clear</button></td>
        `;

        tableBody.appendChild(newRow);

        // Clear input fields
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

        // Add event listener to delete button
        newRow.querySelector('.delete').addEventListener('click', function() {
            tableBody.removeChild(newRow);
        });
    } else {
        alert("Please fill in all fields.");
    }
});