const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/calculate-bmi", (req, res) => {
  const weight = Number(req.body.weight);
  const height = Number(req.body.height);

  if (!weight || !height) {
    return res.send("Invalid input");
  }

  const bmi = weight / (height * height);

  let category = "";
  let color = "";

  if (bmi < 18.5) {
    category = "Underweight";
    color = "blue";
  } else if (bmi < 24.9) {
    category = "Normal";
    color = "green";
  } else if (bmi < 29.9) {
    category = "Overweight";
    color = "orange";
  } else {
    category = "Obese";
    color = "red";
  }

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>BMI Result</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <div class="container">
            <h1>Your BMI</h1>
            <h2 class="${color}">${bmi.toFixed(2)}</h2>
            <p class="${color}">${category}</p>
            <a href="/" class="back">← Back</a>
        </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
