import React from 'react'
import Paciente from './Paciente'
import {useState,useEffect} from 'react'

function ListaPacientes({pacientes,setPaciente,EliminarPaciente}) {
  
 
 /* useEffect(()=>{
    if(pacientes.length>0){
      console.log("Paciente agregado");
    }
  },[pacientes]);*/
  
  return (

    <div className='md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll'>
    
    {pacientes && pacientes.length?(
     <div>
        <h2 className='font-black text-3xl text-center'>Listado de pacientes</h2>
      <p className='text-3xl mt-5 mb-10 text-center' >Administra tus {""}
        <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
      </p>
        
      {pacientes.map((p)=>(
          
          <Paciente 
          key={p.id}
          paciente={p}
          setPaciente={setPaciente}
          EliminarPaciente={EliminarPaciente}
          />
      ))} 
    
      </div>
    ):(
      <div>
      <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
      <p className='text-3xl mt-5 mb-10 text-center' >Comienza a agregar pacientes
        <span className='text-indigo-600 font-bold'>y aparecerá en este lugar</span>
      </p>
      </div>
    )}
    
    
    
      

    
    </div>
  )
}

export default ListaPacientes