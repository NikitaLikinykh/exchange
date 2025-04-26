import React from "react";

interface AccountModalProps {
  onClose: () => void;
}

export default function AccountModal({ onClose }: AccountModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <div className="text-lg font-semibold mb-4">Мой аккаунт</div>
        <ul className="space-y-2">
          <li>
            <a href="/profile" className="text-blue-600 hover:underline">
              Личный кабинет
            </a>
          </li>
          <li>
            <a href="/logout" className="text-blue-600 hover:underline">
              Выйти из аккаунта
            </a>
          </li>
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}
