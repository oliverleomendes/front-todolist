import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";

export default class Main extends Component{
    render(){
        return(
            <main>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </main>
        )
    }
}