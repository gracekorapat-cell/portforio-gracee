import { BgGradient } from "./components/BgGradient";
import { NewsletterSignUp } from "./components/NewsletterSignUp";
import { fetchAndSortBlogPosts } from "./lib/utils";
import { AnimatedProfilePicture } from "./components/AnimatedProfilePicture";
import { AnimatedText } from "./components/AnimatedText";
import { PhotoGallery } from "./components/PhotoGallery";
import { AboutMeBento } from "./components/AboutMeBento";
import { AnimatedMobilePhotos } from "./components/AnimatedMobilePhotos";
import { GridWrapper } from "./components/GridWrapper";
import clsx from "clsx";

export default async function Home() {
  const PROFILE_DELAY = 0;
  const HEADING_DELAY = PROFILE_DELAY + 0.2;
  const PARAGRAPH_DELAY = HEADING_DELAY + 0.1;
  const PHOTOS_DELAY = PARAGRAPH_DELAY + 0.1;

  return (
    <section>
      <AnimatedProfilePicture delay={PROFILE_DELAY} />
      <div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
        <section>
          <div className="relative text-balance">
            <GridWrapper>
              <AnimatedText
                as="h1"
                delay={HEADING_DELAY}
                className="mx-auto max-w-3xl text-center text-5xl font-bold leading-tight tracking-tighter text-text-primary md:text-7xl md:leading-[80px]"
              >
                Portfolio แนะนำตัว
              </AnimatedText>
            </GridWrapper>
            <GridWrapper>
              <div className="mt-4 text-center md:mt-8">
                <AnimatedText
                  as="p"
                  delay={PARAGRAPH_DELAY}
                  className="mx-auto max-w-2xl text-2xl font-medium leading-8 text-text-secondary md:text-3xl"
                >
                  นางสาวกรภัทธ ศรีเงินถม (เกรซ)
                </AnimatedText>
              </div>
            </GridWrapper>
          </div>
          <div>
            {/* Desktop Photos */}
            <div className="relative hidden h-fit w-full items-center justify-center lg:flex">
              <PhotoGallery animationDelay={PHOTOS_DELAY} />
            </div>

            {/* Mobile Photos */}
            <AnimatedMobilePhotos delay={PHOTOS_DELAY} />
          </div>
        </section>

        {/* About Section */}
        <section className="relative space-y-10 md:space-y-16">
          {/* <AboutPattern /> */}
          <div className="space-y-4">
            <GridWrapper>
              <h2 className="text-center text-3xl font-bold text-indigo-600 md:text-4xl">
                ประวัติส่วนตัว
              </h2>
            </GridWrapper>
            <GridWrapper>
              <p className="mx-auto max-w-2xl text-center text-xl leading-10 text-text-primary">
                นางสาวกรภัทธ ศรีเงินถม ชื่อเล่นเกรซ อายุ 22 ปี เกิดเมื่อวันที่ 26 ธันวาคม พ.ศ. 2546
              </p>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="mx-auto max-w-2xl">
              <AboutMeBento linkTo="/about" />
            </div>
          </GridWrapper>
        </section>

        {/* Blog Section */}
        <section className="relative space-y-10 md:space-y-16">
          {/* <BlogPattern /> */}
          <div className="relative space-y-4 text-balance">
            <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
              <BgGradient />
            </span>
            <GridWrapper>
              <h2 className="text-center text-3xl font-bold text-indigo-600 md:text-4xl">
                ประวัติการศึกษา
              </h2>
            </GridWrapper>
            <GridWrapper>
              <div className="mx-auto max-w-2xl text-center text-xl leading-relaxed text-text-primary">
                <p>พ.ศ. 2558 สำเร็จการศึกษาระดับประถมศึกษา จากโรงเรียนสะบ้าย้อย</p>
                <p>พ.ศ. 2564 สำเร็จการศึกษาระดับมัธยมศึกษา จากโรงเรียนสะบ้าย้อยวิทยา</p>
              </div>
            </GridWrapper>
          </div>
        </section>



        {/* Contact Section */}
        <section>
          <NewsletterSignUp 
            title="ข้อมูลการติดต่อ" 
          />
        </section>
      </div>
    </section>
  );
}
