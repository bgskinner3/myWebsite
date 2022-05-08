import React from "react";

const Resume = () => {
  return (
    <div>
      <h1 className="text-2xl text-bold ">Brennan Skinner</h1>
      <p className="underline">Software Engineer</p>
      <div className="text-xs pb-5">
        <p>Email:</p>
        <p>brennangskinner2@gmail.com</p>
      </div>
      <div className="text-left">
        <h1 className="underline text-xl italic">EDUCATION</h1>
        <div className="grid grid-rows pb-5 pt-5">
          <p className="text-lg">Fullstack Academy</p>
          <p>New York, NY, APRIL, 2022</p>
          <p>Certificate in Software Engineering</p>
        </div>
        <div className="grid grid-rows pb-5 pt-5">
          <p className="text-lg">The King's College</p>
          <p>New York, NY, MAY, 2014 </p>
          <p>Politics, Philosophy, and Economics, B.A</p>
        </div>
      </div>
      <div className="text-left">
        <h1 className="underline text-xl italic">TECHNICAL SKILLS</h1>
        <li>
          <p>Proficent:</p>
          <p>
            Javascript, React/Redux, PostgreSQL, Node, Sequelize, Express,
            Tailwind
          </p>
        </li>
        <li>
          <p>Knowledgeable:</p>
          <p>GraphQL, ApolloGraphQL, Supabase</p>
        </li>
        <li>
          <p>Familiar:</p>
          <p>Firebase, Docker, Kubernetes</p>
        </li>
        <li></li>
      </div>
      <div className="text-left pt-5">
        <h1 className="underline text-xl italic">EMPLOYMENT</h1>
        <div className="pt-5 pb-5">
          <div className="flex">
            <p className="text-lg text-bold">Artichoke Basiles,</p>
            <p className="pl-2 pt-1 italic">New York, NY</p>
          </div>
          <div className="pt-2 pb-2">
            <p className="italic">Assistant Director of Operations</p>
            <p className="italic">JUNE, 2014- FEBRUARY, 2022</p>
          </div>

          <div>
            <li>Managed multiple locations across several states.</li>
            <li>
              Assembled, trained and managed a workforce that contributed to
              nearly 30% of total revenue.
            </li>
            <li>
              Developed a training program that was implemented throughout the
              company.
            </li>
            <li>
              Increased total revenuse, by establishing guidlelines and
              procedures focused on P/L.
            </li>
          </div>
        </div>
        <div className="pb-5 pt-5">
          <div className="flex">
            <p className="text-lg text-bold">Eataly,</p>
            <p className="pl-2 pt-1 italic">New York, NY</p>
          </div>
          <div className="pt-2 pb-2">
            <p className="italic">Management</p>
            <p className="italic">SEPTEMBER, 2016-OCTOBER, 2017</p>
          </div>

          <div>
            <li>
              Demonstrated multi-disciplinary industry expertise by increasing
              employee productivity and statisfaction.
            </li>
            <li>
              Rebuilt a team, utilizing a decisive management style, which
              generated the branches first $10 million annual revenue.
            </li>
            <li>
              Introduced new management techniques used in the building of the
              company's second location
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume