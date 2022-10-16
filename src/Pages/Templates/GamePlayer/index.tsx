import React from "react";
import Helmet from "react-helmet";
import Desc from "../../../Components/Desc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";

interface GamePlayerProps {
    title: string;
    gameLink: string;
    heading: string;
    desc: string;
}

interface GamePlayerState {
    fullscreen: boolean;
}

class GamePlayer extends React.Component<GamePlayerProps, GamePlayerState> {
    iframeRef: React.RefObject<HTMLDivElement>;
    constructor(props: GamePlayerProps) {
        super(props);
        this.state = {
            fullscreen: false,
        };
        this.iframeRef = React.createRef();
    }

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
                    <title>{this.props.title} - Jiaming Wang</title>
                </Helmet>
                <div
                    style={{
                        height: "100vh",
                        width: "90vw",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "70px",
                    }}
                >
                    <div style={{ textAlign: "center", height: "100%" }}>
                        <div
                            ref={this.iframeRef}
                            style={{
                                width: "75%",
                                height: "65%",
                                marginLeft: "auto",
                                marginRight: "auto",
                                backgroundColor: "#000",
                                marginBottom: "40px"
                            }}
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src={this.props.gameLink}
                            ></iframe>
                            <br />
                            <button
                                onClick={this.toggleFullscreen}
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: "#fff",
                                    fontSize: "30px",
                                    width: "100%",
                                    backgroundColor: "#101010",
                                    textAlign: "right",
                                    marginTop: "0",
                                    padding: "10px",
                                    paddingRight: "20px"
                                }}
                            >
                                {this.state.fullscreen ? (
                                    <FontAwesomeIcon icon={faCompress} />
                                ) : (
                                    <FontAwesomeIcon icon={faExpand} />
                                )}
                            </button>
                        </div>

                        <br />

                        <Desc title={this.props.heading} center>
                            {this.props.desc}
                        </Desc>
                    </div>
                </div>
            </>
        );
    }

    toggleFullscreen = () => {
        console.log("asfafsd");
        if (this.state.fullscreen) {
            this.iframeRef.current!.style.width = "75%";
            this.iframeRef.current!.style.height = "65%";
            this.iframeRef.current!.style.position = "relative";
            this.setState({ fullscreen: false });
        } else {
            this.iframeRef.current!.style.width = "100%";
            this.iframeRef.current!.style.height = "100%";
            this.iframeRef.current!.style.position = "absolute";
            this.iframeRef.current!.style.top = "0";
            this.iframeRef.current!.style.left = "0";
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "auto",
            });
            this.setState({ fullscreen: true });
        }
    };
}

export default GamePlayer;
