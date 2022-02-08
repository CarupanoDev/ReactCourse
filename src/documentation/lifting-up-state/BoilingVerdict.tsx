export const BoilingVerdict = ({celsius}: {celsius: number}) => {
    if( celsius >= 100){
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

export default BoilingVerdict;