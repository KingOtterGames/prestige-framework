function importAll(r: any) {
    let images = {}
    r.keys().forEach((item: string) => {
        ;(images as any)[item.replace('./', '')] = r(item)
    })
    return images
}

const images = importAll(require.context('../../assets/images/', true))
export const get = (key: string) => {
    return (images as any)[key]
}
