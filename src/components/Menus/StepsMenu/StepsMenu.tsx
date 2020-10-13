import classNames from 'classnames'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './StepsMenu.scss'
type PropsType = {
    steps: Array<StepType>
    currentStep: number
}
type StepType = {
    title: string
}



export const StepsMenu = ({ steps, currentStep, ...props }: PropsType) => {
    return (
        <div className="steps__elements">
            {steps.map((step, counter) => (
                <div className={classNames(`steps__element`, {
                    "past": counter < currentStep,
                    "active": counter === currentStep,
                    "next": counter > currentStep
                })}>
                    {step.title}
                </div>
            ))}

        </div>
    )
}