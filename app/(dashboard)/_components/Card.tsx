import React from 'react'

function Card({ title, value, descripstion }: any) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{value}</p>
      <p>{descripstion}</p>
    </div>
  )
}

export default Card