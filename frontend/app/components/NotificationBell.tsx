import { FaBell } from "react-icons/fa";
import { useState, useEffect } from "react";

interface NotificationBellProps {
  notifications: number;
}

const NotificationBell = ({ notifications }: NotificationBellProps) => {
  const [badgeVisible, setBadgeVisible] = useState(false);

  useEffect(() => {
    if (notifications > 0) {
      setBadgeVisible(true);
    }
  }, [notifications]);

  return (
    <div className="relative group" aria-label="Notifications">
      <FaBell
        className="text-gray-500 text-2xl cursor-pointer transition-transform duration-200 group-hover:scale-110"
        aria-hidden="true"
      />
      {badgeVisible && (
        <span
          className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center animate-bounce"
          aria-live="polite"
        >
          {notifications > 99 ? "99+" : notifications}
        </span>
      )}
    </div>
  );
};

export default NotificationBell;
