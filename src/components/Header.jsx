function Header(props){

    console.log(props.numeros);
    return (
        <>
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
        Seguimiento Pacientes {""} con Git {""}<span className="text-indigo-600">Veterinaria</span></h1>
        </>
    )
}

export default Header;