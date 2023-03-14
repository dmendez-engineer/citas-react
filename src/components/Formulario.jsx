import React from 'react'
import {useState,useEffect} from 'react'
import Error from './Error'
function Formulario({pacientes,setPacientes,pacienteEditar,setPaciente}) {
  
 
  
  //setNombre(paciente.nombre);
  const [nombre,setNombre]=useState('');
  const [nombrePropietario,setNombrePropietario]=useState('');
  const [email,setEmail]=useState('');
  const [alta,setAlta]=useState('');
  const [sintomas,setSintomas]=useState('');

  useEffect(()=>{
    if(Object.keys(pacienteEditar).length>0){//Para detectar que no esté vacío
      
      setNombre(pacienteEditar.nombre);
      setNombrePropietario(pacienteEditar.nombrePropietario);
      setEmail(pacienteEditar.email);
      setAlta(pacienteEditar.alta);
      setSintomas(pacienteEditar.sintomas);
    }
    else{
      console.log("NO hay nada");
    }
  },[pacienteEditar]);

 

  const generarId=()=>{
   return Math.random().toString(36).substring(2);
  }


  

  const [error,setError]=useState(false);

  const handleSubmit=function(e){
    
    e.preventDefault();
    
    //Validacion del formulario
    if([nombre,nombrePropietario,email,alta,sintomas].includes('')){
      console.log("Hay al menos un campo vacío");
      setError(true);
    }else{
      setError(false);
      console.log("Todos llenos");
    }
    const objetoPaciente={
      nombre:nombre,
      nombrePropietario:nombrePropietario,
      email:email,
      alta:alta,
      sintomas:sintomas
  }

    if(pacienteEditar.id){
      //Cuando edita el registro
      objetoPaciente.id=pacienteEditar.id;

      const pacientesActualizados=pacientes.map(pacientep=>pacientep.id===pacienteEditar.id?objetoPaciente:pacientep);
      setPacientes(pacientesActualizados);
      setPaciente({});

    }else{
      //Cuando agrega un nuevo registro 
      objetoPaciente.id=generarId();
      setPacientes([...pacientes,objetoPaciente]);
    }

    

    //Reiniciar nombre
    setNombre('');
    setNombrePropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');
  }
  
  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
    <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
    <p className='text-lg mt-5 text-center mb-10'>Añade Pacientes y {""}
    <span className='text-indigo-600 font-bold'>Administralos</span>
    </p>

    <form 
      onSubmit={handleSubmit}
      className='bg-whtite shadow-md rounded-lg py-10 px-5 mb-10'>

      {error && <Error>
                  <p>"Todos los campos son obligatorios"</p>
                </Error>                
      }

      <div className='mb-5'>
        <label className='block text-gray-700 uppercase font-bold'
        htmlFor="nombreMascota"
        >Nombre Mascota:</label>
        <input type="text"
        id="nombreMascota"
        name="nombreMascota"
        placeholder='Nombre de la mascota'
        className='border-2 w-full p-2 mt-2
         placeholder-gray-400 rounded-md'
         value={nombre}
         onChange={ (e)=>setNombre(e.target.value) }
        />
      </div>

      <div className='mb-5'>
        <label className='block text-gray-700 uppercase font-bold'
        htmlFor="nombrePropietario"
        >Nombre del Propietario</label>
        <input type="text"
        id="nombrePropietario"
        name="nombrePropietario"
        placeholder='Nombre del propietario'
        className='border-2 w-full p-2 mt-2
         placeholder-gray-400 rounded-md'
         value={nombrePropietario}
         onChange={ (e)=>setNombrePropietario(e.target.value) }
        />
      </div>


      <div className='mb-5'>
        <label className='block text-gray-700 uppercase font-bold'
        htmlFor="email"
        >Email</label>
        <input type="email"
        id="email"
        name="email"
        placeholder='Email contacto propietario'
        className='border-2 w-full p-2 mt-2
         placeholder-gray-400 rounded-md'
         value={email}
         onChange={ (e)=>setEmail(e.target.value) }
        />
      </div>

      <div className='mb-5'>
        <label className='block text-gray-700 uppercase font-bold'
        htmlFor="alta"
        >Alta</label>
        <input type="date"
        id="alta"
        name="alta"
        className='border-2 w-full p-2 mt-2
         placeholder-gray-400 rounded-md'
         value={alta}
         onChange={ (e)=>setAlta(e.target.value) }
        />
      </div>


      <div className='mb-5'>
        <label className='block text-gray-700 uppercase font-bold'
        htmlFor="sintomas"
        >Sintomas</label>
        <textarea
        id="sintomas"
        className='border-2 w-full p-2 mt-2
         placeholder-gray-400 rounded-md'
         placeholder='Describe los Síntomas'
         value={sintomas}
         onChange={ (e)=>setSintomas(e.target.value) }
        >
        
        </textarea>
      </div>


      <input type="submit" className='bg-indigo-600 w-full p-3
       text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer' 
       value={pacienteEditar.id ? "Editar Paciente": "Agregar Paciente"}/>

    </form>

    </div>
  )
}

export default Formulario