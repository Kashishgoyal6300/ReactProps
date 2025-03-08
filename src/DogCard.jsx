import Image from "./Image";
import Name from "./Name";
function DogCard(props) {
    let title = "this is a dog part"
    return (
        <>
            {/* jsx curlie */}
            <h2 style={{ fontSize: '20px', color: 'red' }}>
                {title}
            </h2>
            {2 + 3}
            <Name>
                <h1>{props.name}</h1>
            </Name>
            <Image src={props.image} />
        </>
    );
}
export default DogCard;