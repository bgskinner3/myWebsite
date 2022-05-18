import React from 'react';
import publicsquare from '../projectImages/publicsquare.png';
import publicSquarelogo from '../projectImages/publicSquarelogo.png';
import bodegswap from '../projectImages/bodegswap.png';
import piepal from '../projectImages/piepal.png';
import GetAppIcon from '@mui/icons-material/GetApp';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  return (
    <div className="bg-white">
      <div className="md:flex flex-grow border-t border-black hidden"></div>
      <div className="md:flex m-20 hidden">
        <figure className="w-3/4 m-5 shadow-xl">
          <img src={publicSquarelogo} alt="" className="h-full w-full" />
        </figure>
        <div className="card lg:card-side bg-base-100 shadow-xl shadow-black m-5 w-3/4">
          <div className="card-body grid">
            <div className="grid">
              <h2 className="card-title text-bold text-2xl">Public Sqaure</h2>
              <p className="text-left font-serif">
                Public Sqaure, while still in development, aims to be a News
                verfication platform. Through community activity and voting,
                users can vote and provide evidence on posted articles to
                recieve rewards. While this may change the MVP here is a users
                ability to vote, post and collect rewards 'bounties' on all news
                articles provided by other community members.
              </p>
            </div>
            <div className="flex justify-between">
              <div className="grid grid-cols-1">
                <h2 className="card-title text-center text-bold text-2xl">
                  Tech
                </h2>
                <p className="grid text-left text-bold">
                  <li>GraphQL</li>
                  <li>React</li>
                  <li>Postgres</li>
                </p>
              </div>
              <div className="grid grid-cols-1">
                <p className="card-title text-center text-bold text-2xl">
                  Project Duration
                </p>
                <p>May 1 2022 - Currently in progess</p>

                <p className="card-title text-center text-bold text-2xl">
                  Team Members
                </p>
                <p className="grid text-left text-bold">
                  <li>Brennan Skinner</li>
                </p>
              </div>
            </div>

            <div className="card-actions justify-evenly pt-10">
              <div>
                <a href="https://public-square.herokuapp.com/">
                  <GetAppIcon
                    sx={{ fontSize: 50 }}
                    className="hover:scale-110 hover:animate-bounce"
                  />
                </a>
                <p>App</p>
              </div>
              <div>
                <a href="https://github.com/bgskinner3/PublicSquare2">
                  <GitHubIcon
                    sx={{ fontSize: 50 }}
                    className="hover:scale-110 hover:animate-bounce"
                  />
                </a>
                <p>GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex flex-grow border-t border-black hidden"></div>

      <div className="md:flex m-20 hidden">
        <div className="card lg:card-side bg-base-100 shadow-xl shadow-black  m-5 w-3/4">
          <div className="card-body grid">
            <div className="grid">
              <h2 className="card-title text-bold text-2xl">Pie-Pal</h2>
              <p className="text-left font-serif">
                Pie-Pal is a ecommerce application providing consumers the
                ability to purchase pizza from anywhere in country. While there
                are many cities claiming to have best pizza (Detriot, New York,
                Chicago, etc.). We're here to put an end to that debate.
              </p>
            </div>
            <div className="flex justify-between">
              <div className="grid grid-cols-1">
                <h2 className="card-title text-center text-bold text-2xl">
                  Tech
                </h2>
                <p className="grid text-left text-bold">
                  <li>React</li>
                  <li>Postgres</li>
                  <li>Express</li>
                </p>
              </div>
              <div className="grid grid-cols-1">
                <h2 className="card-title text-center text-bold text-2xl">
                  Project Duration
                </h2>
                <p>February 28 2022 - March 14 2022</p>

                <h2 className="card-title text-center text-bold text-2xl">
                  Team Members
                </h2>
                <p className="grid text-left text-bold">
                  <li>David Durnham</li>
                  <li>Ryan Heaux</li>
                  <li>Brennan Skinner</li>
                </p>
              </div>
            </div>

            <div className="card-actions justify-evenly pt-10">
              <div>
                <a href="https://pie-pal.herokuapp.com/">
                  <GetAppIcon
                    sx={{ fontSize: 50 }}
                    className="hover:scale-110 hover:animate-bounce"
                  />
                </a>
                <p>App</p>
              </div>
              <div>
                <a href="https://github.com/2201-GraceShopper-CharmanderChargers/Pie-Pal">
                  <GitHubIcon
                    sx={{ fontSize: 50 }}
                    className="hover:scale-110 hover:animate-bounce"
                  />
                </a>
                <p>GitHub</p>
              </div>
            </div>
          </div>
        </div>
        <figure className="w-3/4 m-5 shadow-xl">
          <img src={piepal} alt="" className="h-full w-full" />
        </figure>
      </div>

      <div className="md:flex flex-grow border-t border-black hidden"></div>

      <div className="md:flex p-20 hidden">
        <figure className="w-3/4 m-5 shadow-xl">
          <img src={bodegswap} alt="" className="h-full w-full" />
        </figure>
        <div className="card lg:card-side bg-base-100 shadow-xl shadow-black  m-5 w-3/4">
          <div className="card-body grid">
            <div className="grid">
              <h2 className="card-title text-bold text-2xl">Bodega Swap</h2>
              <p className="text-left font-serif">
                Bodega Swap is a platform that allows users to trade their
                'trash' for some else's 'treasures'. Connect with other users
                that have items on their accounts you would liek to trade for.
                No Card payments are required, simply take a picture of your
                item and connect!
              </p>
            </div>
            <div className="flex justify-between">
              <div className="grid grid-cols-1">
                <h2 className="card-title text-center text-bold text-2xl">
                  Tech
                </h2>
                <p className="grid text-left text-bold">
                  <li>React</li>
                  <li>Tailwind</li>
                  <li>Supabase</li>
                </p>
              </div>
              <div className="grid grid-cols-1">
                <p className="card-title text-center text-bold text-2xl">
                  Project Duration
                </p>
                <p>March 15 2022 - April 5 2022</p>

                <p className="card-title text-center text-bold text-2xl">
                  Team Members
                </p>
                <p className="grid text-left text-bold">
                  <li>Colin Forbes</li>
                  <li>Kaitlyn Zou</li>
                  <li>Brennan Skinner</li>
                </p>
              </div>
            </div>

            <div className="card-actions justify-evenly pt-10">
              <div>
                <a href="https://bodega-swap.herokuapp.com">
                  <GetAppIcon
                    sx={{ fontSize: 50 }}
                    className="hover:scale-110 hover:animate-bounce"
                  />
                </a>
                <p>App</p>
              </div>
              <div>
                <a href="https://github.com/FSA-Capstone-2201-Team-7/bodega-swap">
                  <GitHubIcon
                    sx={{ fontSize: 50 }}
                    className="hover:scale-110 hover:animate-bounce"
                  />
                </a>
                <p>GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-wrap ">
        <label className=" swap swap-flip p-10 ">
          <input type="checkbox" />

          <div className="swap-off h-full w-full">
            <figure className="shadow-xl">
              <img src={bodegswap} alt="" className="" />
            </figure>
          </div>
          <div className="swap-on">
            <div className="card w-full lg:card-side bg-base-100 shadow-xl shadow-black">
              <div className="card-body">
                <div className="grid">
                  <h2 className="card-title text-xs underline">Bodega Swap</h2>
                  <p className="text-left font-serif text-xs">
                    Bodega Swap is a platform that allows users to trade their
                    'trash' for some else's 'treasures'. Connect with other
                    users that have items on their accounts you would liek to
                    trade for. No Card payments are required, simply take a
                    picture of your item and connect!
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="grid grid-cols-1">
                    <h2 className="card-title text-xs text-bold underline">
                      Tech
                    </h2>
                    <p className="grid text-left text-xs">
                      <li>React</li>
                      <li>Tailwind</li>
                      <li>Supabase</li>
                    </p>
                  </div>
                  <div className="grid grid-cols-1">
                    <p className="text-center text-bold text-xs underline">
                      Project Duration
                    </p>
                    <div className="text-xs grid">
                      <p>March 15 2022</p> - April 5 2022
                    </div>
                  </div>
                </div>

                <div className="card-actions justify-end">
                  <div>
                    <a href="https://bodega-swap.herokuapp.com">
                      <GetAppIcon
                        sx={{ fontSize: 30 }}
                        className="hover:scale-110 hover:animate-bounce"
                      />
                    </a>
                    <p className="text-sm">App</p>
                  </div>
                  <div>
                    <a href="https://github.com/FSA-Capstone-2201-Team-7/bodega-swap">
                      <GitHubIcon
                        sx={{ fontSize: 30 }}
                        className="hover:scale-110 hover:animate-bounce"
                      />
                    </a>
                    <p className="text-sm">GitHub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>
        <div className="flex-grow border-t border-black"></div>
        <label className=" swap swap-flip p-10">
          <input type="checkbox" />
          <div className="swap-off h-full w-full">
            <figure className="shadow-xl">
              <img src={piepal} alt="" className="h-full w-full" />
            </figure>
          </div>
          <div className="swap-on">
            <div className="card w-full lg:card-side bg-base-100 shadow-xl shadow-black">
              <div className="card-body">
                <div className="grid">
                  <h2 className="card-title text-xs underline">Pie-Pal</h2>
                  <p className="text-left font-serif text-xs">
                    Pie-Pal is a ecommerce application providing consumers the
                    ability to purchase pizza from anywhere in country. While
                    there are many cities claiming to have best pizza (Detriot,
                    New York, Chicago, etc.). We're here to put an end to that
                    debate.
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="grid grid-cols-1 ">
                    <h2 className="card-title text-xs text-bold underline">
                      Tech
                    </h2>
                    <p className="grid text-left text-xs">
                      <li>React/Redux</li>
                      <li>Postgres</li>
                      <li>Express</li>
                    </p>
                  </div>
                  <div className="grid">
                    <div className="justify-between">
                      <h2 className="text-center text-bold text-xs underline">
                        Project Duration
                      </h2>
                      <div className="text-xs grid">
                        <p>February 28 2022</p> - March 14 2022
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div>
                    <a href="https://pie-pal.herokuapp.com/">
                      <GetAppIcon
                        sx={{ fontSize: 30 }}
                        className="hover:scale-110 hover:animate-bounce"
                      />
                    </a>
                    <p className="text-sm">App</p>
                  </div>
                  <div>
                    <a href="https://github.com/2201-GraceShopper-CharmanderChargers/Pie-Pal">
                      <GitHubIcon
                        sx={{ fontSize: 30 }}
                        className="hover:scale-110 hover:animate-bounce"
                      />
                    </a>
                    <p className="text-sm">GitHub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>

        <div className="flex-grow border-t border-black"></div>
        <label className=" swap swap-flip p-10">
          <input type="checkbox" />
          <div className="swap-off h-full w-full">
            <figure className="shadow-xl">
              <img src={publicSquarelogo} alt="" className="h-full w-full" />
            </figure>
          </div>
          <div className="swap-on">
            <div className="card lg:card-side bg-base-100 shadow-xl shadow-black ">
              <div className="card-body">
                <div className="grid">
                  <h2 className="card-title text-xs underline">
                    Public Sqaure
                  </h2>
                  <p className="text-left font-serif text-xs">
                    Public Sqaure, while still in development, aims to be a News
                    verfication platform. Through community activity and voting,
                    users can vote and provide evidence on posted articles to
                    recieve rewards. While this may change the MVP here is a
                    users ability to vote, post and collect rewards 'bounties'
                    on all news articles provided by other community members.
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="grid grid-cols-1">
                    <h2 className="card-title text-xs underline">
                      Tech Stack* TBA
                    </h2>
                    <p className="grid text-left text-xs">
                      <li>GraphQL</li>
                      <li>React</li>
                      <li>Postgres</li>
                    </p>
                  </div>
                  <div className="grid grid-cols-1">
                    <p className="text-center text-bold text-xs underline">
                      Project Duration
                    </p>
                    <div className="text-xs">
                      <p>May 1 2022</p> - Currently in progess
                    </div>
                  </div>
                </div>

                <div className="card-actions justify-end">
                  <div>
                    <a href="">
                      <GetAppIcon
                        sx={{ fontSize: 30 }}
                        className="hover:scale-110 hover:animate-bounce"
                      />
                    </a>
                    <p className="text-sm">Coming Soon</p>
                  </div>
                  <div>
                    <a href="">
                      <GitHubIcon
                        sx={{ fontSize: 30 }}
                        className="hover:scale-110 hover:animate-bounce"
                      />
                    </a>
                    <p className="text-sm">GitHub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Projects;
