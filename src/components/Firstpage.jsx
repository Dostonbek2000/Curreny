import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
const Firstpage = () => {
    const [ratesList, setRateslist] = useState([])
    const arr= []

   for (let i = 1; i < ratesList.length; i++){
       arr.push(i)
      
   }
 
    
    useEffect(() => {
        getMydata()
    }, [])

    const getMydata = async () => {
        const res = await axios.get('http://data.fixer.io/api/latest?access_key=ce2dc3d75890044e66a48e09e68e021e');
        const { rates } = res.data;
        //    console.log(rates);
        const ratesFul = [];
        for (const [symbol, rate] of Object.entries(rates)) {
            //    console.log(rate);
            ratesFul.push({ symbol, rate })
        }
        setRateslist(ratesFul)
    }

    return (
        <div>
            {/* <select name="" id="">
                {
                    ratesList.map((d) => (
                        <option value={d.symbol} key={d.symbol}>
                            {d.symbol}
                        </option>
                    ))
                }
            </select> */}
            <div className='maintextdiv'>
                <p className="maintext">Default Rate Symbol : <span id='span'> EUR</span></p>
            </div>
            <div className='flexdisplay'>
                <p className="fisttext">Countries Here</p>
                <p className="rates">Rates Here</p>
            </div>
            <ul className='listing'>
                
                    
  

               
                    {ratesList.map((d) => (
                    <li className='listingli' key={d.symbol}><p className='symbol'>Country : {d.symbol}</p>
                    <p className='currentrate'>Current exchange rates : {d.rate}</p></li>
                ))}

            </ul>
        </div>
    )
}

export default Firstpage
