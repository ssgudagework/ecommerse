import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductPage() {

    const {id} = useParams()

  return (
    <div>Single Product page for Product id: {id}</div>
  )
}
