import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

function Countrystatecity() {
    const [country, setCountry]= useState([]);
    const [countryid, setCountryid]=useState('');
    const [st, setSt]= useState([]);
    const [stateid, setStateid]= useState('');
    const [city, setCity]= useState([]);

     useEffect( ()=>{
         const getcountry= async()=>{
             const rescountry= await fetch("http://localhost/devopsdeveloper/country/");
             const rescon= await rescountry.json();
             setCountry(await rescon);
         }
         getcountry();
     },[]);

     const handlecountry=(event)=>{
         const getcountryid= event.target.value;
         setCountryid(getcountryid);
     }

     useEffect( ()=>{
     const getstate= async()=>{
         const resstate= await fetch(`http://localhost/devopsdeveloper/state/getstate/${countryid}`);
         const resst= await resstate.json();
         setSt(await resst);
     }
    getstate();
     },[countryid]);

     const handlestate=(event)=>{
        const getstateid= event.target.value;
        setStateid(getstateid);
    }

useEffect( ()=>{
    const getcity= async()=>{   
        const rescity= await fetch(`http://localhost/devopsdeveloper/city/getcity/${stateid}`);
        const rcity= await rescity.json();
        setCity(await rcity);
    }
getcity();
},[stateid]);
         
   return (
    <React.Fragment>
      <Container className="content">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="mt-4 mb-4 fw-bold">
              Select Country, State and City ReactJs{" "}
            </h2>

            <form className="row g-3">

               <div className="col-md-3">
                <label  className="form-label">Country </label>
                <select name="country" className="form-control p-2"  onChange={(e)=>handlecountry(e)} >
                  <option value="">--Select Country--</option>
                  {
                 country.map( (getcon, index)=>(
                  <option key={index} value={getcon.country_id}>{getcon.country_name } </option>
                 ))
                  }
                </select>
              </div>

              <div className="col-md-3">
                <label  className="form-label">State</label>
                <select className="form-select" name="state"  onChange={(e)=>handlestate(e)}>
                  <option value="">--Select State--</option>
                  {
                    st.map( (getst, index)=>(
                     <option key={index} value={getst.state_id}>{getst.state_name } </option>
                    )) 
                  }                  
                </select>
              </div>

              <div className="col-md-3">
                <label  className="form-label">City</label>
                <select className="form-select" name="city">
                  <option value="">--Select City--</option>
                  {
                      city.map( (gcity, index)=>(
                      <option key={index} value={gcity.city_id}> { gcity.city_name} </option>
                      ))
                  }                 
                </select>
              </div>
              
              <div className="col-md-3">                
                <button type="button" className="btn btn-primary mt-4">Submit</button>
              </div>
            
            </form>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Countrystatecity;
