import React from 'react';

export const handleInactive = (e: React.MouseEvent) => {
  e.preventDefault();
  window.dispatchEvent(new Event('trigger-toast'));
};
