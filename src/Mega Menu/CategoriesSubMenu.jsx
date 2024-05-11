import React from 'react';

function CategoriesSubMenu() {
    const categories = [
        { title: 'Kitchen', items: ['Demo text', 'Demo text', 'Demo text'] },
        { title: 'Living Room', items: ['Demo text', 'Demo text', 'Demo text', 'Demo text'] },
        { title: 'Bedroom', items: ['Demo text'] },
        { title: 'Bathroom', items: ['Demo text', 'Demo text', 'Demo text'] },
        { title: 'Outdoor', items: ['Demo text', 'Demo text', 'Demo text', 'Demo text', 'Demo text'] },
        { title: 'Office', items: ['Demo text', 'Demo text', 'Demo text', 'Demo text', 'Demo text'] },
    ];

    return (
        <div className=''>
            <div className='bg-white mt-6 rounded-xl'>
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

export default CategoriesSubMenu;
