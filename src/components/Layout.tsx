import React, { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import HeroBanner from "./HeroBanner";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import Waves from "./Waves";

interface LayoutProps {
  children?: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Container fluid className="p-0 h-100">
      <HeroBanner />
      <Waves />
      <main>{children}</main>
    </Container>
  );
}

export default Layout;
