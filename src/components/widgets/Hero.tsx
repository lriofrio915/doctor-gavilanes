import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, image }: HeroProps) => {
    return (
        <section id="heroOne">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex py-12 md:py-20">
                    <div className="mx-auto max-w-4xl pb-10 text-left md:pb-16">
                        <div className="w-[286px] h-[56px] flex flex-col items-start justify-start py-[5px] box-border relative">
                            <div className="w-14 h-[29px] absolute bottom-[20px] bg-blue-500" />
                            <b className="px-[9px] text-lg text-gray-900 dark:text-white absolute leading-[32px]">Dr. Patricio Gavilanes</b>
                        </div>
                        {tagline && (
                            <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
                                {tagline}
                            </p>
                        )}
                        {title && (
                            <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
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
                        <div className="hidden md:block relative m-auto max-w-5xl">
                            <Image
                                className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
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