// Imports go first
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"
import { makePottery } from "./PotteryWheel.js"

// Make 5 pieces of pottery at the wheel
const mug = makePottery("Mug", 1, 3)
const plate = makePottery("Plate", 2, 1)
const bowl = makePottery("Bowl", 10, 5)
const pan = makePottery("Pan", 7, 3)
const tray = makePottery("Tray", 4, 1)

console.log(mug)
console.log(plate)
console.log(bowl)
console.log(pan)
console.log(tray)

// Fire each piece of pottery in the kiln
const fireMug = firePottery(mug, 2000)
const firePlate = firePottery(plate, 2500)
const fireBowl = firePottery(bowl, 2200)
const firePan = firePottery(pan, 1500)
const fireTray = firePottery(tray, 3000)

console.log(fireMug)
console.log(firePlate)
console.log(fireBowl)
console.log(firePan)
console.log(fireTray)

// Determine which ones should be sold, and their price
const sellMug = toSellOrNotToSell(mug)
const sellPlate = toSellOrNotToSell(plate)
const sellBowl = toSellOrNotToSell(bowl)
const sellPan = toSellOrNotToSell(pan)
const sellTray = toSellOrNotToSell(tray)

console.log(sellMug)
console.log(sellPlate)
console.log(sellBowl)
console.log(sellPan)
console.log(sellTray)
const soldPottery = usePottery()
console.log(soldPottery)

// Invoke the component function that renders the HTML list
const list = PotteryList();
console.log(list);