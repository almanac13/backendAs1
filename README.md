# backendAs1
BMI Calculator
Description

This is a simple BMI (Body Mass Index) calculator web application built with Node.js and Express.
The application takes the user’s weight and height from an HTML form, calculates the BMI on the server, and displays the result with the corresponding BMI category.

Technologies Used
1.Node.js
2.Express.js
3.HTML
4.CSS

Project Structure
BAkend/
│
├── server.js
├── package.json
└── public/
    ├── index.html
    └── style.css

How It Work
The user opens the main page.
The user enters weight (kg) and height (m).
The form sends a POST request to the server
The server calculates BMI using the formula
BMI = weight / (height × height)
The server determines the BMI category and returns the result.

BMI Categories
Underweight: BMI < 18.5
Normal weight: 18.5 – 24.9
Overweight: 25 – 29.9
Obese: BMI ≥ 30

Student:Nurassyl Meirbek
Group:SE2415
Node.js Backend Assignment
