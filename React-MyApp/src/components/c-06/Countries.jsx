import React from 'react'
import data from "../../assets/data/countries.json"

const Countries = () => {

    //! verilen datadan ulkelri secip selcte yerlestir
  //! a harfi ile baslayan ulkeleri sirala
  return (
      <table>
          <thead>
              <tr>
                  <th>Sira No</th>
                  <th>Ulke Adi</th>
                  <th>Ulke Kodu</th>
              </tr>
          </thead>

          <tbody>
              {
                  data.filter((ulke) => ulke.name.startsWith("L"))
                      .map((item, index) => (
                          <tr key={item.code} style={{textAlign:"center"}}>
                              <td>{index + 1}</td>
                              <td>{item.name}</td>
                              <td>{item.code}</td>
                      </tr>
                  ))
              }
          </tbody>
    </table>
  )
}

export default Countries