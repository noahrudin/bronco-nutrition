# Bronco Fuel
- Follow npm and ionic guidelines to run this project. 
- use `ionic cordova build` followed by the platform name (`android` or `ios`) to create a native build project file for each respective platform.

- To create a full production build for either platform, use the `ionic cordova build` command above, along with the `--prod --release` parameters.

## Setup
- After pulling, run inside folder:
`npm i -g`
`ionic-serve -l`
- This will pull up a browser window with both iOS and Android simulators. Simply running `ionic serve` runs the application as a desktop-style web app.
## Android Apk
    - Download Android Studio
    - Got to the SDK manager > SDK Tools > show product details
    - Download the SDK build-tools v19.1> we are using 29.0.0-rc2
    -we have built a keystore for android deployment it exists
    in: /platforms/android/app/build/outputs/apk/release
    file. the password is :BRONCO_FUEL
    - this will be how you sign the file
    - To sign:
         jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore bronco-fuel-key.keystore app-release-unsigned.apk bronc_fuel.
    - To compress for deployment
     zipalign -v 4 app-release-unsigned.apk <your_app>.apk
     -To install on your Android Device follow these instructions
        https://ionicframework.com/docs/building/android
    - good to go
## Known Issues
- general lag when loading each page up from the app sidemenu
- when we load up the app as a user, we will hit the login screen briefly
  before routing to the home page.
- [Android] the splashscreen will fade away to white to next page instead 
   of disappearing smoothly.

### [Recipe Access](https://docs.google.com/spreadsheets/d/1Mq1VMv3s3y7RVxYli8dbiSiJllthyyfrsqME3C-3eAw/edit?usp=sharing)

### [Food Access](https://docs.google.com/spreadsheets/d/1YYhiSgtEh3QdEvazxbTcN9OujIMVK6KiGh8KfM7eUZY/edit?usp=sharing)

