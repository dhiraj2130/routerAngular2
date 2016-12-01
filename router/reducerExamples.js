/**
 * Created by dhiraj.kumar on 24/11/2016.
 */
// sum array items
var ary =[1,2,3,4,5];
var reducer = function(aggregator,item){
    aggregator = aggregator + item;
    return aggregator;
}
var sum = ary.reduce(reducer,0);
console.log(sum);

//create groups of items
var votesArray = ['a','a','b','b','b','c'];
var votesReducer = function(accumulator,item){
    if(!accumulator[item]){
        accumulator[item]=1;
    }else{
        accumulator[item] = accumulator[item] + 1;
    }
return accumulator;
}
var votesArray = votesArray.reduce(votesReducer,{});
console.log(votesArray);

//map example

var mapArray =  [2,4,6];
var resultArray = mapArray.map(function(item){ return item * 2;});
console.log(resultArray);

var resultShorhandArray = mapArray.map( (item) => { return item *2 });
console.log(resultShorhandArray);

var resultShorhandArray = mapArray.map( item =>  item *2 );
console.log(resultShorhandArray);

// filter array

var filterArray =[1,2,3,4,5,6];
var filteredArray = filterArray.filter(function(item){ return item % 2 === 0})
console.log(filteredArray);

filteredArray = filterArray.filter(item => (item %2 === 0));
console.log(filteredArray);

var meanArray = [1,2,3,4,5,3,2];
var meanReducer = function(accumulator,item,index,meanArray){

    accumulator = accumulator + item;
    if(index === meanArray.length-1){
        return accumulator / meanArray.length;
    }
 return accumulator;

}

var meanResult = mapArray.reduce(meanReducer,0);
console.log(meanResult);

var starwars = [{
    name:"star1",
    address:['add1','add2','add3']
},{
    name:"star2",
    address:['add1','add2','add4']
}];

var starwarreducer = function(accumulator,item){
    return accumulator;
}







