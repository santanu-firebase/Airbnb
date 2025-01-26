'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { Users, Settings, Shield, Activity, Menu, View, BookKey, Bed, MessageSquarePlus, PlaneTakeoff, SquareActivity, Binoculars, SquareAsterisk, Dot, ChevronDown } from 'lucide-react';
import { dataSet } from '@/app/data/dataSet';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setOpenCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const navItems = dataSet;
    // { href: '/dashboard', icon: Users, label: 'Team' },
    // { href: '/dashboard/general', icon: Settings, label: 'General' },
    // { href: '/dashboard/activity', icon: Activity, label: 'Activity' },
    // { href: '/dashboard/security', icon: Shield, label: 'Security' },
    // {
    //   href: '/dashboard', icon: View, label: 'Inquary', subItems: [
    //     { href: '/dashboard/inquary', icon: Dot, label: 'Inquiry Patterns' },
    //     { href: '/', icon: Dot, label: 'Pain Points & Key Factors' },
    //     { href: '/', icon: Dot, label: 'Abandonment vs. Booking' },
    //     { href: '/', icon: Dot, label: 'Inquiry to Booking' },
    //   ]
    // },
    // {
    //   href: '/dashboard', icon: BookKey, label: 'Booking', subItems: [
    //     { href: '/dashboard/booking', icon: Dot, label: 'Booking Confirmation & Pre-Arrival Coordination' },
    //     { href: '/', icon: Dot, label: 'Response & Communication Style' },
    //     { href: '/', icon: Dot, label: 'Factors Leading to Last-Minute Cancellations' },
    //     { href: '/', icon: Dot, label: 'Preparation Efficiency' },
    //   ]
    // },
    // {
    //   href: '/dashboard/stay', icon: Bed, label: 'Stay', subItems: [
    //     { href: '/', icon: Dot, label: 'Maintenance & Issue Resolution' },
    //     { href: '/', icon: Dot, label: 'Guest Experience & Satisfaction' },
    //     { href: '/', icon: Dot, label: 'Emergency Situations' },
    //     { href: '/', icon: Dot, label: 'Predicting High-Care Guests' },
    //   ]
    // },
    // {
    //   href: '/dashboard/conversion', icon: MessageSquarePlus, label: 'Conversion', subItems: [
    //     { href: '/', icon: Dot, label: 'High-Value Booking' },
    //     { href: '/', icon: Dot, label: 'Lifetime Value & Repeat Guests' },
    //     { href: '/', icon: Dot, label: 'Time Efficiency' },
    //   ]
    // },
    // {
    //   href: '/dashboard/departure', icon: PlaneTakeoff, label: 'Departure', subItems: [
    //     { href: '/', icon: Dot, label: 'Departure Process' },
    //     { href: '/', icon: Dot, label: 'Review Influences' },
    //     { href: '/', icon: Dot, label: 'Repeat Bookings' },
    //   ]
    // },
    // {
    //   href: '/dashboard/operations', icon: SquareActivity, label: 'Operations', subItems: [
    //     { href: '/', icon: Dot, label: 'Response Time Metrics' },
    //     { href: '/', icon: Dot, label: 'RConversation Volume & Patterns' },
    //     { href: '/', icon: Dot, label: 'Overall Efficiency' }
    //   ]
    // },
    // { href: '/dashboard/outcome', icon: Binoculars, label: 'Outcome', subItems: [
    //   { href: '/', icon: Dot, label: '5-Star Drivers' },
    //   { href: '/', icon: Dot, label: 'Non-5-Star Drivers' },
    //   { href: '/', icon: Dot, label: 'Post-Stay Follow-Up' },
    // ]},
    // {
    //   href: '/dashboard/priorities', icon: PlaneTakeoff, label: 'Priorities', subItems: [
    //     { href: '/', icon: Dot, label: 'Category Analysis of Questions' },
    //     { href: '/', icon: Dot, label: 'House Rules & Policy Clarifications' },
    //     { href: '/', icon: Dot, label: 'Value Proposition' },
    //   ]
    // },
    // { href: '/dashboard/risk', icon: SquareAsterisk, label: 'Risk', subItems: [
    //   { href: '/', icon: Dot, label: 'Potential Problem Guest Red Flags' },
    //   { href: '/', icon: Dot, label: 'Property Care Standards' },
    //   { href: '/', icon: Dot, label: 'Exceptional Circumstances' },
    // ]},
    // { href: '/dashboard/automation', icon: MessageSquarePlus, label: 'Automation' , subItems: [
    //   { href: '/', icon: Dot, label: 'Potential for Auto-Replies' },
    //   { href: '/', icon: Dot, label: 'Listing Optimization' },
    //   { href: '/', icon: Dot, label: 'Business Strategy' },
    // ]},
  

  return (
    <div className="flex flex-col min-h-[calc(100dvh-68px)] max-w-7xl mx-auto w-full">
    {/* Mobile header */}
    <div className="lg:hidden flex items-center justify-between bg-white border-b border-gray-200 p-4">
      <div className="flex items-center">
        <span className="font-medium">Settings</span>
      </div>
      <Button
        className="-mr-3"
        variant="ghost"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>
    </div>

    <div className="flex flex-1 h-full">
      {/* Sidebar */}
      <aside
        className={`w-64 bg-white lg:bg-gray-50 border-r border-gray-200 lg:block ${
          isSidebarOpen ? 'block' : 'hidden'
        } lg:relative absolute inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="h-full overflow-y-auto p-4 mr-20">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.subItems ? (
                <Collapsible
                  
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="shadow-none my-1 w-full justify-between"
                    >
                      <span className="flex items-center">
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.label}
                      </span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {item.subItems.map((subItem) => (
                      <Link key={subItem.href} href={`/dashboard/${item.href}/${subItem.href}`} passHref>
                        <Button
                          variant={pathname === subItem.href ? 'secondary' : 'ghost'}
                          className={`shadow-none my-1 w-full justify-start pl-8 ${
                            pathname === subItem.href ? 'bg-gray-100' : ''
                          }`}
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          <subItem.icon/>
                          {subItem.label}
                        </Button>
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link href={item.href} passHref>
                  <Button
                    variant={pathname === item.href ? 'secondary' : 'ghost'}
                    className={`shadow-none my-1 w-full justify-start ${
                      pathname === item.href ? 'bg-gray-100' : ''
                    }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-0 lg:p-4">{children}</main>
    </div>
  </div>
  );
}
