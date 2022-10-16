import * as React from "react";
import { Helmet } from "react-helmet";
import Heading from "../../Components/Heading";
import ImageHeader from "../../Components/ImageHeader";
import projbg from "../../assets/images/testing.png";
import Desc from "../../Components/Desc";
import ProjectDisplay from "../../Components/ProjectDisplay";
import ProjElement from "../../Components/ProjElement";

import monkebeanbg from "../../assets/images/project_thumbnails/monkebean.png";
import partyscreenbg from "../../assets/images/project_thumbnails/partyscreen.png";

interface ProjectsPageProps {}

interface ProjectsPageState {}

class ProjectsPage extends React.Component<
    ProjectsPageProps,
    ProjectsPageState
> {
    state = {};

    componentDidMount() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Projects - Jiaming Wang</title>
                </Helmet>
                <ImageHeader
                    src={projbg}
                    dark={0.5}
                    style={{ backgroundSize: "4000px" }}
                >
                    <Heading subtitle="Other things I make">Projects</Heading>
                </ImageHeader>
                <Desc title="My Projects" center>
                    Other things I am working on.
                </Desc>

                <ProjectDisplay columns={3} seperator>
                    <ProjElement
                        image={monkebeanbg}
                        heading="Monke Bean"
                        tags={["Finished", "Online"]}
                        popupTitle="Monke Bean"
                        popupBody={
                            <>
                                <p>
                                    The infinite monkey theorem states that a
                                    monkey typing for a infinite amount of time
                                    will eventually type out any given text.
                                </p>
                                <p>
                                    This project uses this theorem to get the
                                    monkey to type "bean"
                                </p>
                                <h2>How to use </h2>
                                <p>
                                    Select your character set, each one has a
                                    different chance of giving "bean"
                                </p>
                                <br />
                                <p>
                                    Press start and wait for bean to get typed
                                </p>
                            </>
                        }
                        popupBackground={monkebeanbg}
                        link="/projects/monkebean"
                    />
                    <ProjElement
                        image={partyscreenbg}
                        heading="Party Screen"
                        tags={["Finished", "Online"]}
                        popupTitle="Party Screen"
                        popupBody={
                            <>
                                <p>
                                    Party screen is a thing I make that flashes
                                    different colours. It simulates what it
                                    would be like at a party.
                                </p>
                                <p>
                                    This project uses this theorem to get the
                                    monkey to type "bean"
                                </p>
                                <h2>How to use </h2>
                                <p>
                                    Press the start button under the title, a
                                    settings screen should pop up.
                                </p>
                                <br />
                                <p>
                                    The music should be a link to a youtube
                                    video or playlist.
                                </p>
                                <br />
                                <p>
                                    After changing the settings, press the "set"
                                    button at the bottom left corner of the
                                    pop-up
                                </p>
                                <br />
                                <p>
                                    The screen should be flashing at the set
                                    bpm.
                                </p>
                                <br />
                                <p>
                                    To change the settings, click the settings
                                    buttion at the bottom left of the screen.
                                </p>
                            </>
                        }
                        popupBackground={partyscreenbg}
                        link="/projects/partyscreen"
                    />
                </ProjectDisplay>
            </>
        );
    }
}

export default ProjectsPage;
