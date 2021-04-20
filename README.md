<div align="center">

# No-Stress Work Day Planner 📆
![GitHub license](https://img.shields.io/badge/License-MIT-red)

#### 📍 [View Deployment on GitHub Pages](https://katsign.github.io/day-planner/) 📍
</div>

### Save and clear events in soothing pastel timeblocks to keep track of your daily tasks while working from home.

## *Table of Contents*

- [Description](#description)
- [Screenshots](#screenshots)
- [Contact](#contact)

## *Description*

This simple browser application uses jQuery to access the [Moment.js](https://momentjs.com/) library and manipulate the timeblocks of a virtual day planner. When the user looks at the app during work day hours (9 AM to 5 PM in this case) the timeblocks in the past appear grey; the present, purple; and the future, tan. When an entry is made into a timeblock's textarea, an event listener runs a function to save that data to the local storage of the user's machine. The past saved entries will appear on window load unless replaced/cleared and re-saved.

When accessed from too small a screen, a media query in the stylesheet hides the main content and displays an error message.

## *Screenshots*

#### At the top of the screen, a jumbotron displays the current day and the time.

Main Header            |  Timeblock Entry
:-------------------------:|:-------------------------:
![Demo of Day Planner](./assets/screenshots/jumbo.png)  |  ![Demo of Day Planner](./assets/screenshots/entry.png)

#### The screenshots below show the timeblocks colored based on the time 2:20pm. The program loops through the timeblocks and changes the class with jQuery, manipulating the colors to correspond to the time of day.

Timeblocks 9AM-2PM            |  Timeblocks 2-5PM
:-------------------------:|:-------------------------:
![Demo of Day Planner](./assets/screenshots/9-2.png)  |  ![Demo of Day Planner](./assets/screenshots/2-5.png)

## *Contact*

🔗 Links in Bio @[katsign](https://github.com/katsign)

![Email Badge](https://img.shields.io/badge/Email%20Me-mailtokatsign%40gmail.com-d8bfd8)

---
This project is MIT licensed. &copy; 2021
