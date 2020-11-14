# Medium
### Installation
```sh
$ git clone https://github.com/hasanal1995/HA-medium-react-native.git
$ cd HA-medium-react-native
$ yarn
$ cd ios && pod install
```
### Running for Android
```sh
$ yarn android
```
### Running for iOS
```sh
$ yarn ios
```
### Plugins

Medium is currently extended with the following plugins.

| Plugin | Read more |
| ------ | ------ |
| Async Storage | [https://github.com/react-native-async-storage/async-storage]
| Google Signin | [https://github.com/react-native-google-signin/google-signin]
| React NativeNavigation/Wix | [https://github.com/wix/react-native-navigation]
| Redux toolkit | [https://github.com/reduxjs/redux-toolkit]
| Axios | [https://github.com/axios/axios]
| i18n-js | [https://www.npmjs.com/package/i18n-js]
| Device Info | [https://github.com/react-native-device-info/react-native-device-info]
| Toast | [https://www.npmjs.com/package/react-native-simple-toast]
| React Native Animatable | [https://github.com/oblador/react-native-animatable]
### CCR create components tool (https://www.npmjs.com/package/create-components-react)
it is a tool to automate create react components with custom template.
create component: ```ccr create -p component ComponentName```
create screen: ```ccr create -p screen ScreenName -r src/screens```