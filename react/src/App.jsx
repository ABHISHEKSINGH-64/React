// function App(){
//   return(
//     <>
//     <h1>Hello World</h1>
//     <p>I am Learning React</p>
//     </>
//   );
// }

export default App


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
