import React from 'react'

const Love = () => {

   const[greeting , setgreeting] = React.useState("welcome to my web page")
   const[isShow , setShow] = React.useState(true)

   const HandleToggle = () =>{
    setShow(!isShow)
   }

   const handlechange = (event) =>{
    setgreeting(event.target.value)
   }
  return (
    <div>
        <button onClick={HandleToggle} type='button'>
           Toggle
        </button>
        <input type='text' value={greeting} onChange={handlechange}/>

        {isShow? <Welcome text={greeting}/> : null}
    </div>
  )
}

const Welcome = ({text}) => {
    return <h1>{text}</h1>
} 

/*const Love = () => {
  const greeting = {
    title: 'React',
    description: 'Your component library for ...',
  };

  return (
    <div>
      <Welcome {...greeting} />
    </div>
  );
};

const Welcome = ({ title, description }) => {
  return (
    <div>
      <Headline title={`Welcome to ${title}`} />
      <Description paragraph={description} />
    </div>
  );
};

const Headline = ({ title }) => <h1>{title}</h1>;
const Description = ({ paragraph }) => <p>{paragraph}</p>; */

/*const Love = () => {
  const title = 'React';
  const description = 'Your component library for ...';

  return (
    <div>
      <Welcome title={title} description={description} />
    </div>
  );
};

const Welcome = (props) => {
  return (
    <div style={{
      border: '1px solid black',
      height: '200px',
      width: '400px',
    }}>
      <Message {...props} />
    </div>
  );
};

const Message = ({ title, description }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
}*/

export default Love