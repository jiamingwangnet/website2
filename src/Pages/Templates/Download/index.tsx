import * as React from "react";
import Hemlet from "react-helmet";
import ImageHeader from "../../../Components/ImageHeader";
import Heading from "../../../Components/Heading";
import Desc from "../../../Components/Desc";
import {Link} from "react-router-dom";

interface DownloadObj {
    name: string;
    link: string;
}

interface DownloadsPageProps {
    title: string;
    headerImg: string;
    heading: string;
    desc: string;
    dark?:boolean;
    downloads: DownloadObj[];
}

interface DownloadsPageState {}

class DownloadsPage extends React.Component<
    DownloadsPageProps,
    DownloadsPageState
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
        const { title, headerImg, heading, desc, downloads, dark } = this.props;

        return (
            <>
                <Hemlet>
                    <title>{title} - Jiaming Wang</title>
                </Hemlet>
                <ImageHeader src={headerImg} dark={0}>
                    <Heading style={{color: dark ? "#000" : "#fff"}}>{heading}</Heading>
                </ImageHeader>
                <Desc title={heading} center>{desc}</Desc>
    
                <div style={{ width: "70%", maxWidth: "500px", margin: "20px",marginLeft:"auto",marginRight:"auto", marginBottom: "100px"}}>
                    <h2 style={{ textAlign: "center", fontSize: "40px" }}>Downloads</h2>
                    <hr />
                    {downloads.map(dl => {
                        return  <><a href={dl.link} style={{fontSize:"20px"}} download target="_blank">{dl.name}</a><br/></>
                    })}
                </div>
            </>
        );
    }
}

export default DownloadsPage;