import React, { useContext } from 'react';
import { Apis } from '../App';
import { Link } from 'react-router-dom';

function ProductsSubMenu() {
    const { productDetails } = useContext(Apis); // Removed 'categories' since it's not used in this component

    const CategoryList = ({ productDetails }) => {
        // Organize productDetails into categories and subcategories
        const organizedData = productDetails.reduce((acc, item) => {
            const { category, sub_category } = item;

            if (!acc[category]) {
                acc[category] = new Set();
            }

            acc[category].add(sub_category);

            return acc;
        }, {});

        return (
            <div className=''>
                <div className='bg-white mt-6 rounded-xl w-[80vw] h-[80vh] overflow-y-scroll no-scrollbar'>
                    <div className='mx-8 pt-5 pb-8 grid grid-cols-7 gap-2'>
                        {/* Use Object.entries to iterate over organizedData */}
                        {Object.entries(organizedData).map(([category, subCategories], index) => (
                            <div key={category}>
                                <h1 className='text-lg font-semibold text-nowrap'>{category}</h1>

                                <ul>
                                    {[...subCategories].map((subCategory, subIndex) => (
                                        <li key={subIndex}>
                                            <Link to={`/cproduct?name=${subCategory}`} className='text-sm font-normal text-gray-600 text-wrap hover:text-green-600'>
                                                {subCategory}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            {/* Render CategoryList and pass productDetails */}
            <CategoryList productDetails={productDetails} />
        </div>
    );
}

export default ProductsSubMenu;
