import React from 'react';
import publicsquare from '../projectImages/publicsquare.png';
import bodegswap from '../projectImages/bodegswap.png';
import piepal from '../projectImages/piepal.png';
import GetAppIcon from '@mui/icons-material/GetApp';
import GitHubIcon from '@mui/icons-material/GitHub';


const Projects = () => {
  return (
    <div className="bg-white pb-10">
      <div className="flex-grow border-t border-black"></div>
      <div className="flex m-20">
        <figure className="w-3/4 m-5 shadow-xl">
          <img src={publicsquare} alt="" className="h-full w-full" />
        </figure>
        <div className="card lg:card-side bg-base-100 shadow-xl shadow-black m-5 w-3/4">
          <div className="card-body">
            <div className="grid">
              <h2 className="card-title">Public Sqaure</h2>
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
                <h2 className="card-title">Tech Stack* TBA</h2>
                <p className="grid text-left">
                  <li>GraphQL</li>
                  <li>React</li>
                  <li>Postgres</li>
                </p>
              </div>
              <div className="grid grid-cols-1">
                <p className="text-center text-bold text-2xl">
                  Project Duration
                </p>
                <p>May 1 2022 - Currently in progess</p>

                <p className="text-center text-bold text-2xl">Team Members</p>
                <p>Brennan Skinner</p>
              </div>
            </div>

            <div className="card-actions justify-end">
              <div>
                <a href="">
                  <GetAppIcon
                    sx={{ fontSize: 50 }}
                    className="hover:scale-110 hover:animate-bounce"
                  />
                </a>
                <p>Coming Soon</p>
              </div>
              <div>
                <a href="">
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
      <div className="flex-grow border-t border-black"></div>

      <div className="flex m-20">
        <div className="card lg:card-side bg-base-100 shadow-xl shadow-black  m-5 w-3/4">
          <div className="card-body">
            <div className="grid">
              <h2 className="card-title">Pie-Pal</h2>
              <p className="text-left font-serif">
                Pie-Pal is a ecommerce application providing consumers the
                ability to purchase pizza from anywhere in country. While there
                are many cities claiming to have best pizza (Detriot, New York,
                Chicago, etc.). We're here to put an end to that debate.
              </p>
            </div>
            <div className="flex justify-between">
              <div className="grid grid-cols-1 ">
                <h2 className="card-title">Tech Stack</h2>
                <p className="grid text-left">
                  <li>React/Redux</li>
                  <li>Postgres</li>
                  <li>Express</li>
                </p>
              </div>
              <div className="grid">
                <div className="justify-between">
                  <h2 className="text-center text-bold text-2xl">
                    Project Duration
                  </h2>
                  <p>February 28 2022 - March 14 2022</p>
                </div>
                <div>
                  <h2 className="text-center text-bold text-2xl">
                    Team Members
                  </h2>
                  <p>David Durnham, Ryan Heaux, Brennan Skinner</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div>
                <a href="https://pie-pal.herokuapp.com/">
                  <GetAppIcon
                    sx={{ fontSize: 50 }}
                    className="hover:scale-110 hover:animate-bounce"
                  />
                </a>
                <p>Heroku</p>
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

      <div className="flex-grow border-t border-black"></div>
      <div className="flex m-20">
        <figure className="w-3/4 m-5 shadow-xl">
          <img src={bodegswap} alt="" className="h-full w-full" />
        </figure>
        <div className="card lg:card-side bg-base-100 shadow-xl shadow-black  m-5 w-3/4">
          <div className="card-body">
            <div className="grid">
              <h2 className="card-title">Bodega Swap</h2>
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
                <h2 className="card-title">Tech Stack</h2>
                <p className="grid text-left">
                  <li>React</li>
                  <li>Tailwind</li>
                  <li>Supabase</li>
                </p>
              </div>
              <div className="grid grid-cols-1">
                <p className="text-center text-bold text-2xl">
                  Project Duration
                </p>
                <p>March 15 2022 - April 5 2022</p>

                <p className="text-center text-bold text-2xl">Team Members</p>
                <p>Colin Forbes, Kaitlyn Zou, Brennan Skinner</p>
              </div>
            </div>

            <div className="card-actions justify-end">
              <div>
                <a href="https://bodega-swap.herokuapp.com">
                  <GetAppIcon
                    sx={{ fontSize: 50 }}
                    className="hover:scale-110 hover:animate-bounce"
                  />
                </a>
                <p>Heroku</p>
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
    </div>
  );
};

export default Projects;
