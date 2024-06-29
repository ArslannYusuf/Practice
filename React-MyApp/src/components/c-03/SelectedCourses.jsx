import React from 'react'
import data from "../../assets/data/students.json"

const SelectedCourses = () => {

     //!selectin icine kurslari tekrarsiz (bir defa kullanilacak) sekilde ekleyelim
  return (
      <select>
          
          <option disabled>Bir secim yapiniz</option>
          {
              data.reduce((values, course) => {
                  
                  if (!values.includes(course.kurs)) values.push(course.kurs)
                  return values;
                 
              }, []).map((item, index) => (<option key={index}>{item}</option> ))
          }

    </select>
  )
}

export default SelectedCourses