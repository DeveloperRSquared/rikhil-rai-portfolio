import AnimatedDiv from '@/components/common/AnimatedDiv';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Mail, MapPin, SendHorizontal } from 'lucide-react';

const Contact = () => {
  return (
    <section className="h-screen mt-40">
      <header className="text-center">
        <AnimatedDiv
          className="text-5xl font-semibold max-md:text-4xl"
          _delay={0.5}
        >
          Contact
        </AnimatedDiv>
        <AnimatedDiv
          className="border-none w-[80px] h-[1px] bg-black dark:bg-white mt-5 mx-auto"
          _delay={0.8}
        ></AnimatedDiv>
      </header>

      {/* Main content of contact */}
      <section className="md:flex mt-24 gap-12 mx-24 max-md:mt-16 max-lg:mx-3 max-sm:mt-12">
        <div className="flex-1">
          <AnimatedDiv
            className="text-5xl font-semibold leading-[1.2em] max-lg:text-3xl"
            _delay={1}
          >
            Let’s talk <br />
            on something great <br />
            together
          </AnimatedDiv>
          <div className="space-y-3 mt-12 max-md:mt-8">
            <AnimatedDiv
              className="flex text-2xl gap-4 max-lg:text-xl"
              _delay={1.2}
            >
              <Mail /> <span>rikhil.rai@gmail.com</span>
            </AnimatedDiv>
            <AnimatedDiv
              className="flex text-2xl gap-4 max-lg:text-xl"
              _delay={1.4}
            >
              <MapPin /> <span>London, UK </span>{" "}
              <span className="text-3xl">🇬🇧</span>
            </AnimatedDiv>
          </div>
        </div>
        {/* Form */}
        <form action="" className="flex-1 space-y-5 max-md:mt-4">
          <AnimatedDiv _delay={1.6}>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="block bg-[#f7f7f7] py-3 px-5 rounded-full w-[100%] placeholder:text-zinc-500"
            />
          </AnimatedDiv>
          <AnimatedDiv _delay={1.8}>
            <input
              type="text"
              placeholder="Your email"
              name="email"
              className="block bg-[#f7f7f7] py-3 px-5 rounded-full w-[100%] placeholder:text-zinc-500"
            />
          </AnimatedDiv>
          <AnimatedDiv _delay={2}>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message here"
              rows={5}
              className="block bg-[#f7f7f7] py-3 px-5 rounded-3xl w-[100%] placeholder:text-zinc-500"
            ></textarea>
          </AnimatedDiv>
          <AnimatedDiv _delay={2.2}>
            <ShimmerButton className="flex dark:text-white max-sm:text-sm">
              Send Message
              <SendHorizontal size={18} className="ml-2" />
            </ShimmerButton>
          </AnimatedDiv>
        </form>
      </section>
    </section>
  );
};

export default Contact;
