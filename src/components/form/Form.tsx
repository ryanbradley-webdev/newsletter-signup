import { Dispatch, SetStateAction, useState } from 'react'
import MobileSignup from '/illustration-sign-up-mobile.svg'
import LgSignup from '/illustration-sign-up-desktop.svg'
import styles from './form.module.css'

export default function Form({
    email,
    setEmail,
    hideForm
}: {
    email: string
    setEmail: Dispatch<SetStateAction<string>>
    hideForm: () => void
}) {
    const [opacity, setOpacity] = useState('1')
    const [display, setDisplay] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        setOpacity('0')

        setTimeout(() => {
            setDisplay('none')
        }, 350)

        setTimeout(() => {
            hideForm()
        }, 400)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}
            style={{
                opacity,
                display
            }}
        >
            
            <img
                src={MobileSignup}
                alt=''
                className={styles.mobile_img}
            />

            <fieldset>

                <h1>
                    Stay Updated!
                </h1>

                <p>
                    Join 60,000&#43; product managers receiving monthly updates on:
                </p>

                <ul>

                    <li>
                        Product discovery and building what matters
                    </li>

                    <li>
                        Measuring to ensure updates are a success
                    </li>

                    <li>
                        And much more!
                    </li>

                </ul>

                <label
                    htmlFor="email"
                    className={styles.input}
                >

                    <span>
                        Email address
                    </span>

                    <input 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email@company.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                </label>

                <button
                    className={styles.button}
                >

                    Subscribe to monthly newsletter
                    
                </button>

            </fieldset>

            <img
                src={LgSignup}
                alt=''
                className={styles.desktop_img}
            />

        </form>
    )
}