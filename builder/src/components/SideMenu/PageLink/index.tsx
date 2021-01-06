import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Badge } from "./styles"
import { Link, useLocation } from "react-router-dom";

export interface PageLinkProps {
    label: string;
    link: string;
    internal?: boolean;
    stub?: boolean;
    deprecated?: boolean;
    onClick?: () => void;
}

const PageLink: React.FC<PageLinkProps> = ({ label, link, internal, stub, deprecated, onClick }) => {
    const location = useLocation()
    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(location.pathname === link)
    }, [location, link])

    if (internal || stub || deprecated) {
        return (
            <Link to={link}>
            <Container active={active} onClick={onClick}>
                <span>{label}</span><Badge internal={internal} stub={stub} deprecated={deprecated}>{internal ? "internal" : (stub ? "stub" : "deprecated")}</Badge>
            </Container>
        </Link>
        )
    }
    
	return (
        <Link to={link}>
            <Container active={active} onClick={onClick}>
                <span>{label}</span>
            </Container>
        </Link>
	);
};

export default PageLink;
