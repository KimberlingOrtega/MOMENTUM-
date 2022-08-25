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
        <TextoFoto image="https://coisadefotografa.com/wp-content/uploads/2021/05/ebooks-para-fotografos-2-min-scaled.jpg" title="Food, Beverage, Still Life ... the good to photograph" text="Commercial images for restaurants, menus, catalogs, cookbooks, food
            companies, producers, farms, blogs and food sector publishing."/>
        <FotoTexto image="https://coisadefotografa.com/wp-content/uploads/2017/09/como-atrair-os-primeiros-clientes-na-fotografia-2-scaled.jpg" title="Food, Beverage, Still Life ... the good to photograph" text="Commercial images for restaurants, menus, catalogs, cookbooks, food
            companies, producers, farms, blogs and food sector publishing." />
    </div>
  )
}

