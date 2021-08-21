import { FormControl, Paper, TextField, Select, Button } from '@material-ui/core'
import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios'
const SecondPage = () => {
    const [word, setword] = useState(1);
    const [word2, setword2] = useState(1);
    const [cont, setcont] = useState([])
    const [cont2, setcont2] = useState([]);
    const [val, setval] = useState(1)
    const [val2, setval2] = useState(1)


    useEffect(() => {
        captureDate()
    }, [])
    //https://api.fastforex.io/fetch-all?api_key=2317796373-beb9f134cf-qy77pk
    async function captureDate() {
        const result = await Axios.get(
            "http://data.fixer.io/api/latest?access_key=ce2dc3d75890044e66a48e09e68e021e"
        )
        console.log(result.data);
        setcont(result.data.rates)
        setcont2(result.data.rates)

    }

    function converting(e) {
        e.preventDefault()
        let number = (val2 / val) * word
        setword2(number)
    }

    return (
        <div>
           
                <div className="bg">
                    <div className="divh1"><h1>Currency Converter</h1></div>
                   
                    <form className='formm' onSubmit={converting}>
                        <div className='flexdisplay'>
                            <div className="wrapme">
                                <TextField style={{ width: '300px', backgroundColor: 'white', }} variant='outlined' value={word || ''} onChange={(e) => setword(e.target.value)} autoComplete='off' />
                                <FormControl className='fcont' variant='outlined' onChange={(e) => setval(e.target.value)}>
                                    <Select className='sel1' native>
                                        {Object.keys(cont).map((value, index) =>
                                            <option key={index} value={cont[value]}>{value}</option>)}
                                    </Select>
                                </FormControl>

                            </div>
                            <div className="wrapme">
                                <TextField style={{
                                    width: '300px',
                                    backgroundColor: 'white',
                                    outline: 'none',
                                    
                                }} variant='outlined' value={word2 || ""} />
                                <FormControl className='fcont' variant='outlined' onChange={(e) => setval2(e.target.value)}>
                                    <Select className='sel2' native>
                                        {Object.keys(cont2).map((value, index) =>
                                            <option key={index} value={cont[value]}>{value}</option>)}
                                    </Select>
                                </FormControl>

                            </div>
                        </div>
                                <div className="submitbtn">
                                    <Button type='submit' style={{
                                        height: '55px',
                                        width: '190px',
                                        backgroundColor: 'orange',
                                        color: 'white', fontFamily: 'serif',
                                        textShadow: '1px 1px 3px blue',
                                        fontSize: '19px'
                                    }} className='convertbtn' variant='contained'  >Convert Now</Button>
    
                                </div>
                    </form>
                </div>
           
        </div>
    )
}

export default SecondPage
