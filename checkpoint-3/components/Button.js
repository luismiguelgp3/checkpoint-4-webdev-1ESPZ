export default function Button(props) {
    return(
        <>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                {props.nome}
            </button>
        </>
    );
};