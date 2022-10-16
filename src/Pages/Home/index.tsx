import * as React from "react";
import { Helmet } from "react-helmet";
import ImageHeader from "../../Components/ImageHeader";
import Heading from "../../Components/Heading";
import background from "../../assets/images/background.png";
import Desc from "../../Components/Desc"
import PagePreview from "../../Components/PagePreview";
import Preview from "../../Components/Preview";
import gamebg from "../../assets/images/games.png";
import projbg from "../../assets/images/testing.png";

interface HomePageProps {}

interface HomePageState {}

class HomePage extends React.Component<HomePageProps, HomePageState> {
    state = {};

    componentDidMount() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto"
        });
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Home - Jiaming Wang</title>
                </Helmet>

                <ImageHeader src={background} dark={0.5}>
                    <Heading subtitle="I make stuff" style={{
                         transform: "rotateZ(5deg)",
                    }}>Jiaming Wang</Heading>
                </ImageHeader>

                <Desc title="Hello There" center>
                    Welcome to jiamingwang.net. This is the place I store all of my projects and games.
                </Desc>
                <PagePreview>
                    <Preview image={gamebg} subtitle="Games I made" title="Games" link="/games"/>
                    <Preview image={projbg} subtitle="Things that are not games" title="Projects" link="/projects"/>
                </PagePreview>
            </>
        );
    }
}

export default HomePage;