"use client"

import React from 'react'
import { FormProps } from '~/shared/types'
import { useFormStatus } from 'react-dom'

export const SendButton = ({
    btn,
    btnPosition,
}: FormProps) => {
    const { pending } = useFormStatus();
    return (
        <div
            className={`${btnPosition === 'left' ? 'text-left' : btnPosition === 'right' ? 'text-right' : 'text-center'}`}
        >
            <button
                type={btn.type || 'button'}
                className="btn btn-primary sm:mb-0 disabled:scaled-100 disabled:bg-opacity-65"
                disabled={pending}
            >{
                    pending ? (<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                    ) : (
                        <>
                            {btn.title}
                        </>
                    )
                }

            </button>
        </div>
    )
}