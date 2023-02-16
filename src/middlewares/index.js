export const logger = (store) => (next) => (action) => {
    console.log(action)
    next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
    // const featured = [{ name: 'eddie' }, ...actionInfo.action.payload]
    console.log(actionInfo)
    // const updatedAction = { ...actionInfo, action: { ...actionInfo, payload: featured }}
    next(actionInfo)
}