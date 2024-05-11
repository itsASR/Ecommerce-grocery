import React from 'react';

function ProductsSubMenu() {
    const categories = [
        { title: 'Kids', items: ['T-shirt', 'Shorts', 'Dress', 'Sneakers'] },
        { title: 'Women', items: ['Jeans', 'Blouse', 'Skirt', 'Sandals', 'Handbag'] },
        { title: 'Men', items: ['Polo Shirt', 'Chinos', 'Jacket', 'Sneakers'] },
        { title: 'Trending', items: ['Hoodie', 'Leggings', 'Sweatshirt'] },
        { title: 'New Arrival', items: ['Coat', 'Activewear Set', 'Boots', 'Hat', 'Backpack'] },
        { title: 'Grocery', items: ['Bread', 'Milk', 'Eggs', 'Bananas', 'Chicken', 'Pasta', 'Tomatoes', 'Cereal', 'View All'] }
    ];
    

    return (
        <div className=''>
            <div className='bg-white mt-6 rounded-xl '>
                <div className='mx-8 pt-5 pb-8 flex '>
                    {categories.map((category, index) => (
                        <div key={index} className='mr-8'>
                            <h1 className='text-lg font-semibold mb-2 text-nowrap'>{category.title}</h1>
                            <ul className='space-y-1'>
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className='text-sm font-normal text-gray-600 text-nowrap'>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductsSubMenu;
