<!-- Improved compatibility of back to top link: See: https://github.com/sangbk208/calculator-app/pull/73 -->
<a name="readme-top"></a>
<!--

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/sangbk208/calculator-app">
    <img src="https://user-images.githubusercontent.com/50744056/226798917-c7ef76c7-c568-49a1-a7cd-e040efc594fb.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">My ReactJS Pocket Calculator</h3>

  <p align="center">
    Your already familiar iPhone calculator right on the Web!
    <br />
    <a href="https://github.com/sangbk208/calculator-app"></a>
    <br />
    <br />
    <a href="https://calculator-app-sbk208.surge.sh" target="_blank" >View Demo</a>
    ·
    <a href="https://github.com/sangbk208/calculator-app/issues" target="_blank">Report Bug</a>
    ·
    <a href="https://github.com/sangbk208/calculator-app/issues" target="_blank">Request Feature</a>
  </p>
</div>

<br />
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>
<br />
<br />

<!-- ABOUT THE PROJECT -->
## About The Project

<p style="text-align:center;font-weight:bold">Get the iconic look and feel of your day to day built in pocket calculator of iOS. But now with the enhanced calculation history feature. </p>
<p align="center">
  <img width="887" alt="Screenshot 2023-03-22 at 11 02 03" src="https://user-images.githubusercontent.com/50744056/226799718-6159ab8f-9740-4871-9c4c-985678b5d54f.png">
</p>

### Built With 
[![React][React.js]][React-url]

<!-- FEATURES -->
### Features

1. Basic calculation with addition, subtraction, multiplication and division operations
<p align="center">
<img width="441" alt="image" src="https://user-images.githubusercontent.com/50744056/226800016-d2e6fcc7-3dd6-4fa8-9e28-424c3ba2fb69.png">
</p>

* Usage tips:
  * We support single operation as well as chain of operations.
  * To calculate a chain of operations, simply input the next operators after getting the result of the previous operation on the result screen. 
  * The result of the previous operation will be used as the first operand in the next operation
  * The result of the operation is calculated at the time the next operator or the equal operator is selected
    * As a result, operators precedence is not supported in this version of the application (that could be supported if we implement parenthesis operators)
   
2. Toggle between negative and positive numbers
<p align="center">
  <img width="435" alt="image" src="https://user-images.githubusercontent.com/50744056/226800265-c0fcef20-5ba1-4e63-8333-77512e095531.png">
</p>

* Usage tips:
  * Use this key to toggle between positive and negative number after entering any operands
  * If you toggle this key before inputting the second operand (which means just after entering the operator), it will apply the logic to the first operand and use it as the second operand for the operation.

3. Calulation with decimal numbers
<p align="center">
  <img width="433" alt="image" src="https://user-images.githubusercontent.com/50744056/226800555-c1dd3f28-366a-4777-83a1-4eddde8ac52a.png">
</p>

* Usage tips:
  * Use this key before entering the decimal part of a operand
  * We provide a shortcut that if you don't enter the whole part first, the whole part will be assumed to be the zero number.
  * We round the result of all operations with decimal numbers upto 8 numbers after the decimal point.

4. Clear the most recent entry
<p align="center">
  <img width="436" alt="image" src="https://user-images.githubusercontent.com/50744056/226800793-44f7f2fb-7c5f-4162-950a-c555c832a650.png">
</p>
* Usage tips:
  * Using this feature don't affect the existing calculation history.
  * You could use this key to clear the most recent input entry (which could be either operand or operator)
  * We only support clearing the most recent entry, which means after selecting this key, it will be changed from C to AC, that only allows you to reset the current calculation.

5. Clear all entries
<p align="center">
  <img width="435" alt="image" src="https://user-images.githubusercontent.com/50744056/226801068-7c139ea0-bf3a-4e61-8598-67fcac8b943d.png">
</p>

* Usage tips:
  * Using this feature don't affect the existing calculation history.
  * This key will appear after using the `Clear the most recent entry` feature
  * Selecting the key multiple times does't change its behaviour. 

6. Toggle showing calculation history
<p align="center">
  <img width="841" alt="image" src="https://user-images.githubusercontent.com/50744056/226801160-ccfb626b-40c1-4422-97be-05e1819d2ffb.png">
</p>

* Usage tips:
  * Use this key to toggle showing all the calculation history.

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
1. npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/sangbk208/calculator-app.git
   ```

2. Install NPM packages
   ```sh
   npm install
   ```


<!-- USAGE EXAMPLES -->
## Usage

1. Run all unit tests
   ```sh
   npm test
   ```
   
2. Run the application locally 
   ```sh
   npm start
   ```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- CONTACT -->
## Contact

Sang Nguyen- [@sbk208](https://www.linkedin.com/in/sbk208/) - sangbk208@gmail.com

Project Link: [https://github.com/sangbk208/calculator-app](https://github.com/sangbk208/calculator-app/)

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
