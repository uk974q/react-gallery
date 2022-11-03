import { useContext } from "react"
import { Context } from "../Context"
import Image from "../components/Image"
import { getClass } from "../utils/imageUtils"
export default function Photos(){
    const {allPhotos} = useContext(Context)
    // console.log("All Photos",allPhotos)

    const imageElements = allPhotos.map((el,i) => (<Image key = {el.id} img={el} className={getClass(i)}/>))
    return(
        <main className="photos">
            {imageElements}
        </main>
    )
}