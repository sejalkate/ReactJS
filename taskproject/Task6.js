function Task6(){
    //Given an array of numbers, return only the even numbers
    const numbers=[10,22,45,66,87,48,99,56];
    const even=numbers.filter(num=>num%2===0);
    return(
        <>
            <h2 style={{color:"blue",fontStyle:"italic"}}>Filter</h2>
            <h3 style={{color:"blue"}}>Task 6: Even numbers in array.</h3>
            {
                even.map((num,index)=>
                <li key={index}>{num}</li>)
            }
        </>
    );
}
export default Task6;
