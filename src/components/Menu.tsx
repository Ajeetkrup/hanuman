import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const menuItems = [
  { key: 'hanuman-chalisa', label: 'हनुमान चालीसा', href: '/dashboard/hanuman-chalisa' },
  { key: 'bajrang-ban', label: 'बजरंग बाण', href: '/dashboard/bajrang-ban' },
  { key: 'hanuman-ashtak', label: 'संकटमोचन अष्टक', href: '/dashboard/hanuman-ashtak' },
];

export default function ResponsiveMenu() {
  return (
    <div className="relative">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen bg-orange-50 shadow p-4 space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.key}
            href={item.href}
            className="block text-center text-lg text-orange-600 hover:underline hover:bg-orange-100 p-2 rounded "
          >
            {item.label}
          </a>
        ))}
      </aside>

      {/* Mobile Fullscreen Menu */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="w-6 h-6 text-orange-600" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-screen h-screen bg-orange-50">
            <div className="p-6 space-y-6">
              {menuItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block text-center text-lg text-orange-600 hover:underline hover:bg-orange-100 p-2 rounded"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
