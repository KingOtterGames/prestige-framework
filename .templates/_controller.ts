// @ts-nocheck
export const add = (dispatch: React.Dispatch<Action>, currency: Currencies.types.Currencies, amount: number) => {
    const payload: Currencies.actions.addPayloadType = {
        currency,
        amount,
    }

    dispatch({
        func: Currencies.actions.add,
        payload,
    })
}
