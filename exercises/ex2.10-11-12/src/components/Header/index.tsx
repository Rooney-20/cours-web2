interface HeaderProps {
    urlLogo : string;
    children : React.ReactNode;
}

const Header = ({urlLogo, children} : HeaderProps) => {
    return (
        <header>
            <img src={urlLogo} alt="Logo" />
            <div>{children}</div>
        </header>
    )
};

export default Header;