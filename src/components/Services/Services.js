import React, { useEffect, useState } from 'react';
import ShowServices from '../ShowServices/ShowServices';
import './Services.css'

const Services = () => {
    // Using UseState 
    const [services, setServices] = useState([])
    // UseEffect For Loading Data 
    useEffect( () => {
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
       <div>
           <div className="fw-bold my-4 text-primary">
            <h1>Our Services</h1>
           </div>
           <div className="show-courses">
            {
                services.map(service => <ShowServices service={service}
                key = {service.courseId}
                >

                </ShowServices>)
            }
        </div>
       </div>
    );
};

export default Services;