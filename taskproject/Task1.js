function Task1(){
    //Given an array of numbers, return a new array where each number is doubled
    const numbers=[1,3,5,7,9];
    const double=numbers.map(num=> num*2);
    return(
        <>
            <h2 style={{color:"red",fontStyle:"italic"}}>Map</h2>
            <h3 style={{color:"red"}}>Task 1: Double the numbers in array.</h3>
            {
                double.map((num,index)=>
                    <li key={index}>{num}</li>
                )
            }
        </>
    );
}
export default Task1;
