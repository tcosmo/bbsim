from os import listdir
from os.path import isfile, join

import base64

MACHINE_PATH = "../machines"

js_content_to_write = "const presetMachines = {"

for machine_name in listdir(MACHINE_PATH):
    fname = join(MACHINE_PATH, machine_name)
    if not isfile(fname):
        continue

    js_content_to_write += f"'{machine_name}':"

    with open(fname, "r") as f:
        file_content = f.read()
        b64 = base64.b64encode(bytes(file_content, "utf-8")).decode("utf-8")
        js_content_to_write += f"'{b64}',\n"

js_content_to_write += "}\n \
const defaultMachine = 'powers_of_two_5_4.txt';\n \
var sel = document.getElementById('select-preset');\n \
\n\
Object.keys(presetMachines)\n\
    .sort()\n\
    .forEach(function (machineName, i) {\n\
        var opt = document.createElement('option');\n\
        opt.appendChild(document.createTextNode(machineName));\n\
        if (machineName === defaultMachine) {\n\
            opt.selected = true;\n\
        }\n\
        sel.appendChild(opt);\n\
    });\n\
"

with open("preset_machines.js", "w") as f:
    f.write(js_content_to_write)
