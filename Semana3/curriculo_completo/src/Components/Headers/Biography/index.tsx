import React from 'react'

interface bio{
  bio:string[]
}

const Biography= (props:bio)=> {

    return(
    <div className="biografia">
      <h1>{props.bio[0]}</h1>
      <div className="ocupacao">nome</div>
      <p>resumo</p>
    </div>


    )
}

export default Biography;