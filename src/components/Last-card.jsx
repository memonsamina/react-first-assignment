 import arrow from "../components/images/Arrow-right-solid.png"



const Socialcard = () => {

    return(
       <div className="text text-white">
         <div className="py-5">
            <div className="py-5">
        <h1 className="">Want to hire us?</h1>
        <p className="">Have an idea for an awesome project? We'd love to help make it real.</p>
        <button type="button" class="btn btn-color text-white fw-bold">Get in touch <img src={arrow} alt=""/> </button>
       </div>
       </div>
       </div>
   
    );
    
    }
    export  default Socialcard;