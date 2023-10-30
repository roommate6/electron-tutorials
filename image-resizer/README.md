# Building process

## Powershell commands history

```powershell
npm install electron resize-img toastify-js
ni "main.js"
```

ni = New-Item

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
