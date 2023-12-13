import { useState, useEffect } from 'react';

export default function useIsRefWithinViewport(ref = false) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) => {
    const { isIntersecting } = entry;
    setIntersecting(isIntersecting);
  });

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [observer, ref]);

  return isIntersecting;
}
