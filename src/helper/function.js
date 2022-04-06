const shorten = (title) => {
    const splitedTitl = title.split(" ");
    const newTitle = `${splitedTitl[0]} ${splitedTitl[1]}`
    return newTitle;
}
 const isInCArt = (state, id) => {
    const result = !!state.seclectedItems.find(item => item.id === id)
    return result;
}
const quantityCount = (state, id) => {
    const index = state.seclectedItems.findIndex(item => item.id === id)
    if (index === -1){
        return false
    }else {
        return state.seclectedItems[index].quantity;
    }
}
export {shorten , isInCArt, quantityCount}