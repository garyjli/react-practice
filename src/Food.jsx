function Food() {
    const food1 = "Fried Rice";
    const food2 = "Fried Chicken";

    return (
        <ul>
            <li>Pickled Cucumbers</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food