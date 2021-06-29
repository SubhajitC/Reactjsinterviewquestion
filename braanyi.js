let foods = {
    foodItems:[
        {
            name:"Biriyani",
            categoryID:"1234"
        },
        {
            name:"Paneer",
            categoryID:"3456"
        }
    ],
    categories:[
        {
            name:"Veg",
            id:"3456"
        },
        {
            name:"Non-Veg",
            id:"1234"
        }
    ]
}
let {foodItems,categories} = foods;
let result = [];
foodItems.forEach(data => {
    let obj ={...data} 
    const index = categories.findIndex(x => x.id == data.categoryID);
    if(index > -1){
      obj['categoryName'] = categories[index]['name']
      result.push(obj)
    }
})
console.log(result)