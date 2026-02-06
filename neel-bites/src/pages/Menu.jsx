/* eslint-disable no-unused-vars */
// src/pages/Menu.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [flippedCardId, setFlippedCardId] = useState(null);
    const [searchParams] = useSearchParams();

    const toggleFlip = (id) => {
        setFlippedCardId(flippedCardId === id ? null : id);
    };

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'north-indian', name: 'North Indian' },
        { id: 'south-indian', name: 'South Indian' },
        { id: 'street-food', name: 'Street Food' },
        { id: 'desserts', name: 'Desserts' },
        { id: 'beverages', name: 'Beverages' },
    ];

    // Auto-select category from URL on mount / when URL changes
    useEffect(() => {
        const categoryFromUrl = searchParams.get('category');
        if (categoryFromUrl && categories.some(c => c.id === categoryFromUrl)) {
            setActiveCategory(categoryFromUrl);
        }
    }, [searchParams]);

    const menuItems = [
        {
            id: 'north-1',
            category: 'north-indian',
            icon: '🍛',
            title: 'Butter Chicken Mix',
            shortDesc: 'Creamy & rich – restaurant style in minutes',
            price: '₹149',
            bgColor: 'from-amber-50 to-red-50',
            details: [
                'Serves 2–3 people',
                'No artificial colors or preservatives',
                'Ready in 12–15 minutes',
                'Gluten-free',
                'Rich tomato & cream base with authentic Punjabi spices',
                'Just heat and serve with rice or naan',
            ],
        },
        {
            id: 'north-2',
            category: 'north-indian',
            icon: '🧀',
            title: 'Paneer Tikka Ready-to-Cook',
            shortDesc: 'Marinated paneer – grill or air-fry',
            price: '₹179',
            bgColor: 'from-orange-50 to-rose-50',
            details: [
                'High protein snack or main course',
                'Spicy & smoky tikka marinade included',
                'No preservatives',
                '10–12 minutes cooking time',
                'Perfect for tawa, grill or air fryer',
                'Soft paneer cubes with classic spices',
            ],
        },
        {
            id: 'south-1',
            category: 'south-indian',
            icon: '🥘',
            title: 'Idli Sambar Mix',
            shortDesc: 'Soft idlis with flavorful sambar',
            price: '₹129',
            bgColor: 'from-green-50 to-emerald-50',
            details: [
                'Traditional South Indian breakfast',
                'Fermented batter base for soft idlis',
                'Tangy & aromatic sambar with lentils',
                'Ready in 10 minutes',
                'Vegetarian & nutritious',
                'Serve with chutney or podi',
            ],
        },
        {
            id: 'street-1',
            category: 'street-food',
            icon: '🌮',
            title: 'Pav Bhaji Instant Mix',
            shortDesc: 'Mumbai street-style bhaji',
            price: '₹139',
            bgColor: 'from-red-50 to-rose-50',
            details: [
                'Iconic Mumbai street food experience',
                'Spicy mashed vegetable bhaji',
                'Buttery flavor included',
                'Ready in 10 minutes',
                'Very filling & satisfying',
                'Serve with buttered pav & lemon',
            ],
        },
        {
            id: 'dessert-1',
            category: 'desserts',
            icon: '🍮',
            title: 'Gulab Jamun Mix',
            shortDesc: 'Soft, syrupy gulab jamuns',
            price: '₹169',
            bgColor: 'from-pink-50 to-rose-50',
            details: [
                'Classic Indian sweet delicacy',
                'No frying needed – easy preparation',
                'Makes 12 soft gulab jamuns',
                'Aromatic rose & cardamom syrup',
                'Traditional taste preserved',
                'Perfect dessert or festive treat',
            ],
        },
        {
            id: 'beverage-1',
            category: 'beverages',
            icon: '🥤',
            title: 'Masala Chai Instant',
            shortDesc: 'Aromatic spiced Indian tea',
            price: '₹99',
            bgColor: 'from-amber-50 to-yellow-50',
            details: [
                'Authentic Indian masala chai',
                'Real ginger, cardamom & cloves',
                'Energizing & comforting',
                'Serves 4 cups',
                'Just add milk & sugar',
                'Perfect for any time of day',
            ],
        },
    ];

    const filteredItems =
        activeCategory === 'all'
            ? menuItems
            : menuItems.filter((item) => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-rose-50 pb-20">
            {/* Header */}
            <div className="container mx-auto px-5 sm:px-8 pt-16 pb-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-5"
                >
                    Our Instant Menu
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
                >
                    Authentic Indian flavors — ready in minutes. Choose your craving and bring home the taste of India.
                </motion.p>
            </div>

            {/* Filter Tabs */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-12">
                <div className="flex justify-center">
                    <div className="flex flex-nowrap overflow-x-auto gap-3 sm:gap-4 py-2">
                        {categories.map((cat) => (
                            <motion.button
                                key={cat.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.96 }}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`
            flex-shrink-0 px-6 py-2.5 sm:px-7 sm:py-3 
            rounded-full font-medium text-sm sm:text-base
            transition-all duration-300 snap-center cursor-pointer
            shadow-sm
            ${activeCategory === cat.id
                                        ? 'bg-emerald-600 text-white shadow-md ring-1 ring-emerald-700/40'
                                        : 'bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200/70 hover:bg-white hover:shadow hover:border-gray-300'
                                    }
          `}
                            >
                                {cat.name}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="container mx-auto px-5 sm:px-8">
                {filteredItems.length === 0 ? (
                    <div className="text-center py-20 text-xl text-gray-600">
                        No items found in this category.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredItems.map((item) => {
                            const isFlipped = flippedCardId === item.id;

                            return (
                                <div
                                    key={item.id}
                                    className="h-[440px] sm:h-[420px] perspective-[1000px] cursor-pointer group"
                                >
                                    <div
                                        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''
                                            }`}
                                    >
                                        {/* Front */}
                                        <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-white/95 via-gray-50/80 to-white/70 border border-gray-200/60 p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
                                            <div className="flex items-start justify-between mb-5">
                                                <div className="w-16 h-16 flex items-center justify-center text-5xl drop-shadow-lg bg-gradient-to-br from-emerald-100/80 to-emerald-50/50 rounded-2xl">
                                                    {item.icon}
                                                </div>
                                                <span className="bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-base font-semibold shadow-sm">
                                                    {item.price}
                                                </span>
                                            </div>

                                            <div className="flex-grow">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                                                    {item.shortDesc}
                                                </p>
                                            </div>

                                            <button
                                                onClick={() => toggleFlip(item.id)}
                                                className="mt-6 w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3.5 px-6 rounded-2xl font-semibold text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                                            >
                                                Quick View Details
                                            </button>
                                        </div>

                                        {/* Back */}
                                        <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-white/95 to-emerald-50/70 border border-emerald-100/60 p-7 flex flex-col [transform:rotateY(180deg)]">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-5">
                                                {item.title}
                                            </h3>

                                            <div className="flex-grow overflow-y-auto">
                                                <ul className="space-y-3 text-gray-800 text-[15px] pr-2">
                                                    {item.details.map((detail, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <span className="text-emerald-600 text-xl mr-3 mt-0.5 flex-shrink-0">•</span>
                                                            <span className="leading-relaxed">{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <button
                                                onClick={() => toggleFlip(item.id)}
                                                className="mt-6 w-full bg-gray-800 hover:bg-gray-900 text-white py-3.5 px-6 rounded-2xl font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                                            >
                                                Back to Overview
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-20 px-5"
            >
                <p className="text-xl text-gray-700 mb-6">
                    Want something custom or have a special request?
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                    Contact Us
                </a>
            </motion.div>
        </div>
    );
};

export default Menu;