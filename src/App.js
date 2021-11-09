import "./App.css";
import styled from "styled-components";
import { BotonDisminuir, BotonIncrementar, BotonCheck, BotonGenerar } from "./components/Boton";
import { useState, useEffect } from "react";
import generarPassword from "./functions/generarPassword";

const App = () => {

  const [configuracion, setConfiguracion] = useState({
    numeroDeCaracteres: 7,
    simbolos: true,
    numeros: true,
    mayusculas: true,
  });

  const[passwordGenerada, setPasswordGenerada] = useState("asdsadsadsa");
  useEffect(() => {
    setPasswordGenerada(generarPassword(configuracion));
  }, [configuracion])

  const incrementarNumCaracteres = () => {
    setConfiguracion((configuracionAnterior) => {
      const nuevaConfiguracion = {...configuracionAnterior}
      nuevaConfiguracion.numeroDeCaracteres += 1;

      return nuevaConfiguracion; 
    })
  }

  const disminuirNumCaracteres = () => {
    if (configuracion.numeroDeCaracteres > 4){
      setConfiguracion((configuracionAnterior) => {
        const nuevaConfiguracion = {...configuracionAnterior}
        nuevaConfiguracion.numeroDeCaracteres -= 1;
  
        return nuevaConfiguracion; 
      })
    }
  }

  const toggleSimbolos = () => {
    setConfiguracion((configuracionAnterior) => {
      const nuevaConfiguracion = {...configuracionAnterior}
      nuevaConfiguracion.simbolos = !nuevaConfiguracion.simbolos;

      return nuevaConfiguracion; 
    })
  }

  const toggleNumeros = () => {
    setConfiguracion((configuracionAnterior) => {
      const nuevaConfiguracion = {...configuracionAnterior}
      nuevaConfiguracion.numeros = !nuevaConfiguracion.numeros;

      return nuevaConfiguracion; 
    })
  }

  const toggleMayusculas = () => {
    setConfiguracion((configuracionAnterior) => {
      const nuevaConfiguracion = {...configuracionAnterior}
      nuevaConfiguracion.mayusculas = !nuevaConfiguracion.mayusculas;

      return nuevaConfiguracion; 
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();

    setPasswordGenerada(generarPassword(configuracion));
  }

  return (
    <div className="contenedor">
      <Logo>
        <h1>Password Generator</h1>
      </Logo>

      <form onSubmit={onSubmit}>
        <Fila>
          <label>Numero de caracteres:</label>

          <Controles>
            <BotonDisminuir click={disminuirNumCaracteres} />

            <span> { configuracion.numeroDeCaracteres } </span>

            <BotonIncrementar click={incrementarNumCaracteres} />
          </Controles>
        </Fila>

        <Fila>
          <label>¿Incluir símbolos?</label>

          <BotonCheck seleccionado={configuracion.simbolos} click={toggleSimbolos}/>
        </Fila>

        <Fila>
          <label>¿Incluir números?</label>
          
          <BotonCheck seleccionado={configuracion.numeros} click={toggleNumeros}/>
        </Fila>

        <Fila>
          <label>¿Incluir mayúsculas?</label>
          
          <BotonCheck seleccionado={configuracion.mayusculas} click={toggleMayusculas}/>
        </Fila>

        <Fila>
          <BotonGenerar />

          <Input type="text" readOnly={true} value={passwordGenerada} />
        </Fila>
      </form>
    </div>
  )
}

export default App;

const Logo = styled.div`
  margin-bottom: 50px;
`

const Fila = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`

const Controles = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  & > * {
    flex: 1;
  }

  span {
    line-height: 40px;
    background: #33257E
  }
`

const Input = styled.input`
  width: 100%;
  background: none;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, .25);
  color: #fff;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    border: 1px solid rgba(255, 255, 255, .50);
  }

  &::selection {
    background: #212139;
  }
`


