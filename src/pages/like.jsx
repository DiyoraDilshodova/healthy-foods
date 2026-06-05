import { useContext } from "react"
import { MainContext } from "../context/mainContext"

const Like = () => {
  const {likeItems} = useContext(MainContext)
  return (
    <div>
      {
        likeItems.length > 0 && JSON.stringify(likeItems)
      }
    </div>
  )
}

export default Like