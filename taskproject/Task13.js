function Task13(){
    //Given an array of numbers, find the sum of all numbers
    const numbers=[10,20,30,40,50];
    const sum=numbers.reduce((total,num)=> total+num,0);
    return(
        <>
            <h2 style={{color:"crimson",fontStyle:"italic"}}>Reduce</h2>
            <h3 style={{color:"crimson"}}>Task 13: Sum of all the numbers in array.</h3>
            <p>Sum: {sum}</p>
        </>
    );
}
export default Task13;
