import * as React from "react";
import { Helmet } from "react-helmet";
import Heading from "../../Components/Heading";
import ImageHeader from "../../Components/ImageHeader";
import gamebg from "../../assets/images/games.png";
import Desc from "../../Components/Desc";
import ProjectDisplay from "../../Components/ProjectDisplay";
import ProjElement from "../../Components/ProjElement";

import cubeShooterbg from "../../assets/images/game_thumbnails/shooter.png";
import dungeonManbg from "../../assets/images/game_thumbnails/dungeon_man.png";
import clickDiamondbg from "../../assets/images/game_thumbnails/game1Back.png";
import jewelryMakerbg from "../../assets/images/game_thumbnails/jewelryMaker.png";
import clickerbg from "../../assets/images/game_thumbnails/clicker.png";
import matchFruitsbg from "../../assets/images/game_thumbnails/matchTheFruits.png";
import bearEscapebg from "../../assets/images/game_thumbnails/bearEscape.png";
import cubeSliderbg from "../../assets/images/game_thumbnails/slider.png";
import jumpbg from "../../assets/images/game_thumbnails/jump.png";
import lightsOutbg from "../../assets/images/game_thumbnails/lightsOut.png";
import tictactoebg from "../../assets/images/game_thumbnails/tictactoe.png";

interface GamesPageProps { }

interface GamesPageState { }

class GamesPage extends React.Component<GamesPageProps, GamesPageState> {
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
                    <title>Games - Jiaming Wang</title>
                </Helmet>
                <ImageHeader
                    src={gamebg}
                    dark={0.5}
                    style={{ backgroundSize: "4000px" }}
                >
                    <Heading subtitle="Games I've made">Games</Heading>
                </ImageHeader>
                <Desc title="My Games" center>
                    The games I have made.
                </Desc>

