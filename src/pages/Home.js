import React from "react";
import Carusal from "src/components/Carusal";
import Nav from "src/components/Nav";

const Home = () => {
   return (
    <div>
        <Nav/>

        <Carusal/>
        <div><h1>Test</h1></div>
        <div><h1>Test 2</h1></div>
    </div>
   );
};

export default Home;