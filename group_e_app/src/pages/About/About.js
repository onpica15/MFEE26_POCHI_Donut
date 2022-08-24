import gsap from 'gsap';
import { useEffect } from 'react';
import { useRef } from 'react';
function About() {
  const bingFirst = useRef(null);
  useEffect(() => {
    gsap.from(bingFirst.current, { scale: 1.2, duration: 30 });
  }, []);

  return (
    <>
      <div className="vh-100 overflow-hidden">
        <img
          className="w-100 mb-5"
          src="./images/index_img.svg"
          alt=""
          ref={bingFirst}
        />
      </div>
    </>
  );
}

export default About;
