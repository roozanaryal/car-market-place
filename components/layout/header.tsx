"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="container-spacing">
        <div className="flex-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary-dark rounded-lg p-2">
              <Car className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-neutral-900">Vehiql</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/cars" className="text-body hover:text-accent-gold transition-colors">
              Browse Cars
            </Link>
            <Link href="/sell" className="text-body hover:text-accent-gold transition-colors">
              Sell Your Car
            </Link>
            <Link href="/about" className="text-body hover:text-accent-gold transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-body hover:text-accent-gold transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="btn-secondary" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button className="btn-primary" asChild>
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
