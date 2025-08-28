function Task15(){
    //Count how many times each letter appears in an array of characters
    const letters=['a','b','a','c','b','a'];
    const count=letters.reduce((acc,letter)=>{
        acc[letter]=(acc[letter]||0)+1;
        return acc;
    },{});
    return(
        <>
            <h3 style={{color:"crimson"}}>Task 15: Occurance of letter</h3>
            {
                Object.entries(count).map(([letter,cnt],index)=>
                <li key={index}>{letter}:{cnt}</li>)
            }
        </>
    )
}
export default Task15;
