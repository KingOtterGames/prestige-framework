const { ipcRenderer, contextBridge } = require('electron')
contextBridge.exposeInMainWorld('api', {
    save: (data: object) => {
        return ipcRenderer.invoke('save', data)
    },
    load: () => {
        return ipcRenderer.invoke('load')
    },
    remove: () => {
        return ipcRenderer.invoke('remove')
    },
    db: (query: string) => {
        return ipcRenderer.invoke('db', query)
    },
    achievement: (key: string) => {
        return ipcRenderer.invoke('achievement', key)
    },
    link: (url: string) => {
        return ipcRenderer.invoke('link', url)
    },
})
