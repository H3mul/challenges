#!/bin/bash

script=$1

function msg () {
    echo $* >&2
}
function die () {
    msg $*
    exit 1
}

inputs=(testcases/input/*)
outputs=(testcases/output/*)

[ -f "$script" ] || die "No script found to test"

for ((i=0;i<${#inputs[@]};i++)); do
    input="${inputs[i]}"
    expected_output=$(cat "${outputs[i]}")

    output=$(./$script < "$input")

    if [ "$output" == "$expected_output" ]; then
        msg "[+] Test $input successful"
    else
        msg "[-] Test $input unsuccessful"
    fi
done
