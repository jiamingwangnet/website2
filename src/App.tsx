import React from "react";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { HomePage, GamesPage, ErrorPage, DownloadsPage, GamePlayer, ProjectsPage, HTMLLoader, ChatPage } from "./Pages";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import cubeShooterBg from "./assets/images/game_thumbnails/shooter.png";
import dungeonManBg from "./assets/images/game_thumbnails/dungeon_man.png"
import cubeSliderbg from "./assets/images/game_thumbnails/slider.png";
import jumpbg from "./assets/images/game_thumbnails/jump.png";
import lightsOutbg from "./assets/images/game_thumbnails/lightsOut.png";
import numberclassifier from "./assets/images/project_thumbnails/numberclassifier.png";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar titleHeight={window.innerHeight} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/games" element={<GamesPage />} />
                    <Route path="/projects" element={<ProjectsPage/>} />
                    <Route path="/chat" element={<ChatPage/>} />
                    {/* games */}
                    <Route
                        path="/games/cubeshooter"
                        element={
                            <DownloadsPage
                                title="Cube Shooter"
                                heading="Cube Shooter"
                                desc="A FPS game I made about shooting cubes."
                                headerImg={cubeShooterBg}
                                downloads={[
                                    {name: "Windows x64", link: "/downloads/Cube_Shooter_Windows_x64.zip"}
                                ]}
                            />
                        }
                    />
                    <Route
                        path="/games/dungeonman"
                        element={
                            <DownloadsPage
                                title="Dungeon Man"
                                heading="Dungeon Man"
                                desc="A unfinished game about dungeons and killing monsters."
                                headerImg={dungeonManBg}
                                downloads={[
                                    {name: "Windows x64 (UNFINISHED)", link: "/downloads/Dungeon_Man_x64.zip"}
                                ]}
                            />
                        }
                    />
                    <Route
                        path="/games/cubeslider"
                        element={
                            <DownloadsPage
                                title="Cube Slider"
                                heading="Cube Slider"
                                desc="Slide to avoid the blocks."
                                headerImg={cubeSliderbg}
                                downloads={[
                                    {name: "Windows Setup", link: "/downloads/Cube_Slider_Setup_(x86).exe"},
                                    {name: "Android Apk", link: "/downloads/Cube_Slider-1.0.apk"}
                                ]}
                            />
                        }
                    />
                    <Route
                        path="/games/jump"
                        element={
                            <DownloadsPage
                                title="Jump!"
                                heading="Jump!"
                                desc="Jump over the blocks."
                                headerImg={jumpbg}
                                downloads={[
                                    {name: "Android Apk", link: "/downloads/jump.apk"}
                                ]}
                            />
                        }
                    />
                    <Route
                        path="/games/clickthediamond"
                        element={
                            <GamePlayer
                                title="Click The Diamond"
                                gameLink="/html/games/clickTheDiamond/index.html"
                                heading="Click The Diamond"
                                desc="Click the play button to play. If you click dirt, you lose 2 points. If you click the diamond, you get 1 point."
                            />
                        }
                    />
                    <Route
                        path="/games/jewelrymaker"
                        element={
                            <GamePlayer
                                title="Jewelry Maker"
                                gameLink="/html/games/jewelryMaker/index.html"
                                heading="Jewelry Maker"
                                desc="Get money and make jewelry forever."
                            />
                        }
                    />
                    <Route
                        path="/games/clicker"
                        element={
                            <GamePlayer
                                title="Clicker"
                                gameLink="/html/games/clicker/index.html"
                                heading="Clicker"
                                desc="Click the button and get a bigger number. I will not finish this game."
                            />
                        }
                    />
                    <Route
                        path="/games/matchthefruits"
                        element={
                            <GamePlayer
                                title="Match The Fruits"
                                gameLink="/html/games/matchTheFruits/index.html"
                                heading="Match The Fruits"
                                desc="Match all the fruits and win."
                            />
                        }
                    />
                    <Route
                        path="/games/bearescape"
                        element={
                            <GamePlayer
                                title="Bear Escape"
                                gameLink="/html/games/bearEscape/index.html"
                                heading="Bear Escape"
                                desc='Run away from the "bear"!!!'
                            />
                        }
                    />
                    <Route
                        path="/games/lightsout"
                        element={
                            <DownloadsPage
                                title="Lights Out"
                                heading="Lights Out"
                                desc="A platformer where a light switch changes worlds."
                                headerImg={lightsOutbg}
                                downloads={[
                                    {name: "Windows x64", link:"/downloads/LightsOut.zip"},
                                    {name: "MacOS", link:"/downloads/LightsOut_Apple.zip"},
                                ]}
                                dark
                            />
                        }
                    />

                    {/* projects */}
                    <Route
                        path="/projects/monkebean"
                        element={
                            <HTMLLoader
                                title="Monke Bean"
                                src="/html/projects/Monke-Bean/src/monke.html"
                            />
                        }
                    />
                    <Route
                        path="/projects/partyscreen"
                        element={
                            <HTMLLoader
                                title="Party Screen"
                                src="/html/projects/Party-screen/screen.html"
                            />
                        }
                    />
                    <Route
                        path="/projects/rngsim"
                        element={
                            <HTMLLoader
                                title="RNGSIM"
                                src="/html/projects/RNGSIM/index.html"
                            />
                        }
                    />
                    <Route
                        path="/projects/numberclassifier"
                        element={
                            <DownloadsPage
                                title="Number Classifier"
                                heading="Number Classifier"
                                desc={
                                    <div className="centerParagraph">
                                        <p style={{textAlign:"center"}}>This console app will classify handwritten numbers.</p>
                                        <div style={{margin:"20px"}}>
                                            <h2 style={{textAlign:"center"}}>Instructions</h2>
                                            <p>
                                                Download the executable below or build it yourself from 
                                                the <a href="https://github.com/jiamingwangnet/number-classifier" target="_blank" rel="noreferrer noopener nofollow">GitHub link</a>.
                                            </p>
                                            <p>
                                                Make sure the MNIST files are in the same directory as the executable.
                                                You can download the MNIST files <a href="http://yann.lecun.com/exdb/mnist/" target="_blank" rel="noreferrer noopener nofollow">here</a>.
                                            </p>
                                            <p>
                                                When prompted about model value paths, type '!' if you do not have one.
                                                <br />
                                                Press any key to stop training and test.
                                            </p>
                                            <p>
                                                Test images must be a bitmap file (.BMP) and the size must be 28x28.
                                            </p>
                                        </div>
                                    </div>
                                }
                                headerImg={numberclassifier}
                                downloads={[
                                    {name: "Windows x64", link:"/downloads/NumberClassifier.exe"},
                                    {name: "Pre-trained data", link:"/downloads/save.txt"},
                                ]}
                            />
                        }
                    />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
