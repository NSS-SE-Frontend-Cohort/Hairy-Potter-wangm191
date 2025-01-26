const forSalePottery = []

export const toSellOrNotToSell = (pottery) => {
    if ( pottery.cracked == false ){
        if ( pottery.weight >= 6 ) {
            pottery.price = 40
        }
        else {
            pottery.price = 20
        }
        forSalePottery.push(pottery)
    }

    return pottery
}

export const usePottery = () => JSON.parse(JSON.stringify(forSalePottery));