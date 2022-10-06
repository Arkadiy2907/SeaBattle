const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dirname = process.cwd();

app.use(express.static(dirname + "/dist"));

app.get("/*", (req, res) => {
	res.sendFile(dirname + "/dist/index.html")
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});