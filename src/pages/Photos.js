import { useContext } from "react"

import { Context } from "../Context"
import { getClass } from "../utils/imageUtils"
import Image from "../components/Image"

export default function Photos(){
    const {allPhotos} = useContext(Context)
    const imageElements = allPhotos.map((el,i) => (<Image key = {el.id} img={el} className={getClass(i)}/>))
    return(
        <main className="photos">
            {imageElements}
        </main>
    )
}