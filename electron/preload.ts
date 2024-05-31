const { ipcRenderer, contextBridge } = require('electron')
contextBridge.exposeInMainWorld('api', {
    save: (data: object) => {
        return ipcRenderer.invoke('save', data)
    },
    load: () => {
        return ipcRenderer.invoke('load')
    },
    delete: () => {
        return ipcRenderer.invoke('delete')
    },
    db: (query: String) => {
        return ipcRenderer.invoke('db', query)
    },
    achievement: (key: String) => {
        return ipcRenderer.invoke('achievement', key)
    },
})
