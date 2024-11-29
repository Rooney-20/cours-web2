interface FooterProps {
    urlLogo : string;
    children : React.ReactNode;
}

const Footer = (props : FooterProps) => {
    return (
        <footer>
            <img src={props.urlLogo} alt="Logo" />
            <div>{props.children}</div>
        </footer>
    )
};


export default Footer;