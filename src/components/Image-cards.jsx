import Itemimg from '../components/images/first.svg'
import Itemimgg from '../components/images/item-2.svg'
import Itemimggg from '../components/images/item-1.svg'
import Itemimaggg from '../components/images/item-4.svg'
import Itemimaag from '../components/images/item-5.svg'
import ItemimAag from '../components/images/item-6.svg'




import logoimg from "../components/images/Minus.svg"

const ImageCard = () => {

    return(
        <div className='bg-clr'>
    
<div className="my-3 py-4">

<div className="bg-text text-center py-3"> 

<h2> Featured Projects</h2>
<img className="mx-2 py-2" src={logoimg} alt=""/>
</div>

     <div className="text-center py-3"> 
 <img className="mx-2 py-2" width={339} src={Itemimg}/> 
 <img className="mx-2 py-2" width={339} src={Itemimgg}/>
 <img className="mx-2 py-2" width={339} src={Itemimggg}/>

 </div>  

     <div className="text-center"> 
 <img className="mx-2 py-2" width={339} src={Itemimaggg}/> 
 <img className="mx-2 py-2" width={339} src={Itemimaag}/>
 <img className="mx-2 py-2" width={339} src={ItemimAag}/>
 <div className="my-5 py-5"> </div>

</div>
</div>
</div>

  );
    
}
export  default ImageCard;

