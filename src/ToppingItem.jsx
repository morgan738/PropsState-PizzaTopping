const ToppingItem = (props) => {
    console.log(props)
    return(
        <li onClick={() => {props.changeIt(props.toppingName)}} > {props.toppingName} </li>
    )

}

export default ToppingItem