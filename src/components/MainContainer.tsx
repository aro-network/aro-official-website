import { useEffect, useRef, } from 'react';
import { Solutions } from './solutions';
import { Architecture } from './architecture';
import { useScrollControl } from '../hooks/useScrollControl';





export function MainContainer() {
  const { currentContainer, scroll } = useScrollControl();
  const containerRef = useRef<HTMLDivElement>(null);


  const containers = [


    {
      Component: Solutions,
      sectionsCount: 3
    },
    {
      Component: Architecture,
      sectionsCount: 3
    },

  ];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {

      e.preventDefault();
      scroll(
        e.deltaY > 0 ? 'down' : 'up',
        containers.length,
        5
      );
    };

    const container = containerRef.current;

    console.log('containercontainercontainer', container);

    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        container.removeEventListener('wheel', handleWheel);
      };
    }
  }, [currentContainer, scroll]);


  console.log('currentContainercurrentContainer222', currentContainer);


  return (
    <div ref={containerRef} className="h-screen overflow-hidden">
      {containers.map(({ Component }, index) => (
        <div
          key={index}
          className={`transition-transform duration-700 ${currentContainer === index ? 'translate-y-0' : 'translate-y-full'
            }`}
          style={{
            position: currentContainer === index ? 'relative' : 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            visibility: currentContainer === index ? 'visible' : 'hidden'
          }}
        >
          <Component />
        </div>
      ))}
    </div>
  );
}