"use client";

import Link from "next/link";
import { Car, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="section-spacing">
        <div className="container-spacing">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="rounded-lg p-2 bg-neutral-800">
                  <Car className="h-5 w-5 text-[var(--accent-gold)]" />
                </div>
                <span className="text-xl font-bold text-white">Vehiql</span>
              </Link>
              <p className="text-neutral-400">
                Find your perfect car with AI-powered search and seamless buying experience.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-neutral-400 hover:text-[var(--accent-gold)] transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-neutral-400 hover:text-[var(--accent-gold)] transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-neutral-400 hover:text-[var(--accent-gold)] transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-neutral-400 hover:text-[var(--accent-gold)] transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/cars" className="block text-neutral-400 hover:text-[var(--accent-gold)] transition-colors">
                  Browse Cars
                </Link>
                <Link href="/sell" className="block text-neutral-400 hover:text-[var(--accent-gold)] transition-colors">
                  Sell Your Car
                </Link>
                <Link href="/financing" className="block text-neutral-400 hover:text-[var(--accent-gold)] transition-colors">
                  Financing
                </Link>
                <Link href="/insurance" className="block text-neutral-400 hover:text-[var(--accent-gold)] transition-colors">
                  Insurance
                </Link>
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Support</h3>
              <div className="space-y-2">
                <Link href="/help" className="block text-neutral-400 hover:text-[var(--accent-gold)] transition-colors">
                  Help Center
                </Link>
                <Link href="/contact" className="block text-neutral-400 hover:text-[var(--accent-gold)] transition-colors">
                  Contact Us
                </Link>
                <Link href="/faq" className="block text-neutral-400 hover:text-[var(--accent-gold)] transition-colors">
                  FAQ
                </Link>
                <Link href="/support" className="block text-neutral-400 hover:text-[var(--accent-gold)] transition-colors">
                  Live Chat
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-neutral-400 hover:text-[var(--accent-gold)] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-neutral-400 hover:text-[var(--accent-gold)] transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="block text-neutral-400 hover:text-[var(--accent-gold)] transition-colors">
                  Cookie Policy
                </Link>
                <Link href="/disclaimer" className="block text-neutral-400 hover:text-[var(--accent-gold)] transition-colors">
                  Disclaimer
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-neutral-500 text-sm">
                © 2024 Vehiql. All rights reserved.
              </p>
              <p className="text-neutral-500 text-sm">
                Made with ❤️ for car enthusiasts
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
