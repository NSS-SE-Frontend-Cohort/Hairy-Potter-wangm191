import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {
    const soldPottery = usePottery();
    let potteryListHtml = '';

    soldPottery.forEach(pottery => {
        potteryListHtml += `
        <section class="pottery" id="${pottery.id}">
            <h2 class="pottery__shape">${pottery.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
            </div>
            <div class="pottery__price">Price is $${pottery.price}</div>
        </section>
        `;
    });
    
    const potteryListString = document.getElementById('potteryList')

    if (potteryListString) {
        potteryListString.innerHTML = potteryListHtml
    }
    else {
        console.error('Could not find element with id "potteryList"');
    }

    return potteryListString
}

