import React from "react"

/*function Mohan() {

    const mohan = "hello i am mohan";
  return (
    <div>y
        <h1>{mohan}</h1>
    </div>
  )
}*/

/*function Mohan(){
  return <Headline/>
}

function Headline(){
  const mohan = "hello i am mohan"

  return <h1>{mohan}</h1>
}*/


/*function Mohan(){
  const mohan = " hello i am mohan front-end web developer";
  return < Headline value={mohan}/>
}

function Headline(props){
  return <h1>{props.value}</h1>
}
*/

/*const Mohan = () =>{
  const mohan = "i am front-end developer";
  return <Headline value = {mohan}/>
};

const Headline = ({value}) =>{
    return <h1>{value}</h1>
}*/

/*
const Mohan = () =>{
  const mohan = "i am front-end developer";
  return <Headline value = {mohan}/>
};

const Headline = ({value}) =>
      <h1>{value}</h1>
*/

// react function component usestate

/*const Mohan = () =>{
  return <Headline/>
}

const Headline = () =>{
  const [hello , sethello] = useState("i am a trader");
  const handlechange = event =>sethello(event.target.value)
  return(
  <div>
    <h1>{hello}</h1>
    <input 
      type="text"
      value={hello}  
     // onChange={(event)=> sethello(event.target.value)}
     onchange={handlechange}
     />
  </div>
)
} */

//call back function 

/*const Mohan = () =>{
  const [Hello , setHello] = useState("i am mohan")

  const Handlechange = event => setHello(event.target.remove)
  return (
    <Headline headline={Hello} onChangeHeadline = {Handlechange} />
  )
}

const Headline = ({headline , onChangeHeadline}) => (
  <div>
    <h1>{headline}</h1>
    <input type="text" value={headline} onChange={onChangeHeadline} />
  </div>
)*/

const Mohan = () =>{
  return (
    <Welcome text={{ greeting :"wlcome to my webapplication love " }}/>
  )
}

const Welcome = ({text}) =>{
  return <h1 style={{color:"Skyblue" , backgroundColor:"black"}}>{text.greeting}</h1>
}
 
export default Mohan