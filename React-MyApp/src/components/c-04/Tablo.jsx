import React from 'react'
import data from "../../assets/data/students.json"

const Tablo = () => {

    const style1 = {
        backgroundColor: "cyan",
        color: "black",
        textAlign: "center",	
        lineHeight: "30px",
        border:"2px solid black"
        
}
  return (
      <table style={{width:"500px",margin:"3rem auto",border:"1px solid black"}}>
          
          <thead style={{backgroundColor:'green'}}>
              <tr style={{lineHeight:"3rem"}}>
                  <th>Isim</th>
                  <th>Yas</th>
                  <th>Kurs</th>
              </tr>
          </thead>

          <tbody>
              
              {
                  data.map((student, index) => (
                      <tr key={index} style={index%2===0 ? style1 :{...style1,backgroundColor:"gray"}} >
                          <td>{student.isim}</td>
                          <td>{student.yas}</td>
                          <td>{student.kurs}</td>
                      </tr>
                      
                  ))
              }

              

          </tbody>


    </table>
  )
}

export default Tablo