import * as React from "react";
import "./index.css";

interface ProjectDisplayProps {
    children: JSX.Element[];
    columns: number;
    seperator?: boolean;
}

interface ProjectDisplayState {}

class ProjectDisplay extends React.Component<
    ProjectDisplayProps,
    ProjectDisplayState
> {
    state = {};
    render() {
        return (
            <>
                {this.props.seperator ? (
                    <hr
                        style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "90%",
                        }}
                    />
                ) : null}
                <div className="" style={{ padding: "10px" }}>
                    <div className="row">{this.getColumns()}</div>
                </div>
            </>
        );
    }

    getColumns(): JSX.Element[] {
        if(this.props.children.length === 0)
        {
            let res: JSX.Element[] = [];
            for (let i = 0; i < this.props.columns; i++) {
                res.push(
                    <div id={"column-" + i} key={"column-" + i} className="column">
                        
                    </div>
                );
            }
            return res;
        }

        let res: JSX.Element[] = [];

        let displays: JSX.Element[][] = [];
        for(let i = 0; i < this.props.columns; i++) displays.push([]);

        for(let i = 0; i < this.props.children.length; i++)
        {
            displays[(i + 1) % this.props.columns].push(this.props.children[i]);
        }

        for (let i = 0; i < this.props.columns; i++) {
            res.push(
                <div id={"column-" + i} key={"column-" + i} className="column">
                    {displays[(i + 1) % this.props.columns]}
                </div>
            );
        }
        return res;
    }
}

export default ProjectDisplay;
