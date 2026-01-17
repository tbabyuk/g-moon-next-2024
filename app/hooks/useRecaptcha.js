"use client"

import { useEffect, useState, useCallback } from "react"

const RECAPTCHA_SCRIPT_ID = "recaptcha-script"
const RECAPTCHA_SCRIPT_URL = "https://www.google.com/recaptcha/api.js"

export const useRecaptcha = () => {
    const [isReady, setIsReady] = useState(false)
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

    useEffect(() => {
        // Check if script is already loaded
        if (window.grecaptcha) {
            window.grecaptcha.ready(() => setIsReady(true))
            return
        }

        // Check if script tag already exists
        if (document.getElementById(RECAPTCHA_SCRIPT_ID)) {
            return
        }

        // Load the script
        const script = document.createElement("script")
        script.id = RECAPTCHA_SCRIPT_ID
        script.src = `${RECAPTCHA_SCRIPT_URL}?render=${siteKey}`
        script.async = true
        script.defer = true

        script.onload = () => {
            window.grecaptcha.ready(() => setIsReady(true))
        }

        document.head.appendChild(script)
    }, [siteKey])

    const executeRecaptcha = useCallback(
        async (action) => {
            if (!isReady || !window.grecaptcha) {
                throw new Error("reCAPTCHA not loaded")
            }
            return await window.grecaptcha.execute(siteKey, { action })
        },
        [isReady, siteKey]
    )

    return { executeRecaptcha, isReady }
}
