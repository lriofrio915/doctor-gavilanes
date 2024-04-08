import { Form } from "../common/Form";
import Headline from "../common/Headline";;
import { ContactProps } from "~/shared/types";
import WidgetWrapper from "../common/WidgetWrapper";
import Image from 'next/image';

export const Contact = ({ header, content, items, form, image, id, hasBackground = false }: ContactProps) => {
    return (
        <WidgetWrapper id={id ? id : 'contact'} hasBackground={hasBackground} containerClass="max-w-6xl">
            {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
            <div className="flex items-stretch justify-center">
                <div className={`grid ${!content && !items ? 'md:grid-cols-1' : 'md:grid-cols-1'}`}>
                    <div className="h-full p-2 md:pt-0 md:pb-0">
                        <div aria-hidden="true" className="md:mt-0 md:basis-1/2">
                            {image && (
                                <div className="relative m-auto max-w-4xl">
                                    <Image
                                        className="md:hidden mx-auto w-full rounded-lg shadow-lg bg-gray-400 dark:bg-slate-100"
                                        src={image.src}
                                        width={828}
                                        height={828}
                                        alt={image.alt}
                                        sizes="(max-width: 768px) 100vw, 432px"
                                        placeholder="blur"
                                        quality={50}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <Form {...form} containerClass="card h-fit max-w-2xl mx-auto p-5 md:p-12" btnPosition="center" />
                </div>
            </div>
        </WidgetWrapper>
    )
}