import React, { useEffect, useState } from 'react'
import Fooddata from './serviceCard'
import "./style.css"
import Form from 'react-bootstrap/Form'
import Cards from './Cards'
import Set from './Set'

const Search = () => {

    const [fdata, setFdata] = useState(Fooddata);
    // console.log(fdata);

    const [copydata, setCopyData] = useState([]);

    // console.log(copydata);


    const chanegData = (e) => {
        let getchangedata = e.toLowerCase();

        if (getchangedata == "") {
            setCopyData(fdata);
        } else {
            let storedata = copydata.filter((ele, k) => {
                return ele.rname.toLowerCase().match(getchangedata);
            });

            setCopyData(storedata)
        }
    }


    const zomatologo = "data:image/jpeg;base64,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"


    useEffect(() => {

        setTimeout(() => {
            setCopyData(Fooddata);
        }, 3000);

    }, [])

    return (
        <>
            <div className="container d-flex justify-content-between align-items-center">
                <img src={zomatologo} style={{ width: "8rem", position: "relative", left: "2%", cursor: "pointer" }} alt="" />
                <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3"></h2>
            </div>


            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                    <Form.Control type="text"
                        onChange={(e) => chanegData(e.target.value)}
                        placeholder="Search " />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{ background: "#ed4c67" }}>Submit</button>
            </Form>


            <section className='iteam_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400 }}>Services in Vijayawada Open now</h2>

                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    {copydata && copydata.length ? <Cards data={copydata} /> : <Set  sdata={fdata}/>}
                </div>
            </section>
            
        </>
    )
}

export default Search