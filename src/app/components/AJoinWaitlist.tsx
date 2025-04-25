import { useState } from "react";
import { BsDiscord, BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { baseUrl } from "../utils/common";
import { toast } from "sonner";
import { getAddress } from 'ethers';

const AJoinWaitlist = () => {
  const [inputInfo, setInputInfo] = useState<{ address: string, email: string }>({ address: '', email: '' })
  const [errorText, setErrorText] = useState('')
  const [isSubmiting, setIsSubmiting] = useState(false)

  console.log('inadasdsad', inputInfo);


  const onSubmit = () => {
    if (!inputInfo.address && !inputInfo.email || isSubmiting) return
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!validEmail.test(inputInfo?.email)) {
      setErrorText('must be a valid email address ')
      return
    }
    setIsSubmiting(true)


    try {
      getAddress(inputInfo.address);
    } catch (error) {
      console.error('e', error);

      setErrorText('The address is not valid')
    }
    fetch(baseUrl + '/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputInfo),
    })
      .then(response => response.json())
      .then(() => {
        toast.success('Submit subscription successfully！');
        setInputInfo({ address: '', email: '' })

      })
      .catch(() => {
        toast.error('Submit subscription failed, please try again later!');
      }).finally(() => {
        setIsSubmiting(false)
      })
  }

  // { href: , icon: <FaXTwitter className='text-[#000000B2]' /> },
  //   { href: 'https://discord.gg/Rc4BMUjbNB', icon: <FaDiscord className='text-[#000000B2]' /> },
  //   { href: 'https://t.me/EnReachNetwork', icon: <FaTelegramPlane className='text-[#000000B2]' /> },
  return <div data-aos="fade-up"
    data-aos-duration="1000" id="target-section" className="w-container m-auto flex px-[170px] mo:px-5 mo:pt-[3.125rem] md:px-[30px] md:w-full  mo:w-full flex-col ">
    <div className="w-full text-center py-[3.75rem] mo:pt-[3.125rem] mo:pb-11 font-Ubuntu font-medium text-[3.125rem] mo:text-[1.75rem]  leading-[100%] text-black">How to join the Waitlist</div>

    <div className=" font-Ubuntu  font-medium text-2xl mo:text-lg w-full text-center text-black">Step 1: Join the EnReach Community</div>

    <div className="flex justify-between w-full gap-[6.25rem] mo:gap-5 mt-[1.875rem] mo:mt-6 mo:flex-wrap">
      <div onClick={() => window.open('https://x.com/EnReachNetwork', '_blank')} className=" hover:bg-[#EBEBEB] cursor-pointer rounded-[1.25rem] w-full border-[#7F7F7F] border flex items-center justify-center gap-5 p-[1.875rem]">
        <BsTwitterX className="text-2xl text-black " />
        <span className="font-medium text-2xl leading-7 text-black">Follow on X</span>
      </div>
      <div onClick={() => window.open('https://discord.gg/Rc4BMUjbNB', '_blank')} className=" hover:bg-[#EBEBEB] cursor-pointer rounded-[1.25rem] w-full border-[#7F7F7F] border flex items-center justify-center gap-5 p-[1.875rem]">
        <BsDiscord className="text-black font-medium text-2xl leading-7 " />
        <span className="font-medium text-2xl leading-7 text-black">
          Join Discord
        </span>
      </div>
      <div onClick={() => window.open('https://t.me/EnReachNetwork', '_blank')} className=" hover:bg-[#EBEBEB] cursor-pointer  rounded-[1.25rem] w-full border-[#7F7F7F] border flex items-center justify-center gap-5 p-[1.875rem]">
        <FaTelegramPlane className="text-black text-[35px] " />
        <span className="font-medium text-2xl leading-7 text-black">
          Join Telegram
        </span>

      </div>
    </div>
    <div className="mt-[3.75rem] w-full flex  flex-col items-center">
      <div className="text-black  text-2xl mo:text-lg font-medium mo:text-center  font-Ubuntu">Step 2: Submit your details to unlock early access & rewards</div>
      <div className="enreachInput flex flex-col w-full items-center">
        <input className="borde-[#7F7F7F] border w-[542px] mo:w-full h-[4.25rem] mt-[30px] rounded-2xl" value={inputInfo.address} placeholder="Leave your EVM address" onChange={(e) => { setInputInfo({ ...inputInfo, address: e.target.value }); setErrorText('') }} />
        <input className="borde-[#7F7F7F] border w-[542px] mo:w-full mt-5 h-[4.25rem] rounded-2xl" value={inputInfo.email} placeholder="Leave your email" onChange={(e) => { setInputInfo({ ...inputInfo, email: e.target.value }); setErrorText('') }} />
        {errorText && <div className="h-5 mt-2 mo:text-xs text-center text-red-600">
          {errorText}
        </div>
        }

      </div>
      <div className="w-[542px] mo:w-full mt-5 flex justify-between items-baseline">
        <div>
          <input type='checkbox' className=" " />
        </div>
        <span className="w-[542px] mo:w-full ml-2 text-[#1C73FF] font-semibold text-base mo:text-sm">Yes, I want to join the Pioneers Program. Run a node, give feedback, and be early 👀</span>
      </div>
      <button onClick={onSubmit} className="bg-[#1C73FF] text-white py-[.625rem] text-base px-10 rounded-[1.25rem] mt-[30px]">
        Submit
      </button>
    </div>

  </div>

}

export default AJoinWaitlist