import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";

export default class Main extends Component{
    render(){
        return(
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        )
    }
}