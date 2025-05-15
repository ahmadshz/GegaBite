import img from '../../../assets/img.png';
import food from '../../../assets/food.png';

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
        {
            name: "Chicken Biryani",
            imgs: food,
            price: 20,
            category: 'Hot'
        },
        {
            name: "Chicken Biryani",
            imgs: food,
            price: 20,
            category: 'Hot'
        },
        {
            name: "Chicken Biryani",
            imgs: food,
            price: 20,
            category: 'Hot'
        },
    ];

    return (
        <div className='container mt-16 lg:mt-24'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 lg:gap-x-5 gap-y-14 mb-16 lg:mb-0 '>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className='relative pt-16  bg-gray-100 dark:bg-[#282828] rounded-[28px] min-h-[178px] lg:min-h-[250px] text-center'
                    >
                        {/* الصورة طالعة لفوق نسبياً */}
                        <img
                            src={item.imgs}
                            alt={`Recipe ${index + 1}`}
                            className='w-24 h-24 lg:w-28 lg:h-28 object-cover rounded-full absolute top-[-40px] lg:top-[-55px] left-1/2 transform -translate-x-1/2'
                        />

                        {/* الاسم */}
                        <h2 className='text-sm font-semibold mt-2 text-[14px] lg:text-[20px]'>{item.name}</h2>

                        {/* السعر والفئة */}
                        <div className='flex justify-center items-center gap-1 mt-4 text-sm text-[14px] lg:text-[20px]'>
                            <div className='w-2/4 text-center'>{item.price}$</div>
                            <div className='h-[50px] lg:h-[100px] w-[2px]  rounded-full bg-[#282828] dark:bg-white' />
                            <div className='w-2/4 text-center break-words'>
                                {item.category.length > 12 ? item.category.slice(0, 12) + '...' : item.category}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeList;
