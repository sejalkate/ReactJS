function Task4(){
    //Convert an array of temperatures in Celcius to Fahrenheit using the formula F=C*9/5+32
    const celciusTemp=[0,20,50,100,500];
    const fahrenheitTemp=celciusTemp.map(temp=>(temp*9/5)+32);
    return(
        <>
            <h3 style={{color:"red"}}>Task 4: Convert temperature in Celcius to Fahrenheit.</h3>
            {
                fahrenheitTemp.map((f,index)=>
                    <li key={index}>{f}</li>
                )
            }
        </>
    );
}
export default Task4;
