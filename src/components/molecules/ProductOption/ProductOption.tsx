import React from 'react'
import { ProductImg, ProductName, ProductOptionContainer, ProductId,ProductImgList, ProductOptionContainerList, ProductNameList } from './ProductOption.style';
import { Meal } from '../../../interfaces/meals';
import { Order } from '../../../interfaces/order';
import { FaTrash } from "react-icons/fa";
import Button from '../../atoms/Button/Button';

interface ProductOptionContainerProps{
    type: string;
    product: Meal;
    order?: Order; 
    position?: number;
    setOrder?: () => void; 
    addProduct?: (product:Meal) => void; 
    deleteProduct?: (position:number) => void;
    disabledButton?:boolean;
}

const ProductOption: React.FC<ProductOptionContainerProps> = ({ type, product, addProduct, deleteProduct, position, disabledButton }) => {
    if (type === 'card' && addProduct) {
        return (
            <ProductOptionContainer onClick={() => {
                if (product) {
                    addProduct(product);
                }
            }}>
                <ProductImg src={product.strMealThumb}></ProductImg>
                <ProductName>{product.strMeal}</ProductName>
                <ProductId>{product.idMeal}</ProductId>
            </ProductOptionContainer>
        );
    }

    if (type === 'list' && deleteProduct) {
        return (
            <ProductOptionContainerList onClick={() => {deleteProduct(position || 0); }}>
                <ProductId>x1</ProductId>
                <ProductImgList src={product.strMealThumb} alt='ProductImg' />
                <ProductNameList>{product.strMeal}</ProductNameList>
                {
                    disabledButton ? <></> : <Button background='white' children={<FaTrash color={'red'} />} position='relative'></Button>
                }
            </ProductOptionContainerList>
        );
    }

    return null;
};

export default ProductOption;