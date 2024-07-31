import React, { useEffect, useState } from 'react';
import ModalPers from './Modal'; // Убедитесь, что путь к компоненту правильный

export default function Table({ filter, searchQuery }) {
    const [data, setData] = useState([]);
    const [selectedVisitor, setSelectedVisitor] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        // Загрузка данных из localStorage при монтировании компонента
        const savedData = JSON.parse(localStorage.getItem('testData'));
        if (savedData) {
            setData(savedData);
        }
    }, []);

    const filteredData = data
        .filter(item => filter ? filter === 'present' ? item.presence : !item.presence : true)
        .filter(item => searchQuery ? item.fio.toLowerCase().includes(searchQuery.toLowerCase()) : true);

    const handleRowClick = (visitor) => {
        setSelectedVisitor(visitor);
        setModalOpen(true);
    };

    const handleDeleteVisitor = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        localStorage.setItem('testData', JSON.stringify(updatedData));
        setData(updatedData);
        setModalOpen(false);
        window.location.reload();
    };

    const handleUpdateVisitor = (updatedVisitor) => {
        const updatedData = data.map(item => item.id === updatedVisitor.id ? updatedVisitor : item);
        localStorage.setItem('testData', JSON.stringify(updatedData));
        setData(updatedData);
        setModalOpen(false);
        window.location.reload();
    };

    return (
        <main className="mt-8">
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="text-xl text-[#4E3000] font-semibold">
                            <th className="py-2 px-4 border-b border-gray-300 text-left w-32">Номер</th>
                            <th className="py-2 px-4 border-b border-gray-300 text-left w-80">ФИО</th>
                            <th className="py-2 px-4 border-b border-gray-300 text-left w-1/6">Компания</th>
                            <th className="py-2 px-4 border-b border-gray-300 text-left w-1/3">Группа</th>
                            <th className="py-2 px-4 border-b border-gray-300 text-left w-1/12">Присутствие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index} className="text-3xl hover:bg-gray-100 cursor-pointer" onClick={() => handleRowClick(item)}>
                                <td className="py-2 px-4">{item.id}</td>
                                <td className="py-2 px-4">{item.fio}</td>
                                <td className="py-2 px-4">{item.company}</td>
                                <td className="py-2 px-4">{item.group}</td>
                                <td className="py-2 px-4 flex justify-center">
                                    <div className={`w-14 h-14 rounded-full ${item.presence ? 'bg-[#80BB00]' : 'bg-[#EC5937]'}`}></div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedVisitor && (
                <ModalPers
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    onAddVisitor={handleUpdateVisitor}
                    onDeleteVisitor={handleDeleteVisitor}
                    visitor={selectedVisitor}
                    isEditMode={true}
                />
            )}
        </main>
    );
}