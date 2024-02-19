const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

// Penyimpanan data sederhana dalam bentuk array di dalam server
let formData = [];  

// Endpoint API untuk menerima data formulir dari frontend
app.post('/api/form', (req, res) => {
    const { name, email, phone } = req.body;

// Menyimpan data formulir ke dalam penyimpanan data sederhana (array)
    formData.push({ name, email, phone });
    res.status(201).json({ message: 'Data formulir berhasil disimpan.' });
});

// Endpoint API untuk mengembalikan data formulir yang telah disimpan
app.get('/api/form', (req, res) => {
    let text = '';
    formData.forEach((item, index) => {
        text += `<h4>Data Pendaftar ${index + 1}:</h4>`;
        Object.entries(item).forEach(([key, value]) => {
            text += `${key}: ${value}<br>`;
        });
        text += '<br><hr>';
    });
    
    res.status(200).send(text); // Mengirimkan teks sebagai respons
});

// Menjalankan server pada port yang ditentukan
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
