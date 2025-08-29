import React from 'react';
import Typed from 'typed.js';

// https://github.com/mattboldt/typed.js

export function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer', 'English Teacher', 'Web Developer', 'Spanish Interpreter'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}