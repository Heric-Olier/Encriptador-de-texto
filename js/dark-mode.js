//*! <--------- Function Dark-Mode --------->*/


const btnSwitch = document.querySelector("#switch-mode");
const imgSwitch = document.querySelector(".logo-title");
const imgRobot = document.querySelector(".robot");
const imgTitleWhite = document.querySelector("#logo-title_white");
const imgRobotDarkMode = document.querySelector(".robot_dm");


btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
    if (imgSwitch.classList.contains('disable') && imgRobot.classList.contains('disable')) {
        imgSwitch.classList.remove("disable");
        imgTitleWhite.classList.remove("active");
         imgRobot.classList.remove("disable");
         imgRobotDarkMode.classList.remove("active");

        imgSwitch.classList.add("active");
        imgTitleWhite.classList.add("disable");
        imgRobot.classList.add("active");
        imgRobotDarkMode.classList.add("disable");
    
    } else {

        imgSwitch.classList.remove("active");
        imgTitleWhite.classList.remove("disable");
        imgRobot.classList.remove("active");
        imgRobotDarkMode.classList.remove("disable");

        imgSwitch.classList.add("disable");
        imgTitleWhite.classList.add("active");
        imgRobot.classList.add("disable");
        imgRobotDarkMode.classList.add("active");

    }
})
