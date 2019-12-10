const express = require('express');
const app = express();
const path = 'src/bank-guarantee';

app.use(express.static('src', {
    extensions: ['html', 'css']
}));

app.use(express.static('dist', {
    extensions: ['html', 'css']
}));

app.get('/auth-welcome-pass', (req, res) => {
   res.sendFile('auth-welcome-pass.html', { root: path });
});

app.get('/auth-welcome-phone', (req, res) => {
   res.sendFile('auth-welcome-phone.html', { root: path });
});

app.get('/auth-pass-recovery-1', (req, res) => {
   res.sendFile('auth-pass-recovery-1.html', { root: path });
});

app.get('/auth-pass-recovery-2', (req, res) => {
   res.sendFile('auth-pass-recovery-2.html', { root: path });
});

app.get('/auth-pass-recovery-3', (req, res) => {
   res.sendFile('auth-pass-recovery-3.html', { root: path });
});

app.get('/reg-1', (req, res) => {
    res.sendFile('reg-1.html', { root: path });
});

app.get('/reg-2', (req, res) => {
    res.sendFile('reg-2.html', { root: path });
});

app.get('/blank', (req, res) => {
    res.sendFile('main-page.html', { root: path });
});

app.get('/header', (req, res) => {
    res.sendFile('_header.html', { root: path });
});

app.get('/quickview', (req, res) => {
    res.sendFile('quickview.html', { root: path });
});

app.listen(3000, () => {
   console.log('app running');
});
