function Task9(){
    //From an array of names, return only the names that start with the letter "A"
    const names=["Sejal","Achal","Krushna","Akash","Anita","Akshay","Ankita"];
    const anames=names.filter(name=>name.startsWith("A"));
    return(
        <>
            <h3 style={{color:"blue"}}>Task 9: Strings starts with letter "A" in array.</h3>
            {
                anames.map((n,index)=>
                    <li key={index}>{n}</li>
                )
            }
        </>
    );
}
export default Task9;
