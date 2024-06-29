import React from 'react'

const Kisi = ({isim,yas,kurs,img}) => {

    //props.isim
    //const {isim,yas,kurs,img}=item
  return (
      <div className='kisi'>
         
          <img src={img} alt="photo" width="300" height="350" />
           <h2>{isim}</h2>
          <h3>{kurs}</h3>
          <h4>{ yas}</h4>

    </div>
  )
}

export default Kisi