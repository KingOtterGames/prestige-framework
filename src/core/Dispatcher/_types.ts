export interface Action {
    func: Function
    payload: object
}

export interface Module {
    onUpdate: Function
    onFixedUpdate: Function
}
