import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaCircle, FaFilter } from "react-icons/fa";
import { Apis } from '../App';
import MainHeader from '../Main Ecommerce/MainHeader';
import MegaProductSubCategories from '../Mega Menu/MegaProductSubCategories';
import allApis from '../APIs/Apis';


function CategoryPage() {
    const { SearchResultdata, setSearchResultdata, categories, productDetails, SearchResultQuery, setSearchResultQuery } = useContext(Apis);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const [isSortMenuVisible, setSortMenuVisible] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    const [subcatHook, setSubcatHook] = useState([])
    const [categoryproducts, setCategoryproducts] = useState([])
    const navigate = useNavigate();
    const [optionvalue1, setOptionvalue1] = useState('')
    const [finalCategory, setFinalCategory] = useState('')


    const handleSortChange1 = (e) => {
        setOptionvalue1(e.target.value)
    }




    useEffect(() => {
        setSearchResultQuery("");
    }, [name, productDetails]);

    const sortProducts = (products) => {
        switch (sortOption) {
            case 'name-asc':
                return products.sort((a, b) => a.name.localeCompare(b.name));
            case 'name-desc':
                return products.sort((a, b) => b.name.localeCompare(a.name));
            case 'price-asc':
                return products.sort((a, b) => a.regular_price - b.regular_price);
            case 'price-desc':
                return products.sort((a, b) => b.regular_price - a.regular_price);
            case 'color':
                return products.sort((a, b) => a.colors[0].localeCompare(b.colors[0])); // Assuming color is a string
            default:
                return products;
        }
    };

    // console.log("chip", filteredProducts)
    useEffect(() => {
        const arrr3 = [];
        if (name) {
            // Filter products by category name
            const filteredProducts = productDetails.filter(product => product.category && product.category.includes(name));
            console.log("filteredProducts", filteredProducts);

            // Collect unique sub-categories from filtered products
            filteredProducts.forEach(product => {
                if (product.sub_category && !arrr3.includes(product.sub_category)) {
                    arrr3.push(product.sub_category);
                }
            });


            // Update final category with collected sub-categories
            setFinalCategory(arrr3);

            // Further filter products by sub-category "Shoes"
            if (optionvalue1 === "") {
                const filteredSubCat = filteredProducts;
                setFilteredProducts(sortProducts(filteredSubCat));
            } else {
                const filteredSubCat = filteredProducts.filter(product => product.sub_category === optionvalue1);
                setFilteredProducts(sortProducts(filteredSubCat));
            }
           
        } else {
            // When no category name is specified
            const arr2 = [];
            console.log("categories", categories);
            setCategoryproducts(sortProducts(categories));
        }
    }, [name, productDetails, sortOption, optionvalue1]);



    useEffect(() => {
        console.log("yahi chahiye", finalCategory)
    }, [finalCategory])


    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const toggleSortMenu = () => {
        setSortMenuVisible(!isSortMenuVisible);
    };

    console.log("filteredProductsfilteredProducts", filteredProducts)

    const filtersubcat = () => {
        let arr = [];
        filteredProducts.map((products) => {
            const conditions = arr.includes(products.sub_category);
            if (!conditions) {
                arr.push(products.sub_category)
                console.log("arrrer", arr)
            } else {
                console.log("contains", products.sub_category)
            }
        })
        setSubcatHook(arr);
    }

    useEffect(() => {
        filtersubcat();
    }, [filteredProducts])

    function catshow(e) {
        e.preventDefault();
        navigate("/cproduct?name=" + e.target.innerText);

    }

    const Component2 = () => {
        return (<>

            <div className="bg-white">

                <div className='w-full h-10 bg-gray-200 flex items-center '>
                    <ul className='no-scrollbar flex [&>li]:px-2 sm:[&>li]:px-5 px-4 sm:px-10 text-xs sm:text-sm overflow-x-auto whitespace-nowrap'>
                        {
                            subcatHook?.slice(0, 10).map((names) => (
                                <li onClick={(e) => catshow(e)}>{names}</li>
                            ))
                        }

                    </ul>
                </div>
                <div className='text-center py-10 sm:py-20 bg-gray-100'>
                    <p className='text-2xl sm:text-5xl pb-2'>{name?.toUpperCase()}</p>

                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-x-4 px-4 sm:px-7 gap-y-10 pb-12 pt-10'>
                    {filteredProducts.map((product, index) => (

                        <Link to={`/product?id=${product.id}`}><article class="relative flex flex-col overflow-hidden rounded-lg border ">
                            <div class="aspect-square overflow-hidden">
                                <img src={allApis?.baseurl + product.colorDetails[0].image_url[0].url} class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" />
                            </div>

                            <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                                <div class="mb-2 flex">
                                    <p class="mr-3 text-sm font-semibold">{product.colorDetails[0].sizeDetails[0].discount_price}</p>
                                    <del class="text-xs text-gray-400"> {product.colorDetails[0].sizeDetails[0].regular_price}</del>
                                </div>
                                <div className="color-variant flex [&>*]:mr-2 py-1">
                                    {product.colorDetails.map((color, idx) => (
                                        <FaCircle className='border-[1px] border-black rounded-full' style={{ color: color.color }} key={idx} />
                                    ))}
                                </div>
                                <h3 class="mb-2 text-sm text-gray-400">{product.name.slice(0, 30)}</h3>
                            </div>
                            {/* <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
                          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
                        </button> */}
                        </article></Link>
                    ))}



                </div>
            </div>
        </>)
    }

    const Component3 = () => {
        const navigate = useNavigate();
        function CategoryRedirect(name) {
            navigate("/category?name=" + name);
        }
        return (
            <>

                <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
                    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-lg text-center">
                            <h2 className="font-serif text-2xl font-bold sm:text-3xl">Discover Your Next Favorite Find</h2>
                            <p className="mt-4 text-base text-gray-700">Explore our curated categories and uncover unique products tailored to your style and needs. From everyday essentials to exclusive finds, we have something for everyone</p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">


                            {
                                categories.map((category) => (
                                    <article className="relative bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden mb-10" onClick={() => CategoryRedirect(category.name)}>
                                        <div className="aspect-square overflow-hidden">
                                            <img
                                                src={allApis?.baseurl + category.image_url}
                                                alt={category.name}
                                                className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-center text-center px-4 py-2 bg-gray-100">
                                            <div>
                                                <h3 className="text-xs font-semibold sm:text-sm md:text-base text-gray-700">
                                                    {category.name}
                                                </h3>
                                            </div>
                                        </div>
                                    </article>
                                ))

                            }




                        </div>
                    </div>
                </section>

            </>
        )
    }

    return (
        <> <p
            className=' fixed bottom-10 right-5 text-xl bg-black p-5 rounded-full z-[100] cursor-pointer'
            onClick={toggleSortMenu}
        >
            <FaFilter color="#fff" />
        </p>
            {
                isSortMenuVisible && (
                    <div className="fixed inset-0 flex items-center justify-center z-[200] bg-black bg-opacity-50">
                        <div className="bg-white p-4 rounded shadow-lg">
                            <div className='sort-options text-center mb-5'>
                                <p className='text-3xl py-5'>Filter</p>
                                <div className='pb-5'>
                                    <label htmlFor="sort" className="mr-2">Filter By:</label>
                                    <select id="sort" value={optionvalue1} onChange={handleSortChange1} className="p-2 border rounded">
                                        <option value="">None</option>
                                        {
                                            finalCategory.map((subcat) => (
                                                <option value={subcat}>{subcat}</option>
                                            ))
                                        }

                                    </select>
                                </div>

                                <div className='pb-5'>
                                    <label htmlFor="sort" className="mr-2">Sort By:</label>
                                    <select id="sort" value={sortOption} onChange={handleSortChange} className="p-2 border rounded">
                                        <option value="">None</option>
                                        <option value="name-asc">Name (A-Z)</option>
                                        <option value="name-desc">Name (Z-A)</option>
                                        <option value="price-asc">Price (Low to High)</option>
                                        <option value="price-desc">Price (High to Low)</option>
                                        {/* <option value="color">Color</option> */}
                                    </select>
                                </div>
                            </div>
                            <button className="mt-2 px-4 py-2 bg-gray-300 rounded float-right" onClick={toggleSortMenu}>Done</button>
                        </div>
                    </div>
                )
            }
            <div className='md:h-20'>
                <MainHeader></MainHeader>
            </div>
            {name ? <Component2></Component2> : <Component3></Component3>}

        </>
    );
}

export default CategoryPage;
