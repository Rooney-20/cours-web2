interface FooterProps {
    urlLogo : string;
    children : React.ReactNode;
}

const Footer = ({urlLogo, children}: FooterProps) => {
    return (
        <footer>
            <img src={urlLogo} alt="Logo" />
            <div>{children}</div>
        </footer>
    )
};


export default Footer;