import Image from "next/image";

export default function Home() {
  const titles = ["Software Developer", "UI/UX Designer", "Digital Marketer"];

  return (
    <div className="flex flex-row items-center justify-center w-full h-full gap-[200px]">
      <Image src="/main.svg" alt="My Main Image" width={600} height={650} />
      <div className="flex flex-col">
        <p className="text-[72px] font-medium">Hey,</p>
        <p className="text-[96px] leading-[60px] font-light">
          I am{" "}
          <span className="font-bold bg-custom-gradient-text">Avilash</span>!
        </p>
        <div className="flex flex-row items-center self-center gap-[20px] mt-[50px]">
          {titles.map((title, index) => (
            <>
              <p
                className="text-[20px] font-semibold w-[70px] text-center"
                key={title}
              >
                {title}
              </p>
              {index !== titles.length - 1 && (
                <Image src="/dot.svg" alt="Dot" width={10} height={10} />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

// position: absolute;
// width: 381px;
// height: 154px;
// left: 838px;
// top: 287px;

// font-family: 'Darker Grotesque';
// font-style: normal;
// font-weight: 500;
// font-size: 64px;
// line-height: 80px;

// color: #FFFFFF;
