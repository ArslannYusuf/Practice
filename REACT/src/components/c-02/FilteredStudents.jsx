import React from 'react'
import ogrenciler from "../../assets/data/students.json"	



const FilteredStudents = () => {

    //
      //!listeye yasi 25den kucuk olanlarin isimlerini ekleyelim
  return (
      <ol>
          
          {
              ogrenciler.filter((student) => student.yas < 25)
                  .map((item, index) => (
                      
                      <li key={index}> {item.isim}
                      </li>
              ))
         } 

    </ol>
  )
}

export default FilteredStudents