/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number) => number * 3);
    return numbers.length === 0 ? [] : tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str: string) => {
        const num = parseInt(str, 10);
        return isNaN(num) ? 0 : num;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((str) => {
        const cleanedStr = str.startsWith("$") ? str.slice(1) : str; // Remove "$" if present
        const num = parseInt(cleanedStr, 10);
        return isNaN(num) ? 0 : num;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shout = messages.map((message) => {
        if (message.endsWith("!")) {
            return message.toUpperCase();
        }
        return message;
    });
    const filtered = shout.filter((message) => !message.endsWith("?"));
    return messages.length === 0 ? [] : filtered;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word) => word.length < 4);
    const count = shortWords.length;
    return words.length === 0 ? 0 : count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const validColors = ["red", "blue", "green"];
    const allValid = colors.every((color) => validColors.includes(color));
    return colors.length === 0 ? true : allValid;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((acc, number) => acc + number, 0);
    const addendString = addends.length > 0 ? addends.join("+") : "0";
    return addends.length === 0 ? "0=0" : `${sum}=${addendString}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const result = values.reduce<{
        sum: number;
        arr: number[];
        inserted: boolean;
    }>(
        ({ sum, arr, inserted }, current) => {
            if (!inserted && current < 0) {
                return {
                    sum: sum + current,
                    arr: arr.concat([current, sum]),
                    inserted: true,
                };
            }
            return { sum: sum + current, arr: arr.concat([current]), inserted };
        },
        { sum: 0, arr: [], inserted: false },
    );

    return result.inserted ? result.arr : result.arr.concat([result.sum]);
}
