import React from 'react';
import img from '../../assets/img.png';
import food from '../../assets/food.png';

const RecipeList = () => {
    const data = [
        {
            name: "Chicken Biryani",
            imgs: img,
            price: 10,
            category: 'Spicy'
        },
        {
            name: "Chicken Biryani",
            imgs: img,
            price: 5,
            category: 'Mild'
        },
        {
            name: "Chicken Biryani",
            imgs: food,
            price: 7,
            category: 'Medium'
        },
        {
            name: "Chicken Biryani",
            imgs: food,
            price: 7,
            category: 'Medium'
        },
        {
            name: "Chicken Biryani",
            imgs: food,
            price: 7,
            category: 'Medium'
        },
        {
            name: "Chicken Biryani",
            imgs: food,
            price: 7,
            category: 'Medium'
        },
        {
            name: "Chicken Biryani",
            imgs: food,
            price: 20,
            category: 'Hot'
        },
    ];

    return (
        <div className='container mt-16'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 lg:gap-x-5 gap-y-14'>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className='relative pt-16 bg-gray-100 dark:bg-[#282828] rounded-[28px] h-[178px] text-center'
                    >
                        {/* الصورة طالعة لفوق نسبياً */}
                        <img
                            src={item.imgs}
                            alt={`Recipe ${index + 1}`}
                            className='w-24 h-24 object-cover rounded-full absolute top-[-40px] left-1/2 transform -translate-x-1/2'
                        />

                        {/* الاسم */}
                        <h2 className='text-sm font-semibold mt-2'>{item.name}</h2>

                        {/* السعر والفئة */}
                        <div className='flex justify-center items-center gap-4 mt-4 text-sm'>
                            <div>{item.price}$</div>
                                <div className='h-[50px] w-[2px]  rounded-full bg-[#282828] dark:bg-white' />
                            <div>{item.category}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeList;
