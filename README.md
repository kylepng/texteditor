# text-editor (Just Another Text Editor)

------
## Table of Content

- [Description](#description)
- [Usage](#usage)
- [Images](#images)
- [Deployed Link](#deployed-link)
- [GitHub Repository](#github-repository)
- [Author](#author)  
- [Technologies Used](#technologies-used) 
- [License](#license)

------
## Description:  

J.A.T.E was created as a simple text editor app that can function both online and offline, with a variety of data persistence options in order to ensure that data is not lost in any scenario. The application first looks to use the data in the indexedDB to populate the editor, then if it cannot access that it will use local storage. For use offline, this application can be downloaded to your desktop as an application.

------
## Usage:

To use this app go to the link provided below.  For offline use, go to the link and hit the "install" button to install the app locally, for offline use.

------
## Images:

The following image shows the application retrieves database, injecting to editor, and successfully saving to DB.:  

![Screenshot of Text Editor](./client/src/images/text-1.jpg)

The following image shows the application's `manifest.json` file:  

![Screenshot of Text Editor](./client/src/images/manifest.jpg)

The following image shows the application's registered `service worker`:  

![Screenshot of Text Editor](./client/src/images/service-workers.jpg)

The following image shows the application's `IndexedDB` storage:  

![Screenshot of Text Editor](./client/src/images/text-2.jpg)

------
## Deployed Link:

- [Heroku Deployed: Text Editor (Just Another Text Editor)](https://jate-kj.herokuapp.com/)

## Github Repository:

- [Github Repository for Text Editor](https://github.com/ksjefferies/text-editor)

## Author:

- [Kelly Jefferies](https://github.com/ksjefferies)

## Technologies Used:

![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

## License:

[![License](https://img.shields.io/badge/License-MIT%20License-Green)](http://choosealicense.com/licenses/mit/)