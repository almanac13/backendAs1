# backendAs1
BMI Calculator (Node.js)
Description
This project is a simple BMI (Body Mass Index) calculator built using Node.js and Express.
The user enters weight and height in a web form, the server calculates the BMI, and the result is displayed on a web page with the corresponding category.

Technologies Used

Node.js
Express.js
HTML
CSS

Project Structure
BAkend/
│
├── server.js
├── package.json
└── public/
    ├── index.html
    └── style.css

How It Works

The user opens the main page.

The user enters weight (kg) and height (m).

The form sends a POST request to the server.

The server calculates BMI using the formula:

BMI = weight / (height × height)


The server determines the BMI category and returns the result.

BMI Categories

Underweight: BMI < 18.5

Normal weight: 18.5 – 24.9

Overweight: 25 – 29.9

Obese: BMI ≥ 30

Author

Nurassyl
Node.js Backend Assignment
