# react todo app

just remake basic todo app with react

1. todolist
2. Clock
3. weather
4. quotes

# 1. todoList

it is very easily builded by using useState

## bugfix

### submitted value doesn't saved in todoList

`<li>undefined</li>`

```
console.log(event);

event.target => form

event.target[0] => input

event.target[0].value => submitted value
```

### `<li></li>` is displayed as text

This is the reason why
we use the map function on the return JSX,
instead of in the handleSubmit function.

If we provide an array within the JSX,
React will automatically extract the elements from the array.

```
<div> {["a","b"]}</div>
```

above code rendered as

```
ab
```

this code return new array in {}

```
// todo = ["12", "34", "56"]

{
    todoList.length > 0 && todoList.map((item, index) => (<li key={index}>{item}</li>))
}
```

then this is automatically renderedn as

```
● 12
● 34
● 56
```

## key is needed as prop on li

```
The key prop is required when rendering a list of elements in React.
 It serves as a unique identifier for each element in the list.
```
