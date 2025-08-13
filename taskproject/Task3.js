function Task3(){
    //Given an array of names,return a new array with "Hello" added before each name
    const names=["Sejal","Diksha","Vaishnavi","Sakshi","Anita"];
    const added=names.map(name=>`Hello ${name}`);
    return(
        <>
            <h3 style={{color:"red"}}>Task 3: Concate the word to strings in array.</h3>
            {
                added.map((added,index)=>
                <li key={index}>{added}</li>)
            }
        </>
    );
}
export default Task3;
