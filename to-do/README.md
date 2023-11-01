# Building the project

## Part 1️⃣

```powershell

npm init
npm install -D electron

```

- by using "**npm init -y**" (with the y flag), we will create a default 'package.json' file
- "**npm install -D \<package-name\>**" it is used to list the package in the _devDependencies_ section from 'package.json' file

## Part 2️⃣

Inside the 'package.json' file, the "**main**" key will be bonded with the "**main.js**" value. The old value was "index.js". _This will set the entry point file for the app._

The "**scripts**" key will be bonded to a modified object, that will contain a key called **"start"** (previosly was "test"), that will have a string value: "electron .". _This will set the command for running the app._

## Part 3️⃣

To build an executable file, we need to install another package:

```powershell

npm i -D electron-packager

```

This will pack our app.

---

After that, we will need to execute:

```powershell

npx electron-packager . <app-name>

```

I will use "todoapp" for the \<app-name\>.
