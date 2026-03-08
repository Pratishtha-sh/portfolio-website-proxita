import React from 'react'
import { socialImgs } from '../constants/index.js'

const Footer = () => {
    return (
        <section className="footer flex-col gap-5">
            <div className="footer-container flex-col-center md:flex-row justify-between items-center gap-5">
                <div className="flex gap-2 text-white-50 text-sm">
                    <p>Terms & Conditions</p>
                    <p>|</p>
                    <p>Privacy Policy</p>
                </div>

                <div className="socials flex gap-5">
                    {socialImgs.map((social) => (
                        <div key={social.name} className="icon w-10 h-10 flex items-center justify-center rounded-full bg-black-200 border border-white-50/20 hover:bg-black-300 transition-colors cursor-pointer">
                            <img src={social.imgPath} alt={social.name} className="w-1/2 h-1/2 object-contain invert" />
                        </div>
                    ))}
                </div>

                <div className="text-white-50 text-sm">
                    <p>© 2024 Pratishtha. All rights reserved.</p>
                </div>
            </div>
        </section>
    )
}

export default Footer
