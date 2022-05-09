import React, {useState, useEffect} from 'react';
import 'tw-elements';
import Loading from './Loading';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import pic3 from '../images/pic3.jpg';

const SwipeableMoblie = (props) => {
  const [first, setFirst] = useState({})
  const [second, setSecond] = useState({})
  const [third, setThird] = useState({})
  const navigate = useNavigate()
  const { data, loading } = props;

  useEffect(() => {
    getFirstThree()
  }, [data])

  const getFirstThree = () => {
    if(data) {
      
      const getFirst = data.posts[0]
      const getSecond = data.posts[1]
      const getThird = data.posts[2]
      

      setFirst(getFirst)
      setSecond(getSecond)
      setThird(getThird)
    }
    
  }
  
  
  return loading ? (
    <Loading />
  ) : (
    <div>
      {first && second && third ? (
        <div
          id="carouselDarkVariant"
          className="carousel slide carousel-fade carousel-dark relative h-full"
          data-bs-ride="carousel"
        >
          {/* <!-- Indicators --> */}
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="1"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="2"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="3"
              aria-label="Slide 1"
            ></button>
          </div>

          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <img
                src={first.image}
                className="block w-full h-96 opacity-40"
                alt="Motorbike Smoke"
              />
              <div className="carousel-caption absolute text-center mb-10">
                <h5 className="text-4xl text-black">{first.title}</h5>
                <p className="line-clamp-3 text-black">
                  {first.content}
                </p>
                <div className="mt-4">
                  <Button
                    className="btn btn-primary"
                    onClick={() => navigate(`/blog/${first.id}`)}
                  >
                    Read more...
                  </Button>
                </div>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <img
                src={second.image}
                className="block w-full h-96 opacity-40"
                alt=""
              />
              <div className="carousel-caption absolute text-center mb-10">
                <h5 className="text-4xl  text-black">{second.title}</h5>
                <p className="line-clamp-3  text-black">{second.content}</p>
                <div className="pt-4">
                  <Button
                    className="btn btn-primary"
                    onClick={() => navigate(`/blog/${second.id}`)}
                  >
                    Read more...
                  </Button>
                </div>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <img
                src={third.image}
                className="block w-full h-96 opacity-40"
                alt=""
              />
              <div className="carousel-caption absolute text-center mb-10 ">
                <h5 className="text-4xl text-black">{third.title}</h5>
                <p className="line-clamp-3  text-black">{third.content}</p>
                <div className="pt-4">
                  <Button
                    className="btn btn-primary"
                    onClick={() => navigate(`/blog/${second.id}`)}
                  >
                    Read more...
                  </Button>
                </div>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <img
                src={pic3}
                className="block w-full h-96 opacity-40"
                alt="Woman Reading a Book"
              />
              <div className="carousel-caption absolute text-center mb-10">
                <h5 className="text-4xl text-black">Check Out More Posts</h5>
                <div className="pt-4 text-2xl">
                  <Button
                    className="btn btn-primary"
                    onClick={() => navigate(`/blog`)}
                  >
                    All Blog Posts
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ) : (
        'nothing to currently display'
      )}
    </div>
  );
};

export default SwipeableMoblie;
