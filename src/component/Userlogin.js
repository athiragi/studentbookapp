import React from 'react'
import { Link } from 'react-router-dom'

const Userlogin = () => {
  return (
    <div>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h1>User Login</h1>
            <div class="row">
                <div class="col co-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <label for="" class="form-label">  User Name</label>
                    
                    <input type="text" class="form-control"/>
                </div>
                <div class="col co-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <label for="" class="form-label">  Password</label>
            
                    <input type="password" name="" id="" class="form-control"/>
                </div>
                <div class="col co-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <button class="btn btn-success">Login</button>
                </div>
                <div class="col co-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <Link to="register.html">new user click here</Link>
                </div>
            </div>
            
                  
                
        </div>
    </div>
</div>

    </div>
  )
}

export default Userlogin