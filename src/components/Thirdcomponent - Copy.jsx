const Thirdcomponent = () =>{
    // Variables help us to create dynamic websites.(It means the contents of the websites will be changing over time).
    // Below we declare variables.NOTE:variables are usually declared just before the return statement in Reactjs.
    let name = "Keya";
    let age = 18;
    let message = "I love programming!"





    return(
        <div className="Thirdcomponent">
           <h1>Welcome to my third component</h1>
           {/*Below we bind the variables.We use the variable names to declare the variables we had declered before */}
           <h5>My name is: {name}</h5>
           <h5>My age is: {age}</h5>
           <h5>And {message}</h5>
        </div>
    )
}
export default Thirdcomponent;