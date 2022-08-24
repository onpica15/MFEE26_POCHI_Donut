import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

function Story2() {
  const textRef = useRef(null);
  const bingFlag1Ref = useRef(null);
  const bingFlag2Ref = useRef(null);
  const bingFlag3Ref = useRef(null);
  const ballRef = useRef(null);
  useEffect(() => {
    gsap.from(textRef.current, {
      delay: 0.5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: textRef.current,
      },
    });
    gsap.from(ballRef.current, {
      scale: 1.5,
      rotation: -360,
      duration: 3,
      opacity: 0,
      scrollTrigger: {
        trigger: ballRef.current,
      },
    });
    gsap.from(bingFlag1Ref.current, {
      y: 150,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: bingFlag1Ref.current,
      },
    });
    gsap.from(bingFlag2Ref.current, {
      y: 200,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: bingFlag2Ref.current,
      },
    });
    gsap.from(bingFlag3Ref.current, {
      y: 250,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: bingFlag3Ref.current,
      },
    });
  }, []);

  return (
    <>
      <div className="bingback">
        <section className="container mt-5 pt-5 vh-100">
          <div className="d-flex">
            <div className="col-md-4 d-none d-md-block">
              <img src="./images/story2.svg" alt="" ref={ballRef} />
            </div>
            <div className="col-12 col-md-8 ">
              <h2 className="bingH5">「嚴選」食材</h2>
              <p className="col-12 col-md-9 bingText-16">
                處在講究飲食健康、營養均衡的時代，堅持使用天然有機食材，為顧客提供品項眾多的選擇，這都是為了傳達健康、友善環境的理念。
              </p>
              <div className="col-12">
                <img
                  className="bingFlag1"
                  src="/images/flag1.gif"
                  alt=""
                  ref={bingFlag1Ref}
                />
                <img
                  className="bingFlag2"
                  src="/images/flag2.gif"
                  alt=""
                  ref={bingFlag2Ref}
                />
                <img
                  className="bingFlag3"
                  src="/images/flag3.gif"
                  alt=""
                  ref={bingFlag3Ref}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Story2;
