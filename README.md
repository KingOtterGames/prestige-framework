        window.api.db('SELECT * FROM debugging').then((res: any) => {
            setData(res)
        })



        "dev": "nodemon --watch ./electron/data/database.db --exec npm run electron:dev",
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "postinstall": "electron-builder install-app-deps",
        "electron:dev": "concurrently \"cross-env BROWSER=none npm start\" \"wait-on http://127.0.0.1:3000 && tsc -p electron -w\" \"wait-on http://127.0.0.1:3000 && tsc -p electron && electron .\" \"cpx \"electron/data/database.db\" \"build/electron/data\"\"",
        "clean": "rimraf ./build && rimraf ./dist",
        "electron:build": "npm run build && tsc -p electron && cpx \"electron/data/database.db\" \"build/electron/data\" && electron-builder --dir",
        "eject": "react-scripts eject"
