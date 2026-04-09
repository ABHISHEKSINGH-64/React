// function App(){
//   return(
//     <>
//     <h1>Hello World</h1>
//     <p>I am Learning React</p>
//     </>
//   );
// }




function App(){
 
  return(
         <>
          <Child name="Abhisehk" age={18} />
         </>
  );
}
function Child(props){
  const nameVar=props.name
  const ageVar = props.age
  return(
       <>
       <GrandChild name={nameVar} age={ageVar} />
       </>  
  )
}

function GrandChild(props){
  return(
    <>
    <h1>Hello World</h1>
    <p>Name : {props.name}</p>
    <p>Age : {props.age}</p>
    </>
  );
}

function App() {
  const isLogin = true;
  return(
    <>
    {isLogin ? <h1>Welcome</h1> : <h2>Please Login</h2>}
  
    </>
  );
}
export default App;

