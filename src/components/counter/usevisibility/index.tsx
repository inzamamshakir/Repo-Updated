import { useState, useEffect, useRef, RefObject } from 'react';

// Define options type for IntersectionObserver
interface UseVisibilityOptions extends IntersectionObserverInit {}

export const useVisibility = (
  options?: UseVisibilityOptions
): [RefObject<Element>, boolean] => {
  // State to track visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<Element>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting); // Update visibility state
    }, options);

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

