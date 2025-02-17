import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from './ui/button';


const Footer = () => {
    return (
        <>
            <footer className="mt-12 text-center border-t pt-6 pb-6">
                <h2 className="text-2xl font-semibold">Stay Connected</h2>
                <div className="flex justify-center gap-6 mt-4">
                    <a href="https://github.com/MohammedHassan07" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost">
                            <Github className="h-6 w-6" />
                        </Button>
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost">
                            <Linkedin className="h-6 w-6" />
                        </Button>
                    </a>
                    <a href="mailto:your@email.com">
                        <Button variant="ghost">
                            <Mail className="h-6 w-6" />
                        </Button>
                    </a>
                </div>
                <p className="text-gray-500 text-sm mt-4">© 2025 NextBlog. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Footer
