'use client';

import { useState } from 'react';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string, description: string, color: string) => void;
}

const COLORS = [
  '#1b2838',
  '#2a475e',
  '#66c0f4',
  '#5c7e10',
  '#8f3f3f',
  '#1999ff',
  '#9b59b6',
  '#e74c3c',
];

export default function TaskModal({ isOpen, onClose, onSave }: TaskModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedColor, setSelectedColor] = useState(COLORS[5]);

  const handleSave = () => {
    if (!name.trim()) {
      alert('Please enter a task name');
      return;
    }

    onSave(name, description, selectedColor);
    setName('');
    setDescription('');
    setSelectedColor(COLORS[5]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[2000]" onClick={onClose}>
      <div
        className="bg-[#2a475e] rounded-lg w-[500px] max-w-[90%] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-[#1e3143] border-b border-black flex justify-between items-center rounded-t-lg">
          <h2 className="text-white text-xl font-bold">Add New Task</h2>
          <button
            onClick={onClose}
            className="text-[#8f98a0] hover:text-white text-3xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <div className="mb-5">
            <label className="block text-[#c7d5e0] text-sm font-bold mb-2 uppercase tracking-wide">
              Task Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter task name..."
              maxLength={50}
              className="w-full px-4 py-3 bg-[#1b2838] border border-[#2a475e] rounded-md text-[#c7d5e0] focus:outline-none focus:border-[#66c0f4] focus:bg-[#1e3143] transition-all"
              autoFocus
            />
          </div>

          <div className="mb-5">
            <label className="block text-[#c7d5e0] text-sm font-bold mb-2 uppercase tracking-wide">
              Description (Optional)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description..."
              rows={3}
              className="w-full px-4 py-3 bg-[#1b2838] border border-[#2a475e] rounded-md text-[#c7d5e0] focus:outline-none focus:border-[#66c0f4] focus:bg-[#1e3143] transition-all resize-none"
            />
          </div>

          <div className="mb-5">
            <label className="block text-[#c7d5e0] text-sm font-bold mb-2 uppercase tracking-wide">
              Theme Color
            </label>
            <div className="flex gap-3 flex-wrap">
              {COLORS.map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-12 h-12 rounded-md cursor-pointer transition-all border-3 ${
                    selectedColor === color ? 'border-white scale-110' : 'border-transparent'
                  } hover:scale-105`}
                  style={{
                    backgroundColor: color,
                    borderWidth: '3px',
                    borderStyle: 'solid',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#1e3143] border-t border-black flex justify-end gap-3 rounded-b-lg">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-[#3d4450] text-[#c7d5e0] rounded-md font-bold hover:bg-[#525b6a] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-gradient-to-b from-[#5c7e10] to-[#4e6e0e] text-[#d2e885] rounded-md font-bold hover:from-[#6d9412] hover:to-[#5c7e10] transition-all"
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
}
