
import trans from '../../assets/img/errors/3.gif';

const ErrorScreen = () => {
  return (

    <div>

        <section className='container '>
            <div className='d-block text-center justify-content-center m-auto'>
                <img src={trans} alt="" className='img-fluid' width="200"/>
                <h1 className='display-3 mb-2 mt-4 fa-fade'>Constructing...</h1>
                <p className='col-8 m-auto '>We are working hard to make this page available</p>
            </div>

        </section>


    

    </div>

  )
}

export default ErrorScreen