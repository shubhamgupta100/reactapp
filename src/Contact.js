import React, { useState } from 'react';
const Contact = () => {
    const [data , setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    });
    const InputEvent = (event) => {
        const {name , value} = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name] :value,
            }
           
        })

    }
    const FormSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname} , Mobile No is ${data.phone} , email is ${data.email} and msg for You is ${data.msg}`)
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={FormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    type="text"
                                    className="form-control my-2"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Full Name .."
                                />
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                <input
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    type="text"
                                    className="form-control my-2"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Mobile Number"
                                />
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email </label>
                                <input
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    type="email"
                                    className="form-control my-2"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                    className="form-control my-2"
                                    id="exampleFormControlTextarea1"
                                    rows="3">
                                </textarea>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;