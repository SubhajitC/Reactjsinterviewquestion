f_str = "sucess"

res = {i : f_str.count(i) for i in set(f_str)}
print("count all character in sucess is :\n"  + str(res))


