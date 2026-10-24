import React from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const startedAt = Date.now();
    let completeTimer;
    const hideLoader = () => setVisible(false);
    const finishLoading = () => {
      completeTimer = window.setTimeout(hideLoader, Math.max(750 - (Date.now() - startedAt), 0));
    };
    const fallbackTimer = window.setTimeout(hideLoader, 2200);

    if (document.readyState === 'complete') finishLoading();
    else window.addEventListener('load', finishLoading, { once: true });

    return () => {
      window.clearTimeout(completeTimer);
      window.clearTimeout(fallbackTimer);
      window.removeEventListener('load', finishLoading);
    };
  }, []);

  if (!visible) return null;
  return (
    <div className="site-loader" role="status" aria-label="Loading SVM IT Solutions">
      <span className="site-loader__bars" aria-hidden="true"><i /><i /><i /></span>
    </div>
  );
}
