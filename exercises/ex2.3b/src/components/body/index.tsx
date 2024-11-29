interface PageBodyProps {
    name : string;
    age : number;
}

const Body = (props : PageBodyProps) => {
    return (
        <><div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
        </div></>
    );
}

export default Body;