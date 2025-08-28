function Task16(){
    //You are given an array of product objects, where each object contains name and price properties. 
    //Using the reduce method, calculate the total price of all products in the array and 
    //store it in a variable called totalprice.
    const products=[{name:"Laptop",price:500},{name:"Phone",price:300},{name:"PC",price:200}];
    const totalPrice=products.reduce((total,product)=>total+product.price,0);
    return(
        <>
            <h3 style={{color:"crimson"}}>Task 16: Total price of all products.</h3>
            <p>Total Price: {totalPrice}</p>
        </>
    );
}
export default Task16;
