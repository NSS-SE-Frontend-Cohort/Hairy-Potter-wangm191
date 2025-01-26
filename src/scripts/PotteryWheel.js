let primaryKey = 1

export const makePottery = (shape, weight, height) => {
    const pottery = {
        id: primaryKey,
        shape: shape,
        weight: weight, 
        height: height
    }
    primaryKey ++;

    return pottery;
}