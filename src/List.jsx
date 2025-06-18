function List() {
    const fruits = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "orange", calories: 45 },
        { id: 3, name: "banana", calories: 105 },
        { id: 4, name: "coconut", calories: 159 },
        { id: 5, name: "pineapple", calories: 37 }
    ];
    
    // alphabetically by name
    // for reverse alphabetically, just replace b with a after =>
    // fruits.sort((a, b) => a.name.localeCompare(b.name));

    // numeric
    // for reverse numeric, switch a with b after =>
    // fruits.sort((a, b) => a.calories - b.calories);

    // you can replace this for "fruits" in the map function
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    // react wants a key for each list item
    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;<b>{fruit.calories}</b></li>)

    return (<ol>{listItems}</ol>);
}

export default List