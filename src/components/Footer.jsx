import socialimage from "../components/images/Social.svg"
const FootercArd = () => {
    return(
       
<div className="bg-color">
<div class="container text-white py-5">
    <div class="row py-5">
      <div class=" col-md-3 mb-3">
        <h5>Company</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">Portfolio</li>
          <li class="nav-item mb-2">Our clientss</li>
          <li class="nav-item mb-2">Careers</li>
          
        </ul>
      </div>

      <div class=" col-md-3 mb-3">
      <h5>Offices</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">345 Main St. San Francisco, CA</li>
          <li class="nav-item mb-2">103 N. 13th Street. Seattle, WA</li>
          
        </ul>
      </div>
      <div class=" col-md-3 mb-3">
      <h5> Contact</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">+81 555 489 902</li>
          <li class="nav-item mb-2">info@themes.com</li>
          
        </ul>
      </div>

      <div class="col-md-3 mb-3">
      <h5>About</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">Log in to your account</li>
          <li class="nav-item mb-2">Support</li>
        </ul>
      </div>
      </div>

<div className="text-center mt-5 d-flex justify-content-center">
<img src={socialimage} alt="JavaScript logo"/>
 </div>

<div className="mt-5 text-white text-center">
  <p>All rights reserved. © 2020.</p>
  <span className="px-5">Privacy & terms</span>  <span> Terms of Service</span> 
</div> 

</div>
      </div>

   
     
    );
    
    }
    export  default FootercArd;