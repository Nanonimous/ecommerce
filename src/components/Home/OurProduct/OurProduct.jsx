import ItemCard from '../../../Layout/ItemCard/itemCard'
import style from  './OurProduct.module.css'


export default function OurProduct() {


    const content = [
        {
            title:"Syltherine",
            dis:"Stylish cafe chair",
            dis_price:"2,500.000",
            price:"3,500.000",
            arival:true,
            content:"New"
        },
         {
            title:"Syltherine",
            dis:"Stylish cafe chair",
            dis_price:"2,500.000",
            price:"3,500.000",
            arival:false,
            content:"50"
        },
         {
            title:"Syltherine",
            dis:"Stylish cafe chair",
            dis_price:"2,500.000",
            price:"",
            arival:true,
            content:"New"
        },
         {
            title:"Syltherine",
            dis:"Stylish cafe chair",
            dis_price:"2,500.000",
            price:"3,200.000",
            arival:false,
            content:"30"
        },
         {
            title:"Syltherine",
            dis:"Stylish cafe chair",
            dis_price:"2,500.000",
            price:"3,500.000",
            arival:false,
            content:"20"
        }
    ]

    return (
        <>
        <div className={style.product_component}>
            <div className={style.title}>
                <h1>Our Products</h1>
            </div>

            <div className={style.Card_continer}>
                {content.map((item,index)=>(
                    <ItemCard item={item} key={index} />
                ))}
            </div>
        </div>
        </>
    )
    
}