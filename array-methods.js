const games=[
    {title:'Pokemon Go', platform:'mobile',rating:3.5},
    {title:'Resident Evil 2 (Remake)', platform:'PS',rating:4.5},
    {title:'Monopoly', platform:'tabletop',rating:5},
    {title:'Dungeons & Dragons', platform:'tabletop',rating:4.5},
    {title:'Fable', platform:'Xbox',rating:4.2},
    {title:'The Sims', platform:'PC',rating:3.0},
    {title:'The Last Of Us 2', platform:'PS',rating:2.5},
]


//Find Monopoly
let monopoly = games.find((game)=>game.title =='Monopoly');
console.log(monopoly);

//Find first game with a rating > 4
let firstHighlyRankedGame = games.find((game)=>game.rating > 4);
console.log(firstHighlyRankedGame);

//Filter games to get all games with a rating > 4
let highlyRankedGames = games.filter((game)=> game.rating> 4);
console.log(highlyRankedGames);

//Get a List of game titles using the map() function
let gameTitles = games.map((game)=>game.title);
console.log(gameTitles);

//Use the some() function to see if there are games in this list that can be played without a console (tabletop)
let anyTableGames = games.some((game)=> game.platform=='tabletop');
console.log(anyTableGames);  //true

//Check if every game can be played on the PS using the every() function
let areAllGamesPS = games.every((game)=> game.platform =='PS');
console.log(areAllGamesPS); //false

//Sort games based on rating (lowest to highest)
games.sort((a,b)=>a.rating-b.rating);
console.log(games);

//Sort games based on platform (sorting strings using the > or <)
games.sort((a,b)=>a.platform.toLowerCase() > b.platform.toLowerCase()? 1:-1);
console.log(games);


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

//use reduce to group games by platform
let groupedGames = groupBy(games,'platform');
console.log(groupedGames);