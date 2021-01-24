import React from 'react'

function Experiencia(prop) {

  console.log(prop)

  const { experiencia } = prop.exp


  return (

    <div className="experience">
      <h2>Experiência </h2>

     {experiencia.map(item=>(
        <div className="experience-item" key={item.id}>
          <div>
            <h4>{item.cargo}</h4>
            <span>{item.periodo}</span>
            <strong>{item.empresa}</strong>
            <span>{item.local}</span>
          </div>
          <p>{item.conteudo}</p>
          </div>
      ))}
      
    </div>

  )
}

export default Experiencia