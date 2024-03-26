import Link from 'next/link'
import React from 'react'

const Cta = ({text , url} : {
    text : string, 
    url :string,
}) => {
  return (
    <Link href={url} className='mega-trans cta-prent bg-sec fontcl main-f'>{text}</Link>
  )
}

export default Cta