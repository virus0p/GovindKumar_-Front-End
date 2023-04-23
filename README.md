Q1. Explain what the simple List component does.

   The List component is a React functional component that renders an unordered list (ul) of Single List Item components. Each Single List Item component represents an item in the list and contains a text property that displays the item's text. The component also receives an array of items as a prop, and when an item is clicked, it will be highlighted in green.

   1. The List component takes an array of objects named 'items' as props.
   2. It iterates through the 'items' array and renders a new component named 'SingleListItem' for each item.
   3. The 'SingleListItem' component receives a set of props such as 'onClickHandler' function, 'text' string, current index, and 'isSelected' boolean.
   4. The 'onClickHandler' function handles clicking on each item and sets the 'selectedIndex' hook to the current index.
   5. The 'isSelected' boolean changes the background color of the list item to green if true and red if false.
   6. The List component uses hooks to keep track of the selected item index and handles user clicks through the handleClick function.
   7. The 'WrappedSingleListItem' is a memoized functional component that displays a single item with a background color based on its selection status.
   8. The 'WrappedListComponent' generates a list of items by using the 'WrappedSingleListItem' component.
   9. This creates an interactive list of selectable items for users to interact with on the website.

Q2. What problems / warnings are there with code?


   1. In order to pass a parameter in a function in the 'onClick' event, the attribute should be returned by an arrow function, like this:
    onClick={() => onClickHandler(index)}

   2. The 'index' and 'isSelected' props should be required, along with the 'onClickHandler' and 'text' props, like this:
    WrappedSingleListItem.propTypes = { index: PropTypes.number.isRequired,isSelected: PropTypes.bool.isRequired, onClickHandler:PropTypes.func.isRequired, text: PropTypes.string.isRequired, };

   3. The 'setSelectedIndex' function should come after the 'selectedIndex' state variable when
    creating the useState hook, like this:
    const [selectedIndex, setSelectedIndex] = useState();

   4. The 'isSelected' prop should pass a boolean value by checking if the 'selectedIndex' is equal to the 'index', like this: isSelected=    {selectedIndex === index}

   5. Each child in a list should have a unique "key" prop, like this: key={index}

   6. The PropTypes validation for the 'items' prop should use 'arrayOf' instead of 'array' and 'shape' instead of 'shapeOf', like this:
      WrappedListComponent.propTypes = { items: PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string.isRequired, })), };

   7. The default props for the 'items' prop should be an empty object array instead of a null value, like this:
      WrappedListComponent.defaultProps = { items: [{ text: 'No items' }], };