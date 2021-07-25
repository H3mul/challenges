const brackets = require('./brackets.js');



describe('all brackets tests are successful', () => {

    const input_output = {
        "{[()]}": "YES",
        "{[(])}": "NO",
        "{{[[(())]]}}": "YES",
        "{{[[(())]]}": "NO",
        "{{([])}}": "YES",
        "{{)[](}}": "NO",
        "{(([])[])[]}": "YES",
        "{(([])[])[]]}": "NO",
        "{(([])[])[]}[]": "YES",
    };

    for (const [input, output] of Object.entries(input_output)) {
        test('correct response: ' + input + ' => ' + output, () => {
            expect(brackets(input)).toBe(output);
        })
    }
});
