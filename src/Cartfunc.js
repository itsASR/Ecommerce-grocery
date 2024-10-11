import axios from "axios"
import allApis from './APIs/Apis';

// export const meranaam = () => {
//     return console.log("abhishek Sharma ")
// } 

// const postData ={
//     email : "tsoni9742@gmail.com",
//     product_id : product_id,
//     size : "M",
//     color : "blue"
// }

export const addcartfunc = async (product , activeColor , selectedSize) => {
    // const {setReloaddata} = useContext(A)
console.log("product_idproduct_id", product ,activeColor , selectedSize)
    try {
        const response = await axios.post(allApis.add_cart, {
            email: "tsoni9742@gmail.com",
            product_id: product.id,
            size: selectedSize,
            color: activeColor
        })
        setReloaddata(Math.random())
        console.log("my res from func is ", response);
    } catch (error) {
        console.log("error in my diff func ", error);
    }
};