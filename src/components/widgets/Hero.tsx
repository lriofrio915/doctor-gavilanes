import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, image }: HeroProps) => {
    return (
        <section id="heroOne">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex flex-col-reverse md:flex-row py-12 md:py-10">
                    <div className="mx-auto max-w-[calc(100% - 400px)] pb-10 text-left">
                        <div className="w-[286px] h-[56px] flex flex-col items-start justify-start py-[5px] box-border relative">
                            <b className="px-[9px] text-2xl text-gray-900 dark:text-white absolute leading-[32px]">Dr. Patricio Gavilanes</b>
                        </div>
                        {tagline && (
                            <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
                                {tagline}
                            </p>
                        )}
                        {title && (
                            <h1 className="leading-tighter font-heading mb-6 text-6xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                                {title}
                            </h1>
                        )}
                        <div className="mx-auto">
                            {subtitle && <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
                            <div className="flex max-w-none flex-col flex-nowrap gap-4 sm:flex-row justify-left">
                                {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
                            </div>
                        </div>
                    </div>
                    {image && (
                        <div className="relative m-auto max-w-5xl mb-2 md:mt-[-10px] ">
                            <Image
                                className="mx-auto h-auto w-full rounded-md"
                                src={image.src}
                                alt={image.alt}
                                width={1024}
                                height={607}
                                sizes="(max-width: 64rem) 100vw, 1024px"
                                loading="eager"
                                placeholder="blur"
                                priority
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;