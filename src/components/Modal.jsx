import React, { useState, useEffect } from 'react';
import { Modal, Box, IconButton, Autocomplete, TextField, Paper } from '@mui/material';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';

const companies = [
    { value: 'Компания А', label: 'Компания А' },
    { value: 'Компания Б', label: 'Компания Б' },
    { value: 'Компания В', label: 'Компания В' },
    { value: 'Компания Г', label: 'Компания Г' },
    { value: 'Компания Д', label: 'Компания Д' },
];

export default function ModalPers({ open, onClose, onAddVisitor, onDeleteVisitor, visitor, isEditMode }) {
    const [fio, setFio] = useState('');
    const [company, setCompany] = useState(null);
    const [group, setGroup] = useState('');
    const [presence, setPresence] = useState(false);

    useEffect(() => {
        if (visitor) {
            setFio(visitor.fio);
            setCompany(companies.find(c => c.value === visitor.company) || null);
            setGroup(visitor.group);
            setPresence(visitor.presence);
        } else {
            setFio('');
            setCompany(null);
            setGroup('');
            setPresence(false);
        }
    }, [visitor]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!visitor) {
            onAddVisitor({ fio, company: company ? company.value : '', group, presence });
        } else {
            onAddVisitor({ id: visitor.id, fio, company: company ? company.value : '', group, presence });
        }
        onClose();
    };

    const handleDelete = () => {
        if (visitor) {
            onDeleteVisitor(visitor.id);
        }
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                borderRadius: 6,
                width: "73%", // Устанавливаем ширину модального окна
                paddingLeft: "21%",
                paddingRight: "15%"// Добавляем внутренний отступ справа
            }}>
                <IconButton onClick={onClose} sx={{ position: 'absolute', top: 5, right: 5, fontSize: 45 }}>
                    <CancelSharpIcon sx={{ fontSize: 45 }} />
                </IconButton>
                <form onSubmit={handleSubmit} className='flex flex-col gap-10 py-12'>
                    <div className="mb-4 flex items-center gap-40">
                        <label className="block text-[#4E3000] text-3xl font-semibold">ФИО</label>
                        <input type="text" value={fio} onChange={(e) => setFio(e.target.value)} className=" form-input border-none shadow-[0px_1px_4px_rgba(0,0,0,0.16)] h-14 w-full placeholder:text-gray-500 text-3xl focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent" required />
                    </div>
                    <div className="mb-4 flex items-center gap-20">
                        <label className="block text-[#4E3000] text-3xl font-semibold">Компания</label>
                        <Autocomplete
                            sx={{
                                width: "100%"
                            }}
                            value={company}
                            onChange={(event, newValue) => setCompany(newValue)}
                            options={companies}
                            getOptionLabel={(option) => option.label}
                            noOptionsText="Не найдено"
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    placeholder="Выбрать"
                                    sx={{
                                        fontSize: '1.75rem',
                                        '& .MuiOutlinedInput-root': {
                                            height: '56px',
                                            '& fieldset': {
                                                border: 'none',
                                                boxShadow: '0px 1px 4px rgba(0,0,0,0.16)',
                                            },
                                            '& input': {
                                                padding: '14px 14px',
                                                fontSize: '1.75rem',
                                                color: 'text.primary',
                                            },
                                        },
                                    }}
                                />
                            )}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '1.75rem' }}>
                                    {option.label}
                                </li>
                            )}
                            PaperComponent={({ children }) => (
                                <Paper style={{ maxHeight: '180px', overflow: 'auto' }}>
                                    {children}
                                </Paper>
                            )}
                        />
                    </div>
                    <div className="mb-4 flex items-center gap-32">
                        <label className="block text-[#4E3000] text-3xl font-semibold">Группа</label>
                        <input type="text" value={group} onChange={(e) => setGroup(e.target.value)} className=" form-input border-none shadow-[0px_1px_4px_rgba(0,0,0,0.16)] h-14 w-full placeholder:text-gray-500 text-3xl focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent" required />
                    </div>
                    <div className="mb-4 flex items-center gap-8">
                        <label className="block text-[#4E3000] text-3xl font-semibold">Присутствует</label>
                        <input
                            type="checkbox"
                            checked={presence}
                            onChange={(e) => setPresence(e.target.checked)}
                            className="form-checkbox h-8 w-8 rounded-md text-green-500 border-none shadow-[0px_1px_4px_rgba(0,0,0,0.16)] placeholder:text-gray-500 text-xl focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent"
                        />
                    </div>

                    {isEditMode ? (
                        <div className="flex gap-5 text-2xl">
                            <button type="submit" className=" bg-[#4CAF50] text-white text-xl rounded-lg py-2 px-16 hover:bg-[#37823a]">Сохранить</button>
                            <button type="button" onClick={handleDelete} className=" bg-[#EC5937] text-white text-xl rounded-lg py-2 px-16 hover:bg-[#a03d26]">Удалить</button>
                        </div>
                    ) :
                        (<div className="flex gap-5 text-2xl">
                            <button type="submit" className=" bg-[#4CAF50] text-white text-xl rounded-lg py-2 px-16 hover:bg-[#37823a]">Добавить</button>
                            <button type="button" onClick={onClose} className=" bg-gray-500 text-white text-xl rounded-lg py-2 px-16 hover:bg-gray-600">Отменить</button>
                        </div>
                        )}
                </form>
            </Box>
        </Modal>
    );
}