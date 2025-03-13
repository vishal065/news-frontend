import { Fragment, useState } from 'react';
import {
    Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverPanel, Transition, TransitionChild
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { usePublicQueryCategory } from '../hooks/usePublicQuery';
import { useDispatch } from 'react-redux';
import { homeData } from '../redux/features/homeSlice';
import logo from "../../public/logo2.webp"

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { data } = usePublicQueryCategory();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCategoryClick = (category, subcategory = null) => {
        dispatch(homeData({ category, subcategory }));
        navigate(`/${category}${subcategory ? `/${subcategory}` : ''}`);
        setMobileMenuOpen(false);
    };

    return (
        <header className="bg-[#e36630] text-white fixed top-0 left-0 w-full shadow-lg z-50">
            <nav aria-label="Global" className="mx-3 flex max-w-7xl items-center justify-between p-4 lg:px-2">
                <div className="flex lg:flex-2">
                    <Link to="/" onClick={() => dispatch(homeData(null))} className="-m-1.5 p-1.5">
                        <img
                            alt="Logo"
                            src={logo}
                            className="h-17 w-17 rounded-full"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        {mobileMenuOpen ? <XMarkIcon className="size-6" aria-hidden="true" /> : <Bars3Icon className="size-6" aria-hidden="true" />}
                    </button>
                </div>

                <div className="hidden lg:flex space-x-6">
                    {data?.map((item, index) => (
                        <Popover key={index} className="relative">
                            <PopoverButton
                                className="flex items-center gap-x-1 outline-none px-4 font-bold text-white cursor-pointer uppercase"
                                onClick={() => handleCategoryClick(item?.name)}
                            >
                                {item?.name}
                                {item.subcategory?.length > 0 && <ChevronDownIcon className="size-6 font-bold" aria-hidden="true" />}
                            </PopoverButton>
                            {item.subcategory?.length > 0 && (
                                <PopoverPanel className="absolute top-full left-0 z-10 mt-2 bg-white shadow-lg ring-1 ring-gray-900/5 rounded-lg">
                                    <div className="p-2">
                                        {item?.subcategory?.map((subItem, subIndex) => (
                                            <p
                                                key={subIndex}
                                                className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 cursor-pointer uppercase"
                                                onClick={() => handleCategoryClick(item.name, subItem.name)}
                                            >
                                                {subItem.name}
                                            </p>
                                        ))}
                                    </div>
                                </PopoverPanel>
                            )}
                        </Popover>
                    ))}
                </div>

                {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="/login" className="font-bold text-white uppercase">
                        Log in &rarr;
                    </Link>
                </div> */}
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <Transition appear show={mobileMenuOpen} as={Fragment}>
                    {/* Backdrop without Blur */}
                    <TransitionChild
                        as={Fragment}
                        enter="transition-opacity duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div
                            className="fixed inset-0 z-10 bg-transparent"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                    </TransitionChild>

                    {/* Sliding Panel */}
                    <TransitionChild
                        as={Fragment}
                        enter="transition-transform duration-300 ease-in-out"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-transform duration-300 ease-in-out"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <DialogPanel className="fixed inset-y-0 left-0 top-[100px] z-20 w-2/3 overflow-y-auto bg-white px-6 py-6 shadow-lg">
                            <div className="flex items-center justify-between">
                                <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                                    <img
                                        alt="Logo"
                                        src={logo}
                                        className="h-8 w-auto rounded-full"
                                    />
                                </Link>
                                <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 p-2.5 text-gray-700">
                                    <XMarkIcon className="size-6" aria-hidden="true" />
                                </button>
                            </div>

                            <div className="mt-6 space-y-4">
                                {data?.map((item, index) => (
                                    <Disclosure key={index}>
                                        <DisclosureButton className="flex w-full justify-between rounded-lg py-2 px-3 text-base uppercase font-semibold text-gray-900 hover:bg-gray-50">
                                            {item.name}
                                            {item.subcategory?.length > 0 && <ChevronDownIcon className="size-5" aria-hidden="true" />}
                                        </DisclosureButton>
                                        {item.subcategory?.length > 0 && (
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {item.subcategory.map((subItem, subIndex) => (
                                                    <p
                                                        key={subIndex}
                                                        className="block rounded-lg py-2 px-6 text-sm font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer uppercase"
                                                        onClick={() => handleCategoryClick(item.name, subItem.name)}
                                                    >
                                                        {subItem.name}
                                                    </p>
                                                ))}
                                            </DisclosurePanel>
                                        )}
                                    </Disclosure>
                                ))}
                            </div>

                            {/* <div className="py-6">
                                <Link
                                    to="/login"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50 uppercase"
                                >
                                    Log in
                                </Link>
                            </div> */}
                        </DialogPanel>
                    </TransitionChild>
                </Transition>
            </Dialog>
        </header>
    );
}

export default Header;
