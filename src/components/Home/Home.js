import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ShowCourse from '../ShowCourse/ShowCourse';
import './Home.css';

const Home = () => {
    // UseState 
        const [courses, setCourses] = useState([]);
        // UseEffect
        useEffect( () => {
            fetch('./home.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))

        },[])
    return (
        <div>
            <div className="display-section container">
    
                <div className="display-info">
                    <h1 className="h1 fw-bold text-primary">Learn From The Expert</h1>
                    <p className="p fw-bold fs-4">This is The Place Where You Can Learn <br /> All The Things You Need From The Expert.</p>
                    <Button variant="primary my-4">ADDMISSION NOW</Button>
                </div>
                <div className="display-img">
                    <img src="https://www.roshnidhal.com/wp-content/uploads/2016/03/confused-girl.png" alt="" />
                </div>
            </div>
            <div>
                <h1 className="fw-bold my-4 text-primary">Top Courses</h1>
            </div>
            <div className="show-course">
    
                {
                    courses.map(course => <ShowCourse course={course}
                    key = {course.CourseId}
                    >

                    </ShowCourse>)
                }
            </div>
        </div>
    );
};

export default Home;