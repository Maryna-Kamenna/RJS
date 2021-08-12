function Footer() {
    return (
    <>
  
   <footer classNameName="text-center text-lg-start bg-light text-muted"> 

    <div classNameName="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
 


 <section >
    <div className="container text-center text-md-start mt-5">
      
      <div className="row mt-3">
    
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-3">
     
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-4"></i>Marina
          </h6>
          <p>
           This is my first project on React
          </p>
        </div>
 

  
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
            Languages
          </h6>
         
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Java Script</a>
          </p>
        
        </div>
  

     
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="https://www.linkedin.com/in/maryna-kamenna-1330711/" className="text-reset" target="blank_" >LinkedIN</a>
          </p>
          <p>
            <a href="https://djinni.co/my/profile/" className="text-reset" target="blank_">Djinni</a>
          </p>
          <p>
            <a href="https://github.com/Maryna-Kamenna" className="text-reset" target="blank_" >Git</a>
          </p>
        
        </div>
    
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
   
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i className="fas fa-home me-3"></i> Ukraina, Odessa </p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            marinastone.info@icloud.com
          </p>
          <p><i className="fas fa-phone me-3"></i> +38 063 133 07 11 </p>
       
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4 text-reset fw-bold" >
    © 2021 Copyright : Maryna Kamenna
    {/* <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> Maryna Kamenna</a> */}
  </div>

 </footer>
</>
      
    );
}

export default Footer;