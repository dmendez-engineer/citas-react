import './App.css'
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListaPacientes from './components/ListaPacientes';
import {useState,useEffect} from 'react';
function App() {
  
  const [pacientes,setPacientes]=useState([]);
  const [paciente,setPaciente]=useState({});

  useEffect(()=>{
      const obtenerLS=()=>{
        const pacientesLS=JSON.parse(localStorage.getItem('pacientes')) ?? [];
        setPacientes(pacientesLS);
      }
      obtenerLS();
  },[]);

  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  },[pacientes]);

  const EliminarPaciente=(id)=>{
    const pacientesActualizados=pacientes.filter(paciente=>paciente.id!==id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
    

      <Header
        
      />
      <div className='mt-12 flex'>
        <Formulario
        pacientes={pacientes}  
        setPacientes={setPacientes}
        pacienteEditar={paciente}
        setPaciente={setPaciente}
        
        
          
        />
       
        <ListaPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        EliminarPaciente={EliminarPaciente}
        
        />
      </div>
      
    </div>
    
  )
}

export default App
