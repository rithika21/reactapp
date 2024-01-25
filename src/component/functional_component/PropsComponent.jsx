import "./PropsComponent.css" //external css //use brackets correctly
function PropsComponent(props)
/*// internal css
    internal const StyleAttr={
        backgroundColor:"yellow",
        color:"white"
    }

*/

{
    return(
        //<div Style:{StyleAttr} ----->internal
        //<div style:{{color:"blue"}}></div> ---->inline
        // <div style={PropsComponent.css}>
        <div >
            hello {props.name}<br></br> This is {props.course} class
        </div>
    
    )
}
export default PropsComponent;