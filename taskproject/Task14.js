function Task14(){
    //Given an array of numbers, find the largest number
    const numbers=[10,3,56,2,99];
    const largest=numbers.reduce((max,num)=>(num>max?num:max),numbers[0]);
    return(
        <>
            <h3 style={{color:"crimson"}}>Task 14: Largest number from the array</h3>
            <p>Largest: {largest}</p>
        </>
    )
}
export default Task14;
