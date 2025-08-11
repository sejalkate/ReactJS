function Task2(){
    //Given an array of strings,return a new array with all strings in uppercase
    const words=["jaVa","pyThoN","c","c++","mySql"];
    const upper=words.map(word=> word.toUpperCase());
    return(
        <>
            <h3 style={{color:"red"}}>Task 2: Uppercase the strings in array.</h3>
            {
                upper.map((word,index)=>
                <li key={index}>{word}</li>)
            }
        </>
    );
}
export default Task2;
