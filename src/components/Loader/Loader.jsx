import Style from "./Loader.module.css"
const Loader = () => {
    return (
    <div className={Style.loader}>
     <div className={Style.box1}>
     </div>
     <span>
         Loading.....
     </span>
 </div>
        )
}
export default Loader