export const format = (moduleName: string, functionName: Function) => {
    return moduleName + '.' + functionName.name
}
