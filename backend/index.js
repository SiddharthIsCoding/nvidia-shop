const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../site/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'site', 'build', 'index.html'));
});

const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));