                <ProjectDisplay columns={3} seperator>
                    <ProjElement
                        image={tictactoebg}
                        heading="Tic Tac Toe"
                        tags={["Finished", "Online"]}
                        popupTitle="Tic Tac Toe"
                        popupBody={
                            <>
                                <p>You know this game.</p>
                            </>
                        }
                        popupBackground={tictactoebg}
                        link="/games/tictactoe"
                    />
                    <ProjElement
                        image={lightsOutbg}
                        heading="Lights Out"
                        tags={["Finished", "Offline"]}
                        popupTitle="Lights Out"
                        popupBody={
                            <>
                                <p>A game I made for a competition.</p>
                                <h2>How to play</h2>
                                <p>
                                    Collect the keys to go finish the level.
                                    <br/>
                                    Flip the switch to switch worlds.
                                </p>
                            </>
                        }
                        popupBackground={lightsOutbg}
                        link="/games/lightsout"
                    />
                    <ProjElement
                        image={cubeShooterbg}
                        heading="Cube Shooter"
                        tags={["Finished", "Offline"]}
                        popupTitle="Cube Shooter"
                        popupBody={
                            <>
                                <p>A first person shooter.</p>
                                <h2>How to play</h2>
                                <p>
                                    Use W A S D to move the player. <br />
                                    Use the mouse to aim and click to shoot.{" "}
                                    <br />
                                    Kill every monster to win.
                                </p>
                            </>
                        }
                        popupBackground={cubeShooterbg}
                        link="/games/cubeshooter"
                    />
                    <ProjElement
                        image={dungeonManbg}
                        heading="Dungeon Man"
                        tags={["Unfinished"]}
                        popupTitle="Dungeon Man"
                        popupBody={
                            <>
                                <p>
                                    A dungeon crawler game I am working on. Kill
                                    monsters to move to the next stage.
                                </p>
                                <br />
                                <h2>How to play</h2>
                                <p>Use W A S D to move the player</p>

                                <p>Use the mouse to aim and click to attack</p>

                                <p>
                                    Kill enough monsters to move to the next
                                    stage
                                </p>
                            </>
                        }
                        popupBackground={dungeonManbg}
                        link="/games/dungeonman"
                    />
                    <ProjElement
                        image={cubeSliderbg}
                        heading="Cube Slider"
                        tags={["Finished", "Offline"]}
                        popupTitle="Cube Slider"
                        popupBody={
                            <>
                                <p>
                                A game made with Unity. Slide the cube and avoid the black blocks. 
                                </p>
                                <br />
                                <h2>How to play</h2>
                                <p>Slide the cube left or right to avoid the black blocks</p>

                                <p>If you get hit, the level restarts</p>
                            </>
                        }
                        popupBackground={cubeSliderbg}
                        link="/games/cubeslider"
                    />
                     <ProjElement
                        image={jumpbg}
                        heading="Jump!"
                        tags={["Finished", "Offline"]}
                        popupTitle="Jump!"
                        popupBody={
                            <>
                                <p>
                                This was a game I made to test exporting to an android phone. It is a simple game where you have to jump over the blocks. 
                                </p>
                                <br />
                                <h2>How to play</h2>
                                <p>Tap the screen to jump</p>

                                <p>Try not to get hit</p>
                            </>
                        }
                        popupBackground={jumpbg}
                        link="/games/jump"
                    />
                    <ProjElement
                        image={clickDiamondbg}
                        heading="Click The Diamond"
                        tags={["Finished", "Online"]}
                        popupTitle="Click The Diamond"
                        popupBody={
                            <>
                                <p>
                                    Click the Diamond is a very old game I made
                                    while following a tutorial. This is very old
                                    and I don't intend to update it.
                                </p>
                                <br />
                                <h2>How to play</h2>
                                <p>
                                    After pressing the play button, try to click
                                    on the diamonds before they change places.
                                </p>

                                <p>
                                    If you click on a diamond you will gain
                                    points.
                                </p>

                                <p>
                                    If you click on dirt you will lose points.
                                </p>
                            </>
                        }
                        popupBackground={clickDiamondbg}
                        link="/games/clickthediamond"
                    />
                    <ProjElement
                        image={jewelryMakerbg}
                        heading="Jewelry Maker"
                        tags={["Finished", "Online"]}
                        popupTitle="Jewelry Maker"
                        popupBody={
                            <>
                                <p>
                                    This was the first game I made. The version
                                    here was an updated version I made a few
                                    years ago.
                                </p>
                                <br />
                                <h2>How to play </h2>
                                <p>Click the add money button</p>
                                <p>
                                    Once you get enough money, you can buy the
                                    materials needed
                                </p>
                            </>
                        }
                        popupBackground={jewelryMakerbg}
                        link="/games/jewelrymaker"
                    />
                    <ProjElement
                        image={clickerbg}
                        heading="Clicker"
                        tags={["Unfinished", "Online"]}
                        popupTitle="Clicker"
                        popupBody={
                            <>
                                <p>
                                    Clicker was a unfinished game that I was
                                    making that was discontinued because I
                                    didn't have enough time.
                                </p>
                                <br />
                                <h2>How to play</h2>
                                <p>
                                    Click the button in the middle. You can buy
                                    upgrades on the side.
                                </p>
                            </>
                        }
                        popupBackground={clickerbg}
                        link="/games/clicker"
                    />
                    <ProjElement
                        image={matchFruitsbg}
                        heading="Match The Fruits"
                        tags={["Finished", "Online"]}
                        popupTitle="Match The Fruits"
                        popupBody={
                            <>
                                <p>
                                    A simple matching game. The fruits are
                                    randomly generated and you have to match
                                    them.
                                </p>
                                <br />
                                <h2>How to play</h2>

                                <p>Press on a tile, it will display a fruit.</p>

                                <p>
                                    Click on another tile, if the fruits are the
                                    same, they will disappear.
                                </p>
                            </>
                        }
                        popupBackground={matchFruitsbg}
                        link="/games/matchthefruits"
                    />
                    <ProjElement
                        image={bearEscapebg}
                        heading="Bear Escape"
                        tags={["Finished", "Online"]}
                        popupTitle="Bear Escape"
                        popupBody={
                            <>
                                <p>This was a game I made following a tutorial on a book. It is very simple but I don't plan on upgrading it.</p>
                                <br />

                                <h2>How to play</h2>
                                <p>Press space to jump over the edges. If you are on mobile, a button should be there for jumping.</p>

                                <p>The speed will increase over time. If you get hit, the game will restart automatically.</p>
                            </>
                        }
                        popupBackground={bearEscapebg}
                        link="/games/bearescape"
                    />
                </ProjectDisplay>
            </>
        );
    }
}

export default GamesPage;
