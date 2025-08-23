function Task10(){
    //Given an array of numbers, filter out negative numbers
    const numbers=[-2,10,0,-5,-3,-20,-15,50];
    const negativeN=numbers.filter(name=>name<0);
    return(
        <>
            <h3 style={{color:"blue"}}>Task 10: Negative numbers in the array.</h3>
            {
                negativeN.map((n,index)=>
                    <li key={index}>{n}</li>
                )
            }
        </>
    );
}
export default Task10;
