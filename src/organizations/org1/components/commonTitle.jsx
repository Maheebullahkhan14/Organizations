import { FaHeart } from "react-icons/fa";

const commonTitle = ({title}) => {
    return (
        <div className="flex justify-center items-center gap-2 text-orange-500 text-lg font-semibold">
            <FaHeart /> {title}
        </div>
    )
}

export default commonTitle