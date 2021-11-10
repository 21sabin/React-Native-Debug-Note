// - install react native dev tools from extension
// - add configuration in launch.json file4
//    - click on debugger icon in left side of vs code where you will find create launch.json
//    config object:
// {
// Use IntelliSense to learn about possible attributes.
// Hover to view descriptions of existing attributes.
// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
//    "version": "0.2.0",
//    "configurations": [
//      {
//        "name": "Attach to packager",
//        "cwd": "${workspaceFolder}",
//        "type": "reactnative",
//        "request": "attach"
//      }
//    ]
//  }

/**
 * running code in release mode
 * react-native run-android --variant=release ( for android )
 * for ios= open ios/<project_name>.xcodeproj
 *  - clink on the project name on the top tool bar
 *  - find edit schema
 * - click run and change build configufation to release
 * - uncheck debug executable
 */

/**
 * ***** Production debugging process********
 * 1. Identify: identify bug->idenity when bug is happining
 * 2. isolate: isolate problem , where excatly happing
 * 3. Reproduce:
 *       - sometime bug happingin production not in development.
 *       -  in that case we need to figure out to reporduce that bug in development
 *  4.Simplify:
 * 5.Fix bug and test it in environment where bug is happining
 * 6. ship your app to repsective environment
 */

/** \
 *  Integration Instabug in React native
 * - yarn add instabug-reactnative
 * - react-native link instabug-reactnative
 * -need to generate source-map for android and ios ( check documentation in instabug for generateing source map)
 * -yarn run ios:source-map
 *
 * Note:
 * - to get useful crash report information , upload latest ios and android source map in instabug
 * - after we have crash in our app, we need to close app and reopen it then only it will send crash resort to instabug
 *
 */
