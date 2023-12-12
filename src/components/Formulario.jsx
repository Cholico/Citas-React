import { useState, useEffect } from "react"

function Formulario() {

  const [nombre, setNombre] = useState('');
  
  

  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">
        Formulario
      </h2>
      <p className="text-lg mt-5 text-center">
          Añade pacientes y {''}
          <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5">
        
        <div id="campoMascota">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre de la mascota
          </label>
          <input 
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 roun" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value) }
          />
        </div>

        <div id="campoPropietario" className="mt-2">
          <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
            Nombre del propietario
          </label>
          <input 
            id="nombre"
            type="text"
            placeholder="Escriba su nombre" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 roun" 
          />
        </div>

        <div id="campoCorreo" className="mt-2">
          <label htmlFor="correo" className="block text-gray-700 uppercase font-bold">
            Correo electronico
          </label>
          <input 
            id="correo"
            type="email"
            placeholder="Escriba su correo" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 roun" 
          />
        </div>

        <div id="campoFecha" className="mt-2">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input 
            id="alta"
            type="date"
            placeholder="Escriba su correo" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 roun" 
          />
        </div>

        <div id="campoSintomas" className="mt-2">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea 
            id="sintomas"
            type="email"
            placeholder="¿Que le pasa a tu amiguito?" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 roun" 
          />
        </div>

        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cu transition-colors"
          value="Agregsr paciente" 
        />
      
      </form>
    </div>
  )
}

export default Formulario
