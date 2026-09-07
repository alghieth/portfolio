import React, { useState, useEffect } from 'react';
import './Loader.css';

export default function Loader({ finishLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // زيادة العداد تدريجياً ليعطي إحساساً تقنياً سريعاً
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            finishLoading();
          }, 350); // مهلة قصيرة لإتمام حركة الخروج
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <div className={`loader-container ${progress === 100 ? 'fade-out' : ''}`}>
      <div className="loader-content">
        {/* الشعار برسم الخطوط التفاعلي */}
        <div className="loader-logo">
          <svg viewBox="0 0 100 100" className="logo-svg">
            <rect
              x="5"
              y="5"
              width="90"
              height="90"
              rx="18"
              className="logo-frame"
            />
            <text
              x="50%"
              y="54%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="logo-letters"
            >
              AM
            </text>
          </svg>
        </div>

        {/* شريط التحميل والعداد الرقمي */}
        <div className="loader-progress-wrapper">
          <div className="loader-bar-bg">
            <div
              className="loader-bar-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="loader-counter">{progress}%</span>
        </div>
      </div>
    </div>
  );
}