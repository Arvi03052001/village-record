import React from 'react';

interface ButtonGroupProps {
  onConfirm: () => void;
  onCancel: () => void;
  confirmText: string;
  cancelText: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
}) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={onConfirm}
        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-lg font-semibold transition duration-300"
      >
        {confirmText}
      </button>
      <button
        onClick={onCancel}
        className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition duration-300"
      >
        {cancelText}
      </button>
    </div>
  );
};