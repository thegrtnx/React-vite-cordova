import { Link } from "react-router-dom"

const Authbuttonsub = (props) => {

    const alignCenter = 'grid justify-items-center onboard-button';

  return (
    <div>

    <div className={props.linkTextClass}>
      <div className={alignCenter}>
          <Link className="text-decoration-line" to={props.linkUrl} replace><p className={props.linkPclass}>{props.linkText} </p></Link>
      </div>
   </div>
   
  </div>
  )
}

export default Authbuttonsub