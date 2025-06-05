import { useState } from "react";
import { BsDiscord, BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { baseUrl } from "../utils/common";
import { toast } from "sonner";
import { getAddress } from "ethers";

const AJoinWaitlist = () => {
  const [inputInfo, setInputInfo] = useState<{
    address: string;
    email: string;
  }>({ address: "", email: "" });
  const [errorText, setErrorText] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const onSubmit = () => {
    if (isSubmiting) return;
    setIsSubmiting(true);
    try {
      getAddress(inputInfo.address);
    } catch (error) {
      console.error("errorerrorerror", error);
      setErrorText("Invalid EVM address");
      return;
    } finally {
      setIsSubmiting(false);
    }
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(inputInfo?.email)) {
      setErrorText("Invalid email address");
      setIsSubmiting(false);
      return;
    }

    fetch(baseUrl + "/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputInfo),
    })
      .then((response) => response.json())
      .then(() => {
        if (isCheck) {
          const url = "https://enreach.fillout.com/Pioneers"
          const newWindow = window.open("", "_blank");
          if (newWindow) {
            newWindow.location.href = url;
          } else {
            window.location.href = url;
          }
        }
        setIsCheck(false);
        toast.success(
          "Submission received! Our team will be in touch soon. Meanwhile, keep an eye on our socials."
        );
        setInputInfo({ address: "", email: "" });
      })
      .catch(() => {
        toast.error("Submit failed, please try again later!");
      })
      .finally(() => {
        setIsSubmiting(false);
      });
  };

  return (
    <div
      id="target-section"
      className="w-container m-auto flex px-[170px] mo:px-5 mo:pt-16 pt-10  md:px-[60px] md:w-full  mo:w-full flex-col "
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="  aos-init aos-animate w-full text-center py-20 mo:pt-0  mo:pb-16 font-Ubuntu font-medium text-[3.125rem] mo:text-[1.75rem]  leading-[100%] text-black"
      >
        Apply to become a Pioneer
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" font-Ubuntu  font-medium text-2xl mo:text-lg w-full text-center text-black"
      >
        Step 1: Join the ARO Community
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex justify-between w-full gap-[6.25rem] mo:gap-5 mt-20 mo:mt-6 mo:flex-wrap"
      >
        <div
          onClick={() => window.open("https://x.com/AroNetwork", "_blank")}
          className=" hover:bg-[#EBEBEB] bg-white cursor-pointer rounded-[1.25rem] w-full border-[#7F7F7F] border mo:h-[4.25rem] h-[6.25rem] flex items-center justify-center gap-5 md:gap-[.625rem] p-[1.875rem]"
        >
          <BsTwitterX className="text-2xl text-black " />
          <span className="font-medium text-xl leading-7 text-black">
            Follow on X
          </span>
        </div>
        <div
          onClick={() => window.open("https://discord.gg/Rc4BMUjbNB", "_blank")}
          className=" hover:bg-[#EBEBEB] bg-white cursor-pointer rounded-[1.25rem] w-full border-[#7F7F7F] border mo:h-[4.25rem]  h-[6.25rem]  flex items-center justify-center gap-5 md:gap-[.625rem]  p-[1.875rem]"
        >
          <BsDiscord className="text-black font-medium text-2xl leading-7 " />
          <span className="font-medium text-xl leading-7 text-black">
            Join Discord
          </span>
        </div>
        <div
          onClick={() => window.open("https://t.me/ARO_Network", "_blank")}
          className=" hover:bg-[#EBEBEB] bg-white cursor-pointer  rounded-[1.25rem] w-full border-[#7F7F7F] border mo:h-[4.25rem]  h-[6.25rem]  flex items-center justify-center gap-5 md:gap-[.625rem]  p-[1.875rem]"
        >
          <FaTelegramPlane className="text-black text-[35px] " />
          <span className="font-medium text-xl leading-7 text-black">
            Join Telegram
          </span>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" aos-init aos-animate mt-20 w-full flex  flex-col items-center"
      >
        <div className="text-black  text-2xl mo:text-lg font-medium mo:text-center  font-Ubuntu">
          Step 2: Submit your details and fill out the application form{" "}
        </div>
        <div className="enreachInput flex flex-col w-full items-center mt-20 mo:mt-6">
          <input

            maxLength={50}
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" aos-init aos-animate border-[#7F7F7F] border w-[542px] mo:w-full h-[4.25rem] rounded-2xl"
            value={inputInfo.address}
            placeholder="Leave your EVM address"
            onChange={(e) => {
              setInputInfo({ ...inputInfo, address: e.target.value });
              setErrorText("");
            }}
          />
          <input
            maxLength={50}
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" aos-init aos-animate border-[#7F7F7F] border w-[542px] mo:w-full mt-10 mo:mt-5 h-[4.25rem] rounded-2xl"
            value={inputInfo.email}
            placeholder="Leave your email"
            onChange={(e) => {
              setInputInfo({ ...inputInfo, email: e.target.value });
              setErrorText("");
            }}
          />
          <div className="w-[542px] mo:w-full">
            {errorText && (
              <div className="h-5 mt-2 mo:text-xs text-left text-red-600">
                {errorText}
              </div>
            )}
          </div>
        </div>
        <div data-aos="fade-up"
          data-aos-duration="1000"
          className=" aos-init aos-animate w-[542px] mo:w-full my-10 flex justify-between items-baseline">
          <div>
            <input
              checked={isCheck}
              onChange={(e) => setIsCheck(e.target.checked)}
              type="checkbox"
              className="  accent-[#1C73FF]"
            />
          </div>
          <span className="w-[542px] mo:w-full ml-2 text-[#1C73FF] font-semibold text-base mo:text-sm">
            Yes, I want to join the {""}
            <button
              onClick={() =>
                window.open("https://docs.aro.network/campaigns/pioneer")
              }
              className=" underline underline-offset-1"
            >
              Pioneers Program
            </button>
            . Run a node, give feedback, and be early 👀
          </span>
        </div>
        <button
          onClick={onSubmit}
          data-aos="fade-up"
          data-aos-duration="1000"
          className="aos-init aos-animate bg-[#1C73FF]   btn text-white py-[.625rem] text-base px-10 rounded-[1.25rem] h-10"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AJoinWaitlist;
