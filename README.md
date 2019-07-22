Diabetes Tracker -- 2019

## Introduction

Diabetes patients right now monitor their eating habits, blood sugar level, exercise and activities manually on either paper or computer. It is also challenging to keep blood sugar levels within the range recommended by a doctor due to the number of things that can cause the levels to change.  Some of these factors include food, exercise, medication, illness, alcohol, or stress.  It is important for diabetes patients to know not only the type of food they eat, but also how much and which combinations are beneficial to maintain blood sugar levels.  In order to do this patient will have to learn about portion control, well balanced meals, coordinating food and medication, avoid sugar sweetened beverages.   

Exercise is also important in maintaining a healthy blood sugar level because it will help lower blood sugar levels.  But it is also important to make sure that they don’t fall too low due to taking medications that lower blood sugar levels as well.  If taking new medication, it is necessary to communicate with their doctor if the new medication is affecting blood sugar levels.  All of this can be overwhelming to learn and on top of that keep a detailed log of activity to see what changes are drastically affecting blood sugar levels.  We are trying to provide diabetes patients with a tool to be able to create their logs/documents using voice commands which will allow them to improve their diabetes, eating habits and to be able to monitor their progress for future use.   

## Functionality 

The user will be able to record diet, exercise, and blood sugar information to Alexa. Alexa may ask additional questions based on the record that the user made or may recommend a certain type of activity/food to better the user’s health. Alexa will also remind the user if he or she has not made an entry yet that day. 

If the user wishes to view their data, they can do so by going to a webpage which will display all their records, which can be sortable by time or type of entry. 

Sample Interactions 

User: “Alexa, I have a blood sugar level of 90.” 

Alexa: “Alright, what did you eat recently?” 

User: “An apple and carrots” 

Alexa: “I’ll keep track of that” 

 

User: “Alexa, I did 30 minutes of exercise” 

Alexa: “Okay, how intensive was it?” 

User: “Not too much, just a light jog” 

Alexa: “Alright. Did you want a reminder to exercise again?” 

User: “Yes, tomorrow at 6 PM, please.” 

Alexa: “Sure” 


Alexa: “User, you have not made any diet, exercise, or blood sugar logs yet today. Would you like to?” 

User: “Yes. I ate a sandwich at noon, jogged right afterwards, and had a blood sugar level of 100.” 

Alexa: “Alright, I’ll remind you again later to make entries.” 

## Project Structure

- `/app` - Contains our React Native App codebase
  - `/api` - Api module class. Each file will be feature based like ProductAPI, LoginAPI etc
  - `/components` - universal shared components used by others.
  - `/config` - Universal styles,images,metrics etc..
  - `/features` - Config files
    - `login`- Each folder will be a feature like this.
      - `reducers` - Reducer associated with this feature [Mostly one, can be multiple]
      - `sagas` - Sagas related with this particular feature [can have single or muliple sagas associated]
      - `selectors` - selectors associated with feature
      - `components` - Components associated with this feature.
      - `containers` - Containers associated with this feature [**Container - Component Structure**]
  - `/lib` - lib helper files
  - `/navigation` - All naviagtion related studd including helpers functions and navigation stack
    - `NavigationHelpers.js` -  Use this class instead of depending on props.naviagtion
    - `NavigationService.js` - Service class for naviagtion
    - `NavigationStack.js` - Stack to define naviagtion. you can split things further if needed
  - `/store` - Includes everything you need to set up store. 
    - `reducers` - Combines all feature based reducers
    - `sagas` - Combines all feature based sagas
    - `index.js` - Set ups store and export things

## Prerequisites

* [Node](https://nodejs.org) v8.10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
* [Yarn](https://yarnpkg.com/)
* A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Getting Started

1. Clone this repo, `git@github.com:puneetp0110/diabetes-tracker-mobile-app.git`

2. Run `yarn` or `npm install` to install dependencies

3. Run `react-native eject` to upgrade and add iOS & Android Folders.
  
4. Run `react-native link`

5. Start the packager with `npm start`

6. Connect a mobile device to your development machine
7. Run the test application:
  * On Android:
    * Run `react-native run-android`
  * On iOS:
    * Open `ios/YourReactProject.xcodeproj` in Xcode
    * Hit `Run` after selecting the desired device
