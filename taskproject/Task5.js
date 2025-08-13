function Task5(){
    //Given an array of numbers, return a new array of their squares
    const numbers=[1,2,3,4,5,6,7,8,9,10];
    const squares=numbers.map(num=>num**2);
    return(
        <>
            <h3 style={{color:"red"}}>Task 5: Square the numbers in array.</h3>
            {
                squares.map((s,index)=>
                    <li key={index}>{s}</li>
                )
            }
        </>
    );
}
export default Task5;
