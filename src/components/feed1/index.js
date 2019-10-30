import React from 'react'
import { Link } from "react-router-dom";
import './feed1.scss'

const Feed1 =()=> (
            <div className="row" >
                <div className="col-md-4 ">
                    <div className="feed1"> 
                        <h3><strong>Shop exclusive designs off our Instagram feed!</strong></h3>
                        <h3>Learn More...</h3>
                        <em>**limited stock available**</em>
                    </div>
                    
                </div>
                <div className="col-md-8 ">
                    <div className="feed">
                        <div className="feedb">
                            <Link to='/shop'>
                                 <button style={{position:'absolute',padding: '10px', fontWeight:'bold', backgroundColor: '#d4d8e1',  marginTop:'45vh'}} >Shop Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )

export default Feed1;
