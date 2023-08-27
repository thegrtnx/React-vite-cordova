const Authheading = (props) => {
  return (
    <div>

        <div className="pt-16">
            <h1 className="text-2xl onboard-text text-urbanPurple dark:text-urbanWhite">{props.headerText}</h1>
            <p className="text-sm mt-1 text-urbanDark dark:text-urbanWhite">{props.headerSubText}</p>
        </div>

    </div>
  )
}

export default Authheading