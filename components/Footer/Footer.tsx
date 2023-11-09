import Link from "next/link";

import Container from "../Container";

import logo from "@/assets/imgs/logo_07_1x.png";
import f1 from "@/assets/imgs/f1.jpeg";
import f2 from "@/assets/imgs/f2.jpeg";
import f3 from "@/assets/imgs/f3.jpeg";
import f4 from "@/assets/imgs/f4.jpeg";
import f5 from "@/assets/imgs/f5.jpeg";
import f6 from "@/assets/imgs/f6.jpeg";

const FooterComponent = () => {
  return (
    <footer className="bg-[#191919] font-poppins text-[#636363]">
      <Container>
        <div className="grid gap-[35px] md:grid-cols-10 justify-between w-full md:gap-[50px] py-[120px]">
          <div className="xl:col-span-3 sm:col-span-5 col-span-10">
            <Link href="/" className="mb-[15px] block">
              <img
                src={logo.src}
                alt="NeonCart. Logo"
                className="h-auto max-w-[100%]"
              />
            </Link>
            <p className=" mb-[50px] ">
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Eodem modo typi, qui nunc videntur.
            </p>
            <form className="flex ">
              <input
                type="email"
                placeholder="Email Address"
                className="text-white border-[#252525] bg-[#252525] px-[25px] h-[60px] flex-grow"
              />
              <button className="bg-[#bd896b] h-[60px] w-[60px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </button>
            </form>
          </div>

          <div className="xl:col-span-2 sm:col-span-5 col-span-10">
            <h3 className="mb-[30px] text-white text-[27px] ">Useful Links</h3>
            <ul>
              <li>
                <Link className="link transition" href="#">
                  Downloadable product
                </Link>
              </li>
              <li>
                <Link className="link transition" href="#">
                  On sale product
                </Link>
              </li>
              <li>
                <Link className="link transition" href="#">
                  Order new product
                </Link>
              </li>
              <li>
                <Link className="link transition" href="#">
                  Order tracking
                </Link>
              </li>
              <li>
                <Link className="link transition" href="#">
                  Payment methods
                </Link>
              </li>
            </ul>
          </div>

          <div className="xl:col-span-2 sm:col-span-5 col-span-10">
            <h3 className="mb-[30px] text-white text-[27px] ">
              Instagram Shop
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Link href="3">
                <img
                  src={f1.src}
                  alt="photo from instgram"
                  className="rounded"
                />
              </Link>
              <Link href="3">
                <img
                  src={f2.src}
                  alt="photo from instgram"
                  className="rounded"
                />
              </Link>
              <Link href="3">
                <img
                  src={f3.src}
                  alt="photo from instgram"
                  className="rounded"
                />
              </Link>
              <Link href="3">
                <img
                  src={f4.src}
                  alt="photo from instgram"
                  className="rounded"
                />
              </Link>
              <Link href="3">
                <img
                  src={f5.src}
                  alt="photo from instgram"
                  className="rounded"
                />
              </Link>
              <Link href="3">
                <img
                  src={f6.src}
                  alt="photo from instgram"
                  className="rounded"
                />
              </Link>
            </div>
          </div>

          <div className="xl:col-span-3 sm:col-span-5 col-span-10 ">
            <h3 className="mb-[30px] text-white text-[27px] ">Contact Us</h3>
            <ul>
              <li className="text-[18px] ">
                <span>Address:</span>{" "}
                <span className="text-white">
                  795 South Park Avenue, Melbourne, Australia
                </span>
              </li>
              <li className="text-[18px] ">
                <span>Address: 8 800 567.890.11</span>
              </li>
              <li className="text-[18px]">
                <span>Email:</span>{" "}
                <Link
                  href="mailto:Ibrahimm.mourad97@gmail.com"
                  className="text-white"
                >
                  Ibrahimm.mourad97@gmail.com{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="bg-[#1a1a1a] border-[1px] border-solid border-[#252525]">
        <Container>
          <div className="text-center text-[#999999] py-[30px]">
            @2023 Designed By
            <Link
              className="ml-1 inline-block text-white hover:text-[#bd896b] transition"
              href="https://www.linkedin.com/in/ibrahimmourad97/"
              title="Ibrahim Mohamed"
              target="_blank"
            >
              Ibrahim Mohamed
            </Link>
            .
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default FooterComponent;
