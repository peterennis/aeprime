# Ionic and PrimeNG

This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

It is based on the blank template
and has the minimum integration to use [PrimeNG](https://www.primefaces.org/primeng/#/) components.

## How to use this template

Clone the repo, run `npm install`, and start moving bits...

Details in [this commit](https://github.com/peterennis/aeprime/commit/14d9c783c1cb950c68d97f544f2e684e3ff7f6af) if you just want to see how it works.

Kudos to [TheBrockEllis](http://thebrockellis.com/2017/03/23/primeng-Schedule-In-Ionic) 🙌

## Built with the Ionic CLI

```
C:\ae\aeprime>ionic info

global packages:

    @ionic/cli-utils : 1.4.0
    Ionic CLI        : 3.4.0

local packages:

    @ionic/app-scripts              : 1.3.7
    @ionic/cli-plugin-ionic-angular : 1.3.1
    Ionic Framework                 : ionic-angular 3.4.2

System:

    Node       : v6.11.0
    OS         : Windows 10
    Xcode      : not installed
    ios-deploy : not installed
    ios-sim    : not installed
    npm        : 3.10.10
```
<!---
![Example](src/assets/img/aeprime.png?raw=true "Example")
--->

<p align="center">
  <img src="src/assets/img/aeprime.png?raw=true" width="350"/>
</p>


# Ionic and PrimeNG update for Node 8 and npm 5

The latest node-sass is needed to successfully compile.

```
npm install --save node-sass@latest
```

```
C:\ae\adaept.com\aeprime>npm install --save node-sass@latest

> node-sass@4.8.3 install C:\ae\adaept.com\aeprime\node_modules\node-sass
> node scripts/install.js

Downloading binary from https://github.com/sass/node-sass/releases/download/v4.8.3/win32-x64-57_binding.node
Download complete..] - :
Binary saved to C:\ae\adaept.com\aeprime\node_modules\node-sass\vendor\win32-x64-57\binding.node
Caching binary to C:\Users\peter\AppData\Roaming\npm-cache\node-sass\4.8.3\win32-x64-57_binding.node

> node-sass@4.8.3 postinstall C:\ae\adaept.com\aeprime\node_modules\node-sass
> node scripts/build.js

Binary found at C:\ae\adaept.com\aeprime\node_modules\node-sass\vendor\win32-x64-57\binding.node
Testing binary
Binary is fine
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN @ionic/cli-plugin-ionic-angular@1.3.1 requires a peer of @ionic/app-scripts@^1.3.7 but none is installed. You must install peer dependencies yourself.

+ node-sass@4.8.3
added 91 packages, removed 530 packages and moved 8 packages in 19.475s
```

## Error

```
C:\ae\adaept.com\aeprime>ionic info
[ERROR] Error with .\node_modules\@ionic\app-scripts\package.json file: FILE_NOT_FOUND
```

Fix this with:

```
npm install @ionic/app-scripts@latest --save
```

```
C:\ae\adaept.com\aeprime>ionic info

cli packages: (C:\Users\peter\AppData\Roaming\npm\node_modules)

    @ionic/cli-utils  : 1.19.2
    ionic (Ionic CLI) : 3.20.0

local packages:

    @ionic/app-scripts : 3.1.8
    Ionic Framework    : ionic-angular 3.4.2

System:

    Node : v8.9.4
    npm  : 5.6.0
    OS   : Windows 10

Misc:

    backend : pro
```

## WARN Ionic Serve 

```
C:\ae\adaept.com\aeprime>ionic serve
[WARN] Detected @ionic/cli-plugin-ionic-angular in your package.json.

       As of CLI 3.8, it is no longer needed. You can uninstall it:

       npm uninstall -D @ionic/cli-plugin-ionic-angular

C:\ae\adaept.com\aeprime>npm uninstall -D @ionic/cli-plugin-ionic-angular
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.3 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

removed 89 packages in 9.688s

C:\ae\adaept.com\aeprime>
```

## Error Ionic Serve webpackJsonp

```
C:\ae\adaept.com\aeprime>ionic serve
...
webpackJsonp is not defined
```

Fix this by adding `<script src="build/vendor.js"></script>` to index.html before main.js





