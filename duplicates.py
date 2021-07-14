arr = ['q','a','b','c','d','e','q','a','d']
vee = []
for v in range(0,len(arr)):
    for h in range(v+1,len(arr)):
        if(arr[v] == arr[h]):
            # print(arr[h]);
            # print({arr[h]});
            vee.append(arr[h])

print(vee)        

      





            