def  narcist_num(num):
    return num == sum([int(x) ** len(str(num)) for x  in str(num)])

print(narcist_num(153))
print(narcist_num(1634))
print(narcist_num(1334))

# print(narcist_num())
# print(narcist_num())
# print(narcist_num())