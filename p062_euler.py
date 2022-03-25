#
from datetime import datetime, timedelta

##################################################################
print("Solving projecteuler problem #062, Python solution #1")
start_time = datetime.now()
from itertools import count

cubes = {} 

def find(N):
    for n in count(start=345):
        key = ''.join(sorted(str(n*n*n)))
        if key in cubes:
            value = cubes[key]
            value[0] += 1
            if value[0] >= N:
                return value[1]**3
        else:
            cubes[key] = [1, n]

print(find(5))
dur_ms = ((datetime.now() - start_time).total_seconds())*1000
print('> duration in ms: {}'.format(dur_ms) )

##################################################################
import math
print("Solving projecteuler problem #062, Python solution #2")
start_time = datetime.now()
# parameters can be changed with these two variables
max_permutations = 5
upper_limit = 10000
number_code_dict = {}

for i in range(upper_limit):
    cube_value = int(math.pow(i, 3))

    # create a string of ordered digits for the dictionary key
    cube_value = "".join(sorted(str(cube_value)))

    if cube_value in number_code_dict:
        number_code_dict[cube_value].append(i)

        # test whether to print results and exit
        if len(number_code_dict[cube_value]) == max_permutations:
            print("Results:")
            for j in number_code_dict[cube_value]:
                print(j, "^3 =", int(math.pow(j, 3)))
            break
    else:
        # create new dictionary entry
        number_code_dict[cube_value] = [i]
dur_ms = ((datetime.now() - start_time).total_seconds())*1000
print('> duration in ms: {}'.format(dur_ms) )

##################################################################
print("Solving projecteuler problem #062, Python solution #3")
start_time = datetime.now()
main_dict = {}
sub_dict = {}
i = 2
while 5 not in main_dict.values():
    t = str(sorted(str(i ** 3)))
    if t in main_dict.keys():
        main_dict[t] += 1
        sub_dict[t].append(i)
    else:
        main_dict[t] = 1
        sub_dict[t] = [i]
    i += 1
for i in main_dict.keys():
    if main_dict[i] == 5:
        print(min([k**3 for k in sub_dict[i]]))        
dur_ms = ((datetime.now() - start_time).total_seconds())*1000
print('> duration in ms: {}'.format(dur_ms) )
