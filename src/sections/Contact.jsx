import React, { useState } from 'react'
import Button from '../components/Button.jsx'

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);

        try {
            const response = await fetch('https://formspree.io/f/mnjndlol', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSuccess(true);
                e.target.reset();
            } else {
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            alert("Network error. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-5">Let's Talk</h2>
                    <p className="text-white-50 text-lg max-w-xl mx-auto">
                        Open to conversations, collaborations, or just exchanging ideas. <br />
                        Feel free to reach out.
                    </p>
                </div>

                <div className="w-full max-w-2xl bg-black-200 p-8 rounded-2xl border border-black-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center space-y-4 relative z-10">
                            <div className="size-16 bg-accent-primary/20 rounded-full flex items-center justify-center mb-2">
                                <span className="text-4xl text-accent-primary">❤️</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Thanks for reaching me out &lt;3</h3>
                            <p className="text-white-50">I'll get back to you as soon as possible.</p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="mt-4 text-accent-primary font-mono text-sm uppercase tracking-widest hover:text-white transition-colors"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-white-50 font-semibold">Full Name</label>
                                <input type="text" id="name" name="name" placeholder="ex. John Doe" required className="bg-black-100 border border-white-50/20 p-4 rounded-lg text-white placeholder:text-white-50/50 focus:outline-none focus:border-blue-500 transition-colors" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-white-50 font-semibold">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="ex. johndoe@gmail.com" required className="bg-black-100 border border-white-50/20 p-4 rounded-lg text-white placeholder:text-white-50/50 focus:outline-none focus:border-blue-500 transition-colors" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-white-50 font-semibold">Your Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="" required className="bg-black-100 border border-white-50/20 p-4 rounded-lg text-white placeholder:text-white-50/50 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 bg-white text-black font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white-50'}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                {!isSubmitting && <img src="/images/arrow-up.png" alt="arrow" className="w-4 h-4 object-contain invert rotate-45" />}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Contact
