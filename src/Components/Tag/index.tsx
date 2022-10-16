import "./index.css";

interface TagProps {
    name: string;
}

const Tag = (props:TagProps) => {
    return ( 
        <span className="tag">
            {props.name}
        </span>
    );
}

export default Tag;