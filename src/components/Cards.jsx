import image  from "../components/images/Image.png"
import imAgE  from "../components/images/chair-img.png"
import imageE from "../components/images/Image (3).png"
import circle from "../components/images/circle-2.png"
import circLee from "../components/images/circle-3.png"
import circLe from "../components/images/circle-3.png"

const Cards = () => {

    return(


<div className="container">
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col f-2">
    <div class="card">
    <img class="name" className="" src={image} alt="logo"/>
      <div class="card-body">
     
        <h5 class="card-title">Make your team a Design driven company</h5>
        <p class="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        <h6 class="card-title"> <img src={circLe}alt=""/> BY MIKE DAMON</h6>
      </div>

    </div>
  </div>
  <div class="col">
    <div class="card">
    <img class="name" className="" src={imAgE} alt="logo"/>
      <div class="card-body">
        

        <h5 class="card-title">How to nurture a calm and organized work culture</h5>
        <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
        <h6 class="card-title">   <img src={circle}alt=""/> BY MIKE DAMON</h6>
      </div>
    </div>
  </div>
  <div class="col">
 
    <div class="card">
    <img class="name" className="" src={imageE} alt="logo"/>
      <div class="card-body">
        <h5 class="card-title">How can the architecture influence our mood</h5>
        <p class="card-text">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33.</p>
        <h6 class="card-title"> <img src={circle}alt=""/> BY MIKE DAMON</h6>
      </div>

    </div>
  </div>

</div>
</div>



);
    
}
export  default Cards;