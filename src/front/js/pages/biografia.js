import React from 'react'
import { Title } from '../component/title'
import { FotoContacto } from '../component/fotoContacto'
import { TextoFoto } from '../component/textoFoto'
import { FotoTexto } from '../component/fotoTexto'

export const Biografia = () => {
  return (
    <div className='pt-32'>
        <Title titulo="Biografía" />
        <FotoContacto />
        <TextoFoto />
        <FotoTexto />
    </div>
  )
}

