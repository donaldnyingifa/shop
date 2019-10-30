import React from 'react'


const Contact =()=> (
  <section id="contact" className="section section-contact scrollspy">
  <div className="container">
    <div className="row">
      <div className="col s12 m6">
        <div className="card-panel teal white-text center">
        <a style={{color: '#fff'}} href="mailto:info@marieanne.com?Subject=Hello" target="_top"><i className="material-icons medium">email</i></a>
          
          <h5>Contact Us For Enquires</h5>
          
          <a style={{color: '#fff'}} href="tel:08035231565">Phone No: 08035231565</a> <br /> <br />
          
          <a style={{color: '#fff'}} href="mailto:info@marieanne.com?Subject=Hello" target="_top">Email: info@marieanne.com</a>
          
        </div>
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>Location</h4>
          </li>
          <li className="collection-item">MarieAnne Montessori</li>
          <li className="collection-item">No 13 Panasonic Estate, Uruguay street, Off Aguiyi Ironsi Way</li>
          <li className="collection-item">Maitama, Abuja Nigeria</li>
        </ul>
      </div>
      <div className="col s12 m6">
        <div className="card-panel grey lighten-3">
          <h5>Please fill out this form</h5>
          <div className="input-field">
            <input type="text"  id="name"/>
            <label for="name">Name</label>
          </div>
          <div className="input-field">
            <input type="email"  id="email"/>
            <label for="email">Email</label>
          </div>
          <div className="input-field">
            <input type="text"  id="phone"/>
            <label for="phone">Phone</label>
          </div>
          <div className="input-field">
            <textarea class="materialize-textarea"  id="message"></textarea>
            <label for="message">Message</label>
          </div>
          <input type="submit" value="Submit" className="btn"/>
        </div>
      </div>
    </div>
  </div>
</section>
)

export default Contact