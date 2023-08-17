

export default function Form() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            
            <img />

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

                <label htmlFor="email">

                    <span>
                        Email address
                    </span>

                    <input 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email@company.com"
                        required
                    />

                </label>

                <button>

                    Subscribe to monthly newsletter
                    
                </button>

            </fieldset>

        </form>
    )
}