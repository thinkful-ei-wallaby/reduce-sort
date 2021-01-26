//Reduce
let itemPrices = [{item:'shirt', price: 5},{item:'pants', price: 15},{item:'socks', price: 6},{item:'hat', price: 20}];

/*let total =0;
for(let i =0; i< itemPrices.length;i++){
    total+=itemPrices[i];
}
console.log(total);*/
/*let total = itemPrices.reduce((total, item)=>{
    console.log("total",total);
    console.log("price",item.price);
    
    return total + item.price;
},0);
console.log(total);*/

//Grouping objects by property
/*let people = [
    { name: 'Bob', age: 21, height: 6 },
    { name: 'Max', age: 20, height: 5 },
    { name: 'Jane', age: 20, height:4 },
    { name: 'Bob', age: 25, height:4 }
  ];

function groupBy(arr, groupBy){
    return arr.reduce((total, item)=>{
        //{age:''}
        let key = item[groupBy];
        console.log(key);
        console.log(groupBy);
 
        if(!total[key]){
            total[key]=[];      
             console.log('total[groupBy]',total[key]);
        }
        total[key].push(item);
        
        return total;

    },{});

}


console.log('group by age',groupBy(people,'name'));

*/


//Sort
let animals =  [{"species":"Goose","weight":9},{"species":"Raccoon","weight":12},{"species":"Hog","weight":204},{"species":"Moose","weight":620}];


let sorted=[];
for(let i =0; i< animals.length;i++){
    //Step through list of animals
    let added = false;
    for(let j =0; j< sorted.length && !added; j++){
        if(animals[i].weight < sorted[j].weight){
            sorted.splice(j, 0, animals[i] );
            added=true;
        }
    }
    if(!added){
        sorted.push(animals[i]);
    }
}
console.log(sorted);


animals.sort((firstAnimal, secondAnimal)=>{
    console.log("firstAnimal",firstAnimal);
    console.log("secondAnimal",secondAnimal);
    if(firstAnimal.weight >secondAnimal.weight){
          console.log("animalsarr",animals);
          return -1;
      
    } else{ 
        console.log("animalsarr",animals)
        return 1;
    }
   
})
console.log("final",animals);