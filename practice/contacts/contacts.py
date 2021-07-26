#!/usr/bin/python

import sys
import re

n = int(sys.stdin.readline())
contacts = ""

for i in range(n):
    [command,name] = sys.stdin.readline().strip().split(' ')

    if command == "add":
        contacts = contacts + name + ","
    elif command == "find":
        pattern = "(^|,)" + re.escape(name)
        print(len(re.findall(pattern, contacts)))

