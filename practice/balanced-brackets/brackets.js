const BRACKETS =  "[{(]})";

function bracketsBool(string) {
    const bracketTracker = [];
    let charTracker = 0;

    for (const char of string) {
        if (!BRACKETS.includes(char)) continue;

        const idx = BRACKETS.indexOf(char);
        const key = idx % 3;
        const open = idx < 3;

        if (open) {
            bracketTracker.push(key);
        }
        else {
            const last = bracketTracker.pop();
            if (last != key) {
                printErrorWithPointer("unbalanced bracket found", string, charTracker);
                return false;
            }
        }
        charTracker++;
    }
    if (bracketTracker.length > 0)
        printErrorWithPointer("Not enough brackets to balance", string, charTracker);
    return bracketTracker.length === 0;
}

function printErrorWithPointer(message, string, location) {
    console.log("Error: " + message + ":\n" +
        string + "\n" +
        Array(location + 1).join(' ') + '^');
}

function brackets(string) {
    const result = bracketsBool(string);
    if (result === undefined) return
    return (result) ? "YES" : "NO";
}

function bracketsSTDIN(string) {
    const lines = string.split('\n');

    const n = lines.pop();
    if (lines.lenght !== n) return;
    let result = "";
    for (let i = 0; i < n; i++) {
        result += brackets(lines.pop()) + '\n';
    }
    return result;
}


module.exports = brackets;
