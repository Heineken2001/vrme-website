import React from 'react';
import Button from '../button';
import { ButtonBackground, ButtonSize } from '../../enum/button-size';

const Header = () => {
    return (
        <header className="px-12 box-border 0xl:max-md:px-8 bg-black fixed top-0 w-full xl:max-w-screen-xl">
            <nav className="flex justify-between items-center py-6">
                <div className="flex items-center gap-3">
                    <div className="logo">
                        <img
                            className="w-12 h-auto 0xl:max-md:w-8 0xl:max-md:h-auto"
                            src="/images/logo/vector.png"
                            alt=""
                        />
                    </div>
                    <div className="brand text-4xl leading-10 0xl:max-md:text-2xl">ViMRE</div>
                </div>
                <div className="user-group flex justify-end items-center gap-8 0xl:max-md:hidden">
                    <div className="market-place">Marketplace</div>
                    <Button
                        content="Connect a wallet"
                        size={ButtonSize.MEDIUM}
                        background={ButtonBackground.DARK}
                        icon="icon-User"
                        attribute="w-fit"
                    />
                </div>
                <div className="burger-menu md:hidden ">
                    <span className={'icon-List'}></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
