import{ImSpinner} from "react-icons/im";
const ButtonLoader=({text,className,size})=>{
    return(
        <button className={`${className} `} disabled>
          {text}
        { <ImSpinner className="animate-spin " size={size}/> }
      </button>
    );
}
//TODO:re use loader pending
export default ButtonLoader;