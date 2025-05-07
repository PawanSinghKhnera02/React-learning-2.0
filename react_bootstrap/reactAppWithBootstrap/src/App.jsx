import { Component, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Container, Row, Col, Card, CardBody, Button } from "react-bootstrap";
import { blog } from "./Data/blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCoffee, faUser} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTwitter, faWhatsapp} from "@fortawesome/free-brands-svg-icons"

function App() {
  let headerInfo = {
    email: "pk@gmail.com",
    phone: 96564453434,
  };
  return (
    <>
      <FontAwesomeIcon icon= {faUser}/>
      <FontAwesomeIcon icon= {faCoffee}/>
      <FontAwesomeIcon icon= {faWhatsapp }/>
      <FontAwesomeIcon icon= {faFacebook}/>
      <FontAwesomeIcon icon= {faTwitter}/>
      <h1>Welcome to react learning</h1>
      {/* first prop */}
      {/* <Header props= "prop for header"/>   */}
      {/* second prop  */}
      <Header headerInfo={headerInfo} cname="PkTech">
        <h1> Welcome to Header Section  <FontAwesomeIcon icon= {faUser}/></h1>
      </Header>
      <div>
        {/* <MyButton1/> */}
        <h1 className="text-danger">Welcome to Home Page</h1>
        <div className="main">
          {/* <Card propsName= "pawan"/>
        <Card/>
        <Card/>
        <Card/> */}
        </div>
        {/* <MyButton/> */}
        {/* <Video/> */}
      </div>
      <Container>
        <Row>
            {blog.map((v,i)=>{
              return(
                <ProductItems pitems={v} key={i} />
              )
            })}
           
    

          
        </Row>
      </Container>
    </>
  );
}

export default App;

// function Card(p) {
//   return (
//      <div className="card">Card Div {p.propsName}</div>
//   )
// }

// function MyButton1() {
//   function handleClick() {
//     alert('I am clicked!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }

function ProductItems({pitems}) {
  return (
    <>
      <div className="col-log-3 mb-4 ">
        <Card >
          <Card.Body>
            <Card.Title>{pitems.title}</Card.Title>
            <Card.Text>This is a sample card.<FontAwesomeIcon icon= {faFacebook}/></Card.Text>
            <Button variant="primary">Click Me</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

// video Component

// function Video({ video }) {
//   return (
//     <div>
//       <Thumbnail video={video} />
//       <a href={video.url}>
//         <h3>{video.title}</h3>
//         <p>{video.description}</p>
//       </a>
//       <LikeButton video={video} />
//     </div>
//   );
// }

//excute both button together====>

// export default function MyApp() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>Counters that update together</h1>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </div>
//   );
// }

// function MyButton({ count, onClick }) {
//   return (
//     <button onClick={onClick}>
//       Clicked {count} times
//     </button>
//   );
// }
