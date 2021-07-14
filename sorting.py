def Sort_Tuple(tup):  
      
    # getting length of list of tuples 
    lst = len(tup)  
    for i in range(0, lst):  
          
        for j in range(0, lst-i-1):  
            if (tup[j][1] > tup[j + 1][1]):  
                temp = tup[j]  
                tup[j]= tup[j + 1]  
                tup[j + 1]= temp  
    return tup  
  
tup =[('4', 10), ('2', 65), ('8', 20), ('1', 15)]
print(Sort_Tuple(tup))
# tup =[('1',3),('2',6),('5',8)]
# print(Sort_Tuple(tup))        
 