"use client";
import {useState} from "react";

export default function Login(){
 const [nome,setNome]=useState("");
 const [telefone,setTelefone]=useState("");

 return (
  <main>
   <h1>Cadastro</h1>
   <input placeholder="Nome" onChange={e=>setNome(e.target.value)}/>
   <input placeholder="Telefone" onChange={e=>setTelefone(e.target.value)}/>
   <button>Cadastrar</button>
  </main>
 );
}