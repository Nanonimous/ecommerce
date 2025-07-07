import style from './ItemCard.module.css'


export default function ItemCard({item}) {
    const {title,dis,dis_price,price,arival,content} = item;
    console.log(title);

    return(
        <>
        <div className={style.card_cover}>
            <div className={style.image}>
                <img src="/images/OurProductComponent/furniture1.png" alt="furniture1 image" />
            </div>

            <div className={style.content}>
                <div className={style.title}>
                    <h3>{title}</h3>
                </div>

                <div className={style.description}>
                    <h4>{dis}</h4>
                </div>
                <div className={style.price_continer}>
                    <div className={style.discount}>
                        RP {dis_price}
                    </div>

                    <div className={style.original}>
                        {price != "" ?`RP ${price}`:""}
                    </div>
                </div>
            </div>


            {
                arival?
                <div className={style.notation}>
                    <p>{content}</p>
                </div>:<div className={style.dis_notation}>
                    <p>{`-${content}%`}</p>
                </div>
            }
            

            <div className={style.layer}>
            </div>


            <div className={style.add_cart_continer}>

                <div className={style.add_cart}>
                    <p>Add to cart</p>
                </div>

                <div className={style.options}>
                        <div className={style.ops}>
                            <p>Share</p>
                        </div>
                        <div className={style.ops}>
                            <p>Compare</p>
                        </div>
                        <div className={style.ops}>
                            <p>Like</p>
                        </div>
                </div>
            </div>


        </div>

        </>
    )
}