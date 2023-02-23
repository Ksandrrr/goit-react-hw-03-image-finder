
import Style from "./ImageGallery.module.css"
const ImageGallery = ({children}) => {

    return (
    <ul className={Style.gallery}>
     {children}
        </ul>
    )
}
export default ImageGallery