"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Textbox } from "@/components/ui/textbox";

export function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [errors, setErrors] = useState<{ email?: string }>({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validate = () => {
    let valid = true;
    const newErrors: { email?: string } = {};

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Validate email and update state accordingly
    setIsValidEmail(validateEmail(value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    if (validate()) {
      // Replace this with your actual submission logic
      console.log("Email submitted:", email);
      setIsModalOpen(false); // Close the modal after submission
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize(); // Set the initial value

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen opacity-90 bg-baseblack-900 text-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-[50px] 2xl:px-[80px] 3xl:px-40 bg-[url('/uploads/bg-cover.png')] bg-cover bg-center">
      <div className="mx-auto">
        <h1 className="text-xl md:text-2xl font-bold lg:items-start lg:justify-start items-center justify-center flex ">
          thank you.
        </h1>
        <main className="flex flex-col-reverse lg:flex-row items-center justify-between ">
          <div className="mb-8 lg:mb-0 lg:w-[60%] xl:w-[908px]">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[86px] font-bold mb-4 leading-tight lg:leading-[116px] text-center lg:text-left">
              Stream Indie Films Anytime, Anywhere
            </h2>
            <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-[22px] leading-normal lg:leading-[38px] text-center lg:text-left">
              Watch for free, get personal picks, and connect with other film lovers. Download Thank You Media
              now!
              <Button
                variant="link"
                onClick={() => setIsModalOpen(true)}
                className="text-[#D59D5E] p-0 font-bold text-base sm:text-lg md:text-xl lg:text-[22px] pl-1"
              >
                Learn more
              </Button>
            </p>
            <div className="flex lg:flex-col flex-col-reverse">
              <div className="flex mt-6 space-x-4 items-center justify-center lg:items-start lg:justify-start">
                <Image
                  src="/uploads/appstore.png"
                  alt="App Store"
                  width={190}
                  height={49}
                  className="w-36 md:w-48 lg:w-[190px]"
                />
                <Image
                  src="/uploads/playstore.png"
                  alt="Google Play"
                  width={190}
                  height={49}
                  className="w-36 md:w-48 lg:w-[190px]"
                />
              </div>
              <div className="flex flex-row items-center lg:items-center justify-center lg:justify-start pt-4 lg:gap-10 gap-10">
                <div className="w-[98px] lg:w-[160px]">
                  <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#D59D5E]">100+</h3>
                  <p className="text-base sm:text-lg lg:text-[20px]">Directors are already in the app</p>
                </div>
                <div className="flex -ml-4 mt-2 sm:mt-0">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={`/uploads/avatar${i + 1}.png`}
                      alt={`Avatar ${i + 1}`}
                      width={83}
                      height={83}
                      className="w-[48px] h-[48px] sm:w-[48px] sm:h-[48px] lg:w-[73px] lg:h-[73px] rounded-full object-cover -ml-4 first:ml-0"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <img
              src={isSmallScreen ? "/uploads/mobilehalf.png" : "/uploads/mobile1.png"}
              alt="App Screenshot"
              className="max-w-full h-auto"
            />
          </div>
        </main>

        {/* Custom Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
            <div className="flex flex-col sm:flex-row w-full max-w-[688px] h-[513px] rounded-lg shadow-lg relative">
              {/* Left Side - Gold Background */}
              <div className="bg-[#D59D5E] text-black items-start justify-center flex flex-col w-full sm:w-1/2 p-6 sm:p-8 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-2 right-2 text-xl font-bold text-black"
                >
                  &times;
                </button>
                <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold mb-4 text-white ">
                  Stay In The Loop!
                </h2>
                <p className="mb-6 text-base sm:text-lg lg:text-[24px] text-white">
                  We&apos;re always adding new indie films to our app. Join our mailing list to stay updated
                  on the latest releases, events, and more!
                </p>
              </div>

              {/* Right Side - White Background */}
              <div className="bg-white w-full  sm:w-1/2 p-6 sm:p-8 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none items-start justify-center flex flex-col">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">Join Now!</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Textbox
                      type="text"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      className={`w-full sm:w-[256px] py-2 border rounded-lg text-black ${
                        isValidEmail ? (email ? "border-green-500" : "border-gray-300") : "border-red-500"
                      }`}
                      required
                    />
                    {/* Show error message as a label below the input field */}
                    {errors.email && submitted && (
                      <label className="text-red-500 text-sm mt-1">{errors.email}</label>
                    )}
                  </div>
                  <Button type="submit" className="w-full bg-[#D59D5E] text-white py-2 rounded-lg">
                    Notify Me!
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
