import logoimg from "../components/images/Logo.png"

const Header = () => {

    return(
        
        <div className="color">

<div className="container">
<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
<img src={logoimg} alt="logo"/>

  <div className ="col-md-3 mb-2 mb-md-0">
  </div >
  
  <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
    <li><a href="#" className="nav-link px-2 text-white">Home Pages</a></li>
    <li><a href="#" className="nav-link px-2 text-white">Blogs</a></li>
    <li><a href="#" className="nav-link px-2 text-white">Pages</a></li>
    <li><a href="#" className="nav-link px-2 text-white">Ecommerce</a></li>
    <li><a href="#" className="nav-link px-2 text-white">About</a></li>
    <li><a href="#" className="nav-link px-2 text-white">Theme</a></li>
  </ul>

  <div class="col-md-3 text-end">
    <button type="button" class="btn btn-color me-2 text-white">Buy now</button>
  </div>
</header>
</div>

<div className="">
            <div className=" text-center position-absolute top-50 start-50 translate-middle">
                <p className="text-white"> WE CREATE DIGITAL PRODUCTS</p> 
                <h1 className="text-white fw-bold"> Introduce OurCreative <br/> Agency.</h1>
                <button type="button" class="btn btn-color text-white">SEE OUR WORK</button>
            
            
            
            
            </div>


        </div>



</div>
    
    );
    
    }
    export  default Header;
