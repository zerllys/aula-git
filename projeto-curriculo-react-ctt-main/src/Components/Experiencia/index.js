import React from 'react'

function Experiencia(prop){

  console.log(prop)

  const {experiencia } = prop.exp


    return(

        <div className="experience">
        <h2>Experiência </h2>

        <div className="experience-item">{experiencia.map(item=>(
          <li key={item.id}>
            <div>
            <h4>{item.cargo}</h4>
            <span>{item.periodo}</span>
            <strong>{item.empresa}</strong>
            <span>{item.local}</span>
            </div>
            <p>{item.conteudo}</p>
          </li> 
        ))}
          
        </div>
        
      </div>

    )
}

export default Experiencia