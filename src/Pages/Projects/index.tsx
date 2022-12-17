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
import rngsimbg from "../../assets/images/project_thumbnails/rngsim.png";
import numberclassifier from "../../assets/images/project_thumbnails/numberclassifier.png";

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
                        image={numberclassifier}
                        heading="Number Classifier"
                        tags={["Finished"]}
                        popupTitle="Number Classifier"
                        popupBody={
                            <>
                                <p>
                                    Number Classifier is a console application I made that can classify handwritten numbers saved as 
                                    a 28x28 pixel bitmap file.
                                </p>
                                <h2>How to use</h2>
                                <p>
                                    Download the executable or use the GitHub link to build it yourself.
                                    <br />
                                    Make sure the MNIST data files are in the same directory of the executable.
                                    You can download the MNIST data <a href="http://yann.lecun.com/exdb/mnist/" target="_blank" rel="noreferrer noopener nofollow">here</a>.
                                    <br/>
                                    When asked for as save file, put '!' if you don't have one.
                                </p>
                            </>
                        }
                        popupBackground={numberclassifier}
                        link="/projects/numberclassifier"
                    />
                    <ProjElement
                        image={rngsimbg}
                        heading="RNGSIM"
                        tags={["Finished", "Online"]}
                        popupTitle="RNGSIM"
                        popupBody={
                            <>
                                <p>
                                    Watch random numbers being generated.
                                </p>
                            </>
                        }
                        popupBackground={rngsimbg}
                        link="/projects/rngsim"
                    />
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
