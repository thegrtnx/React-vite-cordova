const CloseOffCanvas = (props) => {

    const alignCenter = 'grid justify-items-center onboard-button';

  return (
    <div>

        <div className={props.linkTextClass}>
            <div className={alignCenter}>
            <button onClick={props.closCanva} className={props.linkPclass}>{props.linkText} </button>
            </div>
        </div>
   
    </div>
  )
}

export default CloseOffCanvas