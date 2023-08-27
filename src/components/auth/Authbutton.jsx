const Authbutton = (props) => {

      //link center
      const alignCenter = 'grid justify-items-center onboard-button';

  return (
    <div className="container mx-auto">

      <div className={props.buttonUpperClass}>
        <div className={alignCenter}>
            <button className={props.buttonLowerClass}>{props.buttonText}</button>
        </div>
     </div>
     
    </div>
  )
}

export default Authbutton