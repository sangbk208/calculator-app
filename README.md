<!-- Improved compatibility of back to top link: See: https://github.com/sangbk208/calculator-app/pull/73 -->
<a name="readme-top"></a>
<!--

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/sangbk208/calculator-app">
    <img src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/308047587_3329898974000205_1583447077611546330_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_aid=0&_nc_ohc=jkL9j-vxr-8AX8GOXDP&_nc_ht=scontent.fdad2-1.fna&oh=03_AVLQ21blP-RfP5MPIELObotwyAX7syRoUVBrF0r5Wrc6-g&oe=635B9DB2" alt="Logo" width="80" height="80">
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


<img src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/308433588_1273027566824995_5015009295740470954_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=oar96CWt48sAX8zrowq&tn=UFFp9KPWjuFB6obj&_nc_ht=scontent.fdad2-1.fna&oh=03_AVI8gHCTn9y6EjvraUHuw8eLyMeCzlhqvSEgvw9qoGFyKw&oe=635E2CF9"/>


### Built With 
[![React][React.js]][React-url]

<!-- FEATURES -->
### Features

1. Basic calculation with addition, subtraction, multiplication and division operations
<img src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/302042237_2331647100324576_5680458437511974654_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Ihde2kCYu6QAX9W5q2q&_nc_ht=scontent.fdad2-1.fna&oh=03_AVIvXlOck9a-qJvgHzq8KR2kV2BX1JcIf-RhI5A1cCwgug&oe=635C33D4"/>

* Usage tips:
  * We support single operation as well as chain of operations.
  * To calculate a chain of operations, simply input the next operators after getting the result of the previous operation on the result screen. 
  * The result of the previous operation will be used as the first operand in the next operation
  * The result of the operation is calculated at the time the next operator or the equal operator is selected
    * As a result, operators precedence is not supported in this version of the application (that could be supported if we implement parenthesis operators)
   
2. Toggle between negative and positive numbers
<img src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.15752-9/308843076_1347455919118309_840018354301587158_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ClM1E7jNHHUAX-m3Ul3&_nc_ht=scontent.fdad1-4.fna&oh=03_AVISeAsCykoqdcaCLtwktVV8En0rG8apBtefV6i3-SoNPw&oe=635ED5A4" />

* Usage tips:
  * Use this key to toggle between positive and negative number after entering any operands
  * If you toggle this key before inputting the second operand (which means just after entering the operator), it will apply the logic to the first operand and use it as the second operand for the operation.

3. Calulation with decimal numbers
<img src="https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/307937178_1150144429219046_7504176242925541684_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=64vi5kid8OoAX9GJ3fA&_nc_ht=scontent.fdad1-3.fna&oh=03_AVIRakYIftKVbAFYwvA2zTVLi_8zV1AcJ4YU1IgF5lGa0Q&oe=635D8329" />

* Usage tips:
  * Use this key before entering the decimal part of a operand
  * We provide a shortcut that if you don't enter the whole part first, the whole part will be assumed to be the zero number.
  * We round the result of all operations with decimal numbers upto 8 numbers after the decimal point.

4. Clear the most recent entry
<img src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/308389188_658027405887436_5148273979904267451_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=AZOmbZlyZMoAX_5Rhy3&tn=UFFp9KPWjuFB6obj&_nc_ht=scontent.fdad2-1.fna&oh=03_AVK7VzAMy7SmUh_bfHWUEC063g_A8tsdn-B6ujIuJBjCSw&oe=635C0DD0" />

* Usage tips:
  * Using this feature don't affect the existing calculation history.
  * You could use this key to clear the most recent input entry (which could be either operand or operator)
  * We only support clearing the most recent entry, which means after selecting this key, it will be changed from C to AC, that only allows you to reset the current calculation.

5. Clear all entries
<img src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/309009763_6105273466153374_6911582910582384583_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=7J06g0-W_X8AX8OMOuV&_nc_ht=scontent.fdad2-1.fna&oh=03_AVLZeHnLFbjkvzpmjNxRFZQqEGxaa7g9sGSeUzxTNuupuw&oe=635D378B" />

* Usage tips:
  * Using this feature don't affect the existing calculation history.
  * This key will appear after using the `Clear the most recent entry` feature
  * Selecting the key multiple times does't change its behaviour. 

6. Toggle showing calculation history
<img src="https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/309629645_389344673249796_8323968441335206452_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=yh5hzb5-c2sAX8YbDEE&_nc_ht=scontent.fdad1-3.fna&oh=03_AVLBG2Efuv67ze5BFpcuRAEQneqLi9-zWKwO0Hqz4enwGg&oe=635F362A" />

* Usage tips:
  * Use this key to toggle showing all the calculation history of the current session.
  * To clear entire history of the current session, you need to start a new session by refreshing the web page.

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

Sang Nguyen- [@sbk208](https://www.linkedin.com/in/sbk208/) - sbk208gmail.com

Project Link: [https://github.com/sangbk208/calculator-app](https://github.com/sangbk208/calculator-app/)

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
