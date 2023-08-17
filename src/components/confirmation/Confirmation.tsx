import { useState, useEffect } from 'react'
import Check from '../../assets/icon-success.svg'

export default function Confirmation({
    email,
    visible
}: {
    email: string
    visible: boolean
}) {
    const [opacity, setOpacity] = useState('0')
    const [display, setDisplay] = useState('none')

    useEffect(() => {
        if (visible) {
            setDisplay('')

            setTimeout(() => {
                setOpacity('1')
            }, 50)
        }
    }, [visible])

    return (
        <section
            style={{
                opacity,
                display
            }}
        >

            <div>

                <img
                    src={Check}
                    alt=""
                />

                <h1>
                    Thanks for subscribing!
                </h1>

                <p>
                    A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.
                </p>

            </div>

            
            <button
                onClick={() => setOpacity('0')}
            >
                Dismiss message
            </button>


        </section>
    )
}