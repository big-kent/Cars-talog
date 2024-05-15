import React, { useRef } from 'react';

const SpecList = ({content}) => {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  const handleH1MouseOver = () => {
    // Check if h1Ref.current is not null before adding the animation class
    if (h1Ref.current) {
      h1Ref.current.classList.add("spec-animation");
    }

    // Check if h2Ref.current is not null before adding the animation class
    if (h2Ref.current) {
      h2Ref.current.classList.add("spec-animation");
    }

    setTimeout(function () {
      // Check if h1Ref.current is not null before removing the animation class
      if (h1Ref.current) {
        h1Ref.current.classList.remove("spec-animation");
      }

      // Check if h2Ref.current is not null before removing the animation class
      if (h2Ref.current) {
        h2Ref.current.classList.remove("spec-animation");
      }
    }, 350);
  };

  return (
    <div id="container" className ="block h-[25px] overflow-hidden">
        <p id='title' ref={h1Ref} onMouseOver={handleH1MouseOver}>{content}</p>
        <p id ='title_1' ref={h2Ref}>{content}</p>
    </div>
  );
};

export default SpecList;