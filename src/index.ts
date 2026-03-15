import "dotenv/config"
import logger from "./logger.js"
logger.debug("HELLO WORLD")
const a: number = 10
// logger.error("ERROR " + a)

function getParameters(): number[] {
    const firstNumberStr = process.argv[2]
    logger.debug("First number is " + firstNumberStr)
    if (!firstNumberStr)
        throw Error("First number is missing")
    const firstNumber = parseInt(firstNumberStr)
    if (isNaN(firstNumber))
        throw Error("First number is not a number")
    const secondNumberStr = process.argv[3]
    logger.debug("Second number is " + secondNumberStr)
    if (!secondNumberStr)
        throw Error("Second number is missing")
    const secondNumber = parseInt(secondNumberStr)
    if (isNaN(secondNumber))
        throw Error("Second number is not a number")
    return [firstNumber, secondNumber]

}

function sum(firstNumber: number, secondNumber: number) {
    return firstNumber + secondNumber

}

function main() {
    try {
        const [firstNumber, secondNumber] = getParameters()
        const result = sum(firstNumber, secondNumber)
        console.log(result)
    }
    catch (error) {
        if (error instanceof Error)
            logger.error(error.message)
        else
            logger.error("Unknown error")

    }
}

main()