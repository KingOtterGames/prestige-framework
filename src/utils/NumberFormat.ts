const currencyFormatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 })
// @ts-ignore
const wholeFormatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0, roundingMode: 'floor' })
// @ts-ignore
const scientificFormatter = new Intl.NumberFormat('en-US', { notation: 'scientific', roundingMode: 'floor' })
// @ts-ignore
const engineeringFormatter = new Intl.NumberFormat('en-US', { notation: 'engineering', roundingMode: 'floor' })
// @ts-ignore
const compactFormatter = new Intl.NumberFormat('en-US', { notation: 'compact', roundingMode: 'floor' })

export const currency = (num: number): string => {
    return currencyFormatter.format(num)
}

export const whole = (num: number): string => {
    return wholeFormatter.format(num)
}

export const scientific = (num: number): string => {
    return scientificFormatter.format(num).replace('E', 'e')
}

export const engineering = (num: number): string => {
    return engineeringFormatter.format(num).replace('E', 'e')
}

export const standardCompact = (num: number): string => {
    let regex = /^[a-zA-Z]+$/
    let compact = compactFormatter.format(num)
    let lastChar = compact[compact.length - 1]
    if (regex.test(lastChar)) {
        compact = compact.substring(0, compact.length - 1)
        compact += ' ' + lastChar
    }
    return compact
}

function getAbbreviation(e: number) {
    const prefixes = [
        ['', 'U', 'D', 'T', 'Qa', 'Qt', 'Sx', 'Sp', 'O', 'N'],
        ['', 'Dc', 'Vg', 'Tg', 'Qd', 'Qi', 'Se', 'St', 'Og', 'Nn'],
        ['', 'Ce', 'Dn', 'Tc', 'Qe', 'Qu', 'Sc', 'Si', 'Oe', 'Ne'],
    ]
    const prefixes2 = ['', 'MI-', 'MC-', 'NA-', 'PC-', 'FM-']
    e = Math.floor(e / 3) - 1
    let index2 = 0
    let prefix = [prefixes[0][e % 10]]
    while (e >= 10) {
        e = Math.floor(e / 10)
        prefix.push(prefixes[++index2 % 3][e % 10])
    }
    index2 = Math.floor(index2 / 3)
    while (prefix.length % 3 !== 0) prefix.push('')
    let ret = ''
    while (index2 >= 0) ret += prefix[index2 * 3] + prefix[index2 * 3 + 1] + prefix[index2 * 3 + 2] + prefixes2[index2--]
    if (ret.endsWith('-')) ret = ret.slice(0, ret.length - 1)
    return ret.replace('UM', 'M').replace('UNA', 'NA').replace('UPC', 'PC').replace('UFM', 'FM')
}

var FormatList = [
    '',
    'K',
    'M',
    'B',
    'T',
    'Qa',
    'Qt',
    'Sx',
    'Sp',
    'Oc',
    'No',
    'Dc',
    'UDc',
    'DDc',
    'TDc',
    'QaDc',
    'QtDc',
    'SxDc',
    'SpDc',
    'ODc',
    'NDc',
    'Vg',
    'UVg',
    'DVg',
    'TVg',
    'QaVg',
    'QtVg',
    'SxVg',
    'SpVg',
    'OVg',
    'NVg',
    'Tg',
    'UTg',
    'DTg',
    'TTg',
    'QaTg',
    'QtTg',
    'SxTg',
    'SpTg',
    'OTg',
    'NTg',
    'Qd',
    'UQd',
    'DQd',
    'TQd',
    'QaQd',
    'QtQd',
    'SxQd',
    'SpQd',
    'OQd',
    'NQd',
    'Qi',
    'UQi',
    'DQi',
    'TQi',
    'QaQi',
    'QtQi',
    'SxQi',
    'SpQi',
    'OQi',
    'NQi',
    'Se',
    'USe',
    'DSe',
    'TSe',
    'QaSe',
    'QtSe',
    'SxSe',
    'SpSe',
    'OSe',
    'NSe',
    'St',
    'USt',
    'DSt',
    'TSt',
    'QaSt',
    'QtSt',
    'SxSt',
    'SpSt',
    'OSt',
    'NSt',
    'Og',
    'UOg',
    'DOg',
    'TOg',
    'QaOg',
    'QtOg',
    'SxOg',
    'SpOg',
    'OOg',
    'NOg',
    'Nn',
    'UNn',
    'DNn',
    'TNn',
    'QaNn',
    'QtNn',
    'SxNn',
    'SpNn',
    'ONn',
    'NNn',
    'Ce',
]
export const standard = (num: number, places: number = 3): string => {
    let matissa = num / Math.pow(10, Math.floor(Math.log10(num)))
    let power = Math.floor(Math.log10(num))

    matissa = Number((matissa * Math.pow(10, power % 3)).toFixed(places))
    if (matissa >= 1000) {
        matissa /= 1000
        power++
    }

    if (power <= 303) return matissa + ' ' + FormatList[(power - (power % 3)) / 3]
    else return matissa + ' ' + getAbbreviation(power)
}

export const timeLong = (s: number) => {
    if (s >= 31536000) {
        return (
            Math.floor(s / 31536000) +
            ' years, ' +
            Math.floor((s % 31536000) / 86400) +
            ' days, ' +
            Math.floor((s % 86400) / 3600) +
            ' hours, ' +
            Math.floor((s % 3600) / 60) +
            ' minutes, and ' +
            Math.floor(s % 60) +
            ' seconds'
        )
    } else if (s >= 86400) {
        return (
            Math.floor(s / 86400) +
            ' days, ' +
            Math.floor((s % 86400) / 3600) +
            ' hours, ' +
            Math.floor((s % 3600) / 60) +
            ' minutes, and ' +
            Math.floor(s % 60) +
            ' seconds'
        )
    } else if (s >= 3600) {
        return Math.floor(s / 3600) + ' hours, ' + Math.floor((s % 3600) / 60) + ' minutes, and ' + Math.floor(s % 60) + ' seconds'
    } else if (s >= 60) {
        return Math.floor(s / 60) + ' minutes, and ' + Math.floor(s % 60) + ' seconds'
    } else return Math.floor(s % 60) + ' seconds'
}

const preformat = (int: number) => {
    if (int.toString().length === 1) return '0' + int
    else return int
}

export const timeShort = (s: number) => {
    return preformat(Math.floor(s / 3600)) + ':' + preformat(Math.floor((s % 3600) / 60)) + ':' + preformat(Math.floor(s % 60))
}
