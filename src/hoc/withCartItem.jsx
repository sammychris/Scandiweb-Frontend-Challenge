import React, { useState } from 'react';

function withCartItem(Component) {
  return function cartItem(props) {
    const [viewImageByIndex, setViewImageByIndex] = useState(0);

    const onPrev = (e) => {
      e.preventDefault();
      setViewImageByIndex(viewImageByIndex - 1);
    };

    const onNext = (e) => {
      e.preventDefault();
      setViewImageByIndex(viewImageByIndex + 1);
    };

    return (
      <Component
        onPrev={onPrev}
        onNext={onNext}
        viewImageByIndex={viewImageByIndex}
        {...props}
      />
    );
  };
}

export default withCartItem;
