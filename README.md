# Bronco Fuel

### [Setup Documentation](https://docs.google.com/document/d/1no3_boTWDg3TmVCAs5MlSsOi85rqgbfbDmeNilEhXHI/edit?usp=sharing)

### [Manual Test Documentation](https://docs.google.com/document/d/1SEqOCs096Gtt8I0I5kdrrX61ftj3SWmi7e_63U6zKWs/edit?usp=sharing)

## Setup
- After pulling, run inside folder:
`npm i -g`
`ionic-serve -l`
- This will pull up a browser window with both iOS and Android simulators. Simply running `ionic serve` runs the application as a desktop-style web app.
## Firebase
- a NO-Sql, non-relational database, it would be more accurate to describe the database as a set of nodes that can be the head of other sets of nodes.
- The database manager is user friendly, and easy to control read and write privileges.
- We are using the Realtime Database, which is good for asynchronous changes and updates, there is also a cloud functions.
- The cloud functions operate as a way for a team to develop projects that have heavy loads on the database and timed updates.
## Building

- Follow npm and ionic guidelines to run this project. 
- use `ionic cordova build` followed by the platform name (`android` or `ios`) to create a native build project file for each respective platform.

- To create a full production build for either platform, use the `ionic cordova build` command above, along with the `--prod --release` parameters.

## Android Apk
   - Download Android Studio
   - Got to the SDK manager > SDK Tools > show product details
   - Download the SDK build-tools v19.1> we are using 29.0.0-rc2
   - Build a keystore that will allow you to sign the apk
      keytool -genkey -v -keystore bronco-fuel-key.keystore -alias bronco_fuel -keyalg RSA -keysize 2048 -validity 10000
   - Our advice, when prompted keep both passwords the same, for simplicity
   - To sign:
         jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore bronco-fuel-key.keystore app-release-unsigned.apk bronc_fuel.
   - To compress for deployment, 
      zipalign -v 4 app-release-unsigned.apk <your_app>.apk
   - To install on your Android Device follow these instructions
        https://ionicframework.com/docs/building/android
        
       
## Known Issues
- See Setup Docs.

### [Recipe Spreadsheet Access](https://docs.google.com/spreadsheets/d/1Mq1VMv3s3y7RVxYli8dbiSiJllthyyfrsqME3C-3eAw/edit?usp=sharing)

### [Food Spreadsheet Access](https://docs.google.com/spreadsheets/d/1YYhiSgtEh3QdEvazxbTcN9OujIMVK6KiGh8KfM7eUZY/edit?usp=sharing)

