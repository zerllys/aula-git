import React from "react"

function Biografia(props) {

  const { nome, ocupacao, resumo } = props.bio

  return (

    <div className="biografia">
      <h1>{nome}</h1>
      <div className="ocupacao">{ocupacao}</div>
      <p>{resumo}</p>
    </div>
  )
}
export default Biografia