import React from 'react'
import GirisBasarili from './GirisBasarili';
import GirisBasarisiz from './GirisBasarisiz';

const IsLogin = () => {
    const isLogin = true;
  

    
  return (
      <div>
          
          {
              isLogin ? (<GirisBasarili/>) :(<GirisBasarisiz/>)
                   
          }


    </div>
    
  )
}

export default IsLogin