const controllerName = 'controller.'
export enum dispatches {
    actionExample = controllerName + 'actionExample',
}

// ------------------------------------------------------------------------------------------------------------------------------------
// ---- Built-Ins (These are used in the engine and are required for every controller)
// ------------------------------------------------------------------------------------------------------------------------------------
export const onUpdate = (state, deltaTime) => {
    return state
}

export const onFixedUpdate = (state, deltaTime) => {
    return state
}

// ------------------------------------------------------------------------------------------------------------------------------------
// ---- Actions (State can be altered and utilizes the dispatch events)
// ------------------------------------------------------------------------------------------------------------------------------------
export const actionExample = (state, payload) => {
    return state
}

// ------------------------------------------------------------------------------------------------------------------------------------
// ---- Helpers (State cannot be modified)
// ------------------------------------------------------------------------------------------------------------------------------------
export const helperExample = () => {
    return null
}
