document.getElementById('shorten-btn').addEventListener('click', () => {
    const url = document.getElementById('url-input').value;
    if (url) {
        fetch('/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: url })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('shortened-url').innerHTML = `Your shortened URL is: <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>`;
        });
    } else {
        alert('Please enter a URL');
    }
});

document.getElementById('all-links-btn').addEventListener('click', () => {
    window.location.href = '/all-links-page';
});
