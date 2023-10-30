# Building process

## Powershell commands history

```powershell
npm install electron resize-img toastify-js
ni "main.js"
npx electronmon .
```

ni = New-Item
npx electronmon . - runs the app with live update

## package.json

Before:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

After:

```json
"scripts": {
    "start": "electron ."
  },
```
