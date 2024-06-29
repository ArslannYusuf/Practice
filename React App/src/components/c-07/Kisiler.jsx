import React from 'react'
import students from "../../assets/data/students.json"
import Kisi from './Kisi'
import "./kisi.scss"

const Kisiler = () => {

  return (
      <div className='tbl-student'>
          {
              students.map((item, index) => (
                  <Kisi key={index} {...item} />
              ))
          }
    </div>
  )
}

export default Kisiler