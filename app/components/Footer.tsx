import Link from "next/link";
import { SocialPill } from "./SocialPill";
import { GridWrapper } from "./GridWrapper";

interface FooterLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "ทั่วไป",
    links: [
      { href: "/", label: "หน้าแรก" },
      { href: "/about", label: "แนะนำตัว" },
      { href: "/projects", label: "โปรเจกต์" },
      { href: "/blog", label: "บล็อก" },
    ],
  },
  {
    title: "ข้อมูลเฉพาะ",
    links: [
      
      { href: "/speaking", label: "การพูด" },
      {
        href: "https://braydoncoyer.lemonsqueezy.com/",
        label: "ผลิตภัณฑ์",
        isExternal: true,
      },
      { href: "/community-wall", label: "กำแพงชุมชน" },
    ],
  },
  {
    title: "อื่น ๆ",
    links: [
      { href: "/changelog", label: "บันทึกการเปลี่ยนแปลง" },
      
      { href: "/links", label: "ลิงก์" },
      { href: "/stats", label: "สถิติ" },
    ],
  },
];

export function Footer(): JSX.Element {
  const renderFooterLink = (link: FooterLink): JSX.Element => {
    if (link.isExternal) {
      return (
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      );
    }
    return <Link href={link.href}>{link.label}</Link>;
  };

  return (
    <>
      <div className="relative max-w-7xl border-border-primary/50">
        <GridWrapper>
          <div className="max-w-6xl divide-y px-4 lg:mx-auto lg:flex lg:divide-x lg:px-4 xl:px-0">
            <div className="flex w-full py-6 text-sm">
              <div>
                <div className="flex-grow space-y-6">
                  <Link className="inline-block" href="/">
                    <img
                      className="h-10 w-10"
                      src="/bcoyerlogo_dark.svg"
                      alt="Braydon's Logo"
                    />
                  </Link>
                  <p className="w-60 leading-5 text-gray-500">
                    เริ่ด
                  </p>
                </div>
                <p className="mt-6 text-gray-500">
                  callmegraceeiei
                </p>
              </div>
              <div className="flex w-full items-end justify-end pr-16">
                <SocialPill />
              </div>
            </div>

          </div>
        </GridWrapper>
      </div>
      <div className="relative h-8 w-full [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px]"></div>
    </>
  );
}
