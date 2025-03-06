import { useState } from 'react';
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { usePublicQueryCategory } from '../hooks/usePublicQuery';

const products = [
    { name: 'Analytics', href: '/analytics' },
    { name: 'Engagement', href: '/engagement' },
    { name: 'Security', href: '/security' },
    { name: 'Integrations', href: '/integrations' },
    { name: 'Automations', href: '/automations' }
];

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { data } = usePublicQueryCategory();
    // console.log("Header data", data);

    return (
        <header className="bg-orange-700 text-white fixed top-0 left-0 w-full shadow-lg z-50">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <img
                            alt="Logo"
                            src="https://w7.pngwing.com/pngs/937/360/png-transparent-ncr-hd-logo-thumbnail.png"
                            className="h-14 w-auto"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                {data?.length > 0 && data?.map((item, index) => (
                    <PopoverGroup key={index} className="hidden lg:flex pl-6">
                        <Link to={`/${item?.name}`} className="font-bold text-white uppercase">{item?.name}</Link>
                        <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-1 cursor-pointer font-bold text-white ">
                                {item?.subcategory?.name}
                                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-white" />
                            </PopoverButton>
                            <PopoverPanel
                                className="absolute top-full left-[-20] -ml-12 z-10 mt-2 w-auto bg-white shadow-lg ring-1 ring-gray-900/5 rounded-lg"
                            >
                                <div className="p-2">
                                    {item?.subcategory?.map((subItem) => (
                                        <Link
                                            key={subItem.name}
                                            to={item.href}
                                            className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50"
                                        >
                                            {subItem?.name}
                                        </Link>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Popover>
                    </PopoverGroup>
                ))}


                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="/login" className="font-bold text-white">Log in &rarr;</Link>
                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <img
                                alt="Logo"
                                src="https://w7.pngwing.com/pngs/937/360/png-transparent-ncr-hd-logo-thumbnail.png"
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 p-2.5 text-gray-700"
                        >
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-20 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure>
                                    <DisclosureButton className="flex w-full justify-between rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                                        Product
                                        <ChevronDownIcon aria-hidden="true" className="size-5" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {products.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className="block rounded-lg py-2 px-6 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <Link to="/features" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                                    Features
                                </Link>
                                <Link to="/marketplace" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                                    Marketplace
                                </Link>
                                <Link to="/company" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                                    Company
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link to="/login" className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}

export default Header;
