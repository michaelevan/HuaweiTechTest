function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    if (name === '' || email === '' || phone === '') {
      alert('Harap lengkapi semua field sebelum mengirimkan data.');
      return;
    }
    sendData({ name, email, phone });
}

function sendData(data) {
    fetch('/api/form', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response:', data);
        alert('Data berhasil disimpan.');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat menyimpan data.');
    });
}