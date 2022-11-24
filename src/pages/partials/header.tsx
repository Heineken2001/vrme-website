import React from 'react';
import Button from '../../components/button';
import { ButtonBackground, ButtonSize } from '../../enum/button-size';

const Header = () => {
    return (
        <header className="h-24 px-12 box-border">
            <nav className="flex justify-between items-center py-6">
                <div className="brand-group flex items-center gap-3">
                    <div className="logo">
                        <img className="w-12 h-12" src="/images/logo/vector.png" alt="" />
                    </div>
                    <div className="brand text-4xl leading-10">ViMRE</div>
                </div>
                <div className="user-group flex justify-end items-center gap-8">
                    <div className="market-place">Marketplace</div>
                    <Button
                        content="Connect a wallet"
                        size={ButtonSize.MEDIUM}
                        background={ButtonBackground.DARK}
                        icon="icon-User"
                    />
                </div>
                <div className="burger-menu">
                    <span
                        className={'icon-'}
                    ></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
