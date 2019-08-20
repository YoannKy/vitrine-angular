const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(`${__dirname}/dist/vitrine-angular`));

app.get(/.*/, (_, res) => res.sendfile(`${__dirname}/dist/vitrine-angular/index.html`));

app.listen(PORT, () => console.log('server has started'));
