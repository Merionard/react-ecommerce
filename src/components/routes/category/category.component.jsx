import { useParams } from "react-router-dom";
import './category.styles.scss';
import { useContext, useState,useEffect, Fragment } from "react";
import { CategoriesContext } from "../../../contexts/categories.context";
import ProductCard from "../../product-card/product-card.component";

const Category = () => {
    const {category} = useParams();
    const {categories} = useContext(CategoriesContext);
    const [products,setProducts] = useState(categories[category]);

    useEffect(()=>{
        setProducts(categories[category])
    },[category,categories])

    console.log(products);

    return(
        <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className="category-container">
        {
            products && products.map(product=><ProductCard key={product.id} product={product}/>)
        }
        </div>
        </Fragment>
    )



}

export default Category;