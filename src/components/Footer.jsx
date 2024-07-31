import React, { useState } from 'react';

export default function Footer({ setFilter }) {
    const [selectedFilter, setSelectedFilter] = useState(null);

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
        setFilter(filter);
    };

    const handleResetClick = () => {
        setSelectedFilter(null);
        setFilter(null);
    };

    return (
        <footer className="fixed bottom-4 left-12 w-full flex items-center py-4">
            <p className="text-3xl text-[#4E3000] font-bold">Фильтровать по:</p>
            <div className="flex items-center space-x-12 text-[#4E3000] ml-16 mr-10">
                <button
                    className={`text-2xl ${selectedFilter === 'absent' ? 'border-b-2 border-[#4E3000]' : ''} pb-1`}
                    onClick={() => handleFilterClick('absent')}
                >
                    Отсутствующими
                </button>
                <button
                    className={`text-2xl ${selectedFilter === 'present' ? 'border-b-2 border-[#4E3000]' : ''} pb-1`}
                    onClick={() => handleFilterClick('present')}
                >
                    Присутствующими
                </button>
            </div>
            <button
                className={`${selectedFilter ? 'bg-[#4E3000] text-white' : 'bg-gray-400 text-white cursor-not-allowed'} rounded-xl py-2 px-5 text-2xl`}
                onClick={handleResetClick}
                disabled={!selectedFilter}
            >
                Без фильтра
            </button>
        </footer>
    );
}