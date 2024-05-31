const formatFileDate = (date: Date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
}

export const formatBackupName = () => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const dateStr =
        '' +
        formatFileDate(date) +
        '_' +
        (hours < 10 ? '0' + hours : hours) +
        '-' +
        (minutes < 10 ? '0' + minutes : minutes) +
        '-' +
        (seconds < 10 ? '0' + seconds : seconds)
    return '/' + dateStr + '-backup.json'
}
