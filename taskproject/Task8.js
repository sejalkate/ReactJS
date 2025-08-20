function Task8(){
    //Given an array of strings, return only the strings longer than than 5 characters
    const words=["Rose","Banana","Lily","Watermelon","Papaya","Cherry","Coconut"];
    const longerW=words.filter(name=> name.length>5);
    return(
        <>
            <h3 style={{color:"blue"}}>Task 8: Strings longer than length 5</h3>
            {
                longerW.map((word,index)=>
                <li key={index}>{word}</li>)
            }
        </>
    );
}
export default Task8;
