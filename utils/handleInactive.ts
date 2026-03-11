import React from 'react';

export const handleInactive = (e: React.MouseEvent | React.TouchEvent | React.KeyboardEvent | React.SyntheticEvent) => {
  e.preventDefault();
  window.dispatchEvent(new Event('trigger-toast'));
};
