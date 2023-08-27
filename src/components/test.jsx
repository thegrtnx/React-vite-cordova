const Test = () => {
    const vibrate = () => {
        if ('vibrate' in navigator) {
          // Vibrate for 500ms
          navigator.vibrate(100000);
        } else {
          alert("Vibration is not supported in this browser.");
        }
      };
    
      return (
        <div>
          <button className="bg-white" onClick={vibrate}>Vibrate</button>
        </div>
      );
    }\




    const Authbutton = (props) => {

      //link center
      const alignCenter = 'grid justify-items-center onboard-button';

  return (
    <div className="container mx-auto">

      <div className="absolute inset-x-0 bottom-0 smartphone:mb-10 mb-14">
        <div className={alignCenter}>
            <button className="bg-urbanPurple text-white w-10/12 smartphone:py-3 mb-5 px-8 py-4">{props.buttonText}</button>
        </div>
     </div>
     
    </div>
  )
}

export default Authbutton

export default Test