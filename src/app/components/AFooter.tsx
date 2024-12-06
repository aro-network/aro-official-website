import { useState } from "react";
import { list } from "../utils/common"
import { SocialButtons } from "./social-buttons";
import { toast } from "sonner";


const AFooter = () => {
  const [dealHover, setDealHover] = useState<{ index: number, isHover: boolean } | null>(null);
  const [inputEmail, setInputEmail] = useState('')
  const [errorText, setErrorText] = useState('')

  const onSubmitEmail = () => {
    if (!inputEmail) return
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!validEmail.test(inputEmail)) {
      setErrorText('must be a valid email address ')
      return
    }

    fetch('https://email.enreach.network/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputEmail
      }),
    })
      .then(response => response.json())
      .then(() => {
        toast.success('Submit subscription successfully！');
        setInputEmail('')
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }


  return <div data-aos="fade-up"
    data-aos-duration="1000"
    className=" aos-init aos-animate w-full bg-[#313131] h-auto  ">
    <div className="w-container m-auto md:w-full md:px-[30px] ">
      <div className="flex flex-col items-center justify-center">
        <div className=" mt-[95px]">
          <img src="./logo.png" width={231} height={51} />
        </div>
        <div className=" abcgintoText text-[40px] font-medium leading-normal mt-[43px] text-[#FFFFFF]">
          Get Started
        </div>
        <div className=" bg-[url(/footerBgIcon.svg)]  bg-no-repeat w-full  ">
          <div className="text-center mt-[30px] h-auto">
            <div className="abcgintoText text-xl font-normal leading-normal text-[#8A8A8A]">
              <div>
                Stay Ahead of the Game: Subscribe to Receive the Latest
              </div>
              <div>
                Updates from EnReach Network!

              </div>
            </div>
            <div className="mt-[58px] flex justify-center">
              <div>
                <input value={inputEmail} onChange={(e) => { setInputEmail(e.target.value); setErrorText('') }} placeholder="sample@email.com" className=" w-[393px] h-[67px] rounded-[33px] bg-[#242424]" />
                <div className="h-5 mt-2 text-center text-red-600">
                  {errorText}
                </div>
              </div>
              <button onClick={onSubmitEmail} className=" bg-[#4281FF] btn  text-[#FFFFFF] rounded-[33.5px] w-[198px] h-[67px] abcgintoText text-[25px] font-medium leading-normal ">Submit</button>
            </div>
          </div>
          <div className="mt-[224px] mb-5">
            <SocialButtons />
            <div className="text-xl abcgintoText font-medium leading-normal mt-[23px] text-[#FFFFFF]">
              <div>
                Get in Touch
              </div>
              contact@enreach.network
            </div>
            <div className="flex w-full justify-end gap-[81px] smd:gap-10">
              {list.map((item, index) => {
                return <div
                  key={`list_${index}`}
                  onMouseOver={() => {
                    setDealHover({ index, isHover: true });
                  }}
                  onMouseLeave={() => {
                    setDealHover({ index, isHover: false });
                  }}
                  onClick={() => window.open(item.link, '_blank')}
                  className={`${dealHover?.index === index && 'text-[#ffffff]'} `}
                >
                  <span className={`text-xl abcgintoText font-medium leading-normal  ${dealHover?.isHover && dealHover.index === index
                    ? "text-[#BEBEBE]"
                    : "text-[#8A8A8A]"
                    }`} >{item.name}</span>
                </div>
              })}
            </div>
            <div className="flex w-full justify-end text-[#737373] abcgintoText font-medium leading-normal  ">
              © EnReach Labs Foundation, {new Date().getFullYear()}. All rights reserved.
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
}

export default AFooter