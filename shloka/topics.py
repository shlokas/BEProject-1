import re
f = open("subject.txt", "r")
count = 0
for x in f:
    mat = re.findall('^\d+(\.\d)', x)
    if mat: 
        count += 1
print count