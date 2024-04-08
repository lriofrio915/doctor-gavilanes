'use client'

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { sendEmail } from "~/actions/sendEmail";
import { FormProps } from "~/shared/types";
import toast from "react-hot-toast";
import { SendButton } from "./SendButton";

export const Form = ({
    title,
    description,
    inputs,
    textarea,
    btn,
    btnPosition,
    containerClass,
}: FormProps) => {
    const [inputValues, setInputValues] = useState([]);
    const [textareaValues, setTextareaValues] = useState('');

    // Update the value of the entry fields
    const changeInputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };

    // Update the textarea value
    const changeTextareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValues(event.target.value);
    };

    return (

        <form
            id="contactForm"
            className={twMerge('', containerClass)}
            action={async (formData) => {
                const { data, error } = await sendEmail(formData);

                if (error) {
                    toast.error(error);
                    return;
                }

                toast.success("Mensaje enviado exitosamente")
                setTimeout(() => {
                    window.location.reload();
                }, 3000); // 3000 milisegundos = 2 segundos
            }}
        >

            {title && <h2 className={`${description ? 'mb-2' : 'mb-4'} text-2xl font-bold`}>{title}</h2>}
            {description && <p className="mb-4">{description}</p>}
            <div className="lg:mb-1 mb-6">
                {/* Inputs */}
                <div className="mx-0 mb-1 sm:mb-4">
                    {inputs &&
                        inputs.map(({ type, label, name, autocomplete, placeholder }, index) => (
                            <div key={`item-input-${index}`} className="mx-0 mb-1 sm:mb-4">
                                <label htmlFor={name} className="pb-1 text-xs uppercase tracking-wider">
                                    {label}
                                </label>
                                <input
                                    type={type}
                                    id={name}
                                    name={name}
                                    autoComplete={autocomplete}
                                    value={inputValues[index]}
                                    onChange={changeInputValueHandler}
                                    placeholder={placeholder}
                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                />
                            </div>
                        ))}
                </div>
                {/* Textarea */}
                {textarea && (
                    <div className={`mx-0 mb-1 sm:mb-4`}>
                        <label htmlFor={textarea.name} className="pb-1 text-xs uppercase tracking-wider">
                            {textarea.label}
                        </label>
                        <textarea
                            id={textarea.name}
                            name={textarea.name}
                            cols={textarea.cols}
                            rows={textarea.rows}
                            value={textareaValues}
                            onChange={(e) => changeTextareaHandler(e)}
                            placeholder={textarea.placeholder}
                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        />
                    </div>
                )}
            </div>
            <SendButton inputs={[]} btn={{
                title: btn.title,
                type: btn.type
            }} />
        </form>
    )
}