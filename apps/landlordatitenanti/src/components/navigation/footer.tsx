import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Divider, Input } from 'antd';
import { app_config } from '@/config/config';
import PrimaryButton from '../button/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary h-auto lg:h-[480px] relative w-full bottom-0 border-t border-border">
      <div className="container mx-auto flex flex-col h-full justify-between px-4 py-12">
        <div className="grid md:grid-cols-2 mt-4 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-medium">RP</span>
              </div>
              <span className="text-xl text-white font-medium">
                {app_config.appName}
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Connecting landlords and tenants through innovative technology and
              exceptional service. Making rental experiences seamless for
              everyone.
            </p>
            <div className="flex space-x-3 text-white">
              <Link href={'#'} className="w-9 h-9 p-0 hover:text-accent">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href={'#'} className="w-9 h-9 p-0 hover:text-accent">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href={'#'} className="w-9 h-9 p-0 hover:text-accent">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href={'#'} className="w-9 h-9 p-0 hover:text-accent">
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* For Tenants */}
          <div className="space-y-4">
            <h3 className="font-medium text-white">For Tenants</h3>
            <ul className="flex flex-col gap-3 text-sm text-white">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Search Properties
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Rental Application
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Tenant Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Renter&apos;s Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Community Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* For Landlords */}
          <div className="space-y-4">
            <h3 className="font-medium text-white">For Landlords</h3>
            <ul className="flex flex-col gap-3 text-sm text-white">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  List Property
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Tenant Screening
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Landlord Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-medium text-white">Stay Updated</h3>
            <p className="text-sm text-white">
              Subscribe to our newsletter for the latest property listings and
              rental market insights.
            </p>
            <div className="space-y-2">
              <Input
                placeholder="Enter your email"
                suffix={
                  <PrimaryButton className="w-fit">
                    <Mail className="w-4 h-4 mr-2" />
                    Subscribe
                  </PrimaryButton>
                }
              />
            </div>
          </div>
        </div>

        <div>
          <Divider className="my-8 !bg-gray-400" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-6 text-sm text-white">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Accessibility
              </Link>
            </div>
            <div className="text-sm text-white/80">
              © {currentYear} {app_config.appName}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
