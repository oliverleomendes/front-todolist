import React, { useState } from 'react';
import "./Login.css";
import axios from 'axios';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await axios.post('http://localhost:4000/usuario/autenticar', {
            "email": username,
            "senha": password
        }).then(response => {
            const dados = response.data;
            
            if(dados.cod == 0) 
                onLogin();
        })
        .catch(error => {
            console.error('Error fetching data:', error)
        })
        
    }

    return(
        <>
            <div className="container mt-5 mb-5 py-4">
                <form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-center">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="text-center">Autenticação</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <label htmlFor="">Usuário:</label>
                                        <input type="text" name="user" id="user" className="form-control" onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>      
                                <div className="row">
                                    <div className="col-md-12">
                                        <label htmlFor="">Senha:</label>
                                        <input type="password" name="password" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>  
                                <div className="row mt-2 mb-2">
                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-success">
                                            Autenticar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>      
                    </div>
                </form>
            </div>
        </>
    )
    
}

export default Login