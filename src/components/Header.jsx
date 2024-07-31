import React, { useEffect, useState } from 'react';
import ModalPers from './Modal';

export default function Header({ setSearchQuery }) {
    const [totalVisitors, setTotalVisitors] = useState(0);
    const [presentVisitors, setPresentVisitors] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        // Загрузка данных из localStorage при монтировании компонента
        const savedData = JSON.parse(localStorage.getItem('testData'));
        if (savedData) {
            const total = savedData.length;
            const present = savedData.filter(item => item.presence).length;
            setTotalVisitors(total);
            setPresentVisitors(present);
        }
    }, []);

    const handleAddVisitor = (visitor) => {
        const savedData = JSON.parse(localStorage.getItem('testData')) || [];
        const lastId = savedData.length > 0 ? savedData[savedData.length - 1].id : 0;
        const newVisitor = { ...visitor, id: lastId + 1 };
        const newData = [...savedData, newVisitor];
        localStorage.setItem('testData', JSON.stringify(newData));
        setTotalVisitors(newData.length);
        setPresentVisitors(newData.filter(item => item.presence).length);
        window.location.reload();
    };

    return (
        <header className="flex font-sans w-full justify-between">
            <div className="flex items-end">
                <img src="./logo.png" alt="" />
                <input
                    type="text"
                    placeholder='Поиск по имени'
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='form-input border-none shadow-[0px_1px_4px_rgba(0,0,0,0.16)] h-14 w-[395px] pl-4 mx-10 placeholder:text-gray-500 text-xl focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent'
                />
                <button
                    onClick={() => setModalOpen(true)}
                    variant="contained"
                    className="h-14 w-[275px] shadow-[0px_3px_3px_rgba(0,0,0,0.16)] bg-[#4CAF50] text-white text-2xl rounded-xl hover:bg-[#37823a]"
                >
                    Добавить
                </button>
            </div>
            <div className="flex flex-col">
                <h1 className="text-[#4E3000]">Посетители</h1>
                <div className="flex text-[#4E3000] text-3xl font-bold justify-end gap-2">
                    <p className="text-[#80BB00]">{presentVisitors}</p>/<p className="text-[#EC5937]">{totalVisitors - presentVisitors}</p>
                </div>
            </div>
            <ModalPers open={modalOpen} onClose={() => setModalOpen(false)} onAddVisitor={handleAddVisitor} isEditMode={false} />
        </header>
    );
}