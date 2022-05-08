import React from "react";

const Resume = () => {
  return (
    <div>
      <h1>Brennan Skinner</h1>
      <p>Software Engineer</p>
      <div>
        <p>Email:</p>
        <p>brennangskinner2@gmail.com</p>
      </div>
      <div>
        <h1>EDUCATION</h1>
        <div>
          <p>Fullstack Academy,</p>
          <p>New York, NY</p>
          <p>APRIL, 2022 Certificate in Software Engineering</p>
        </div>
        <div>
          <p>The King's College,</p>
          <p>New York, NY</p>
          <p>MAY, 2014 Politics, Philosophy, and Economics, B.A</p>
        </div>
      </div>
      <div>
        <h1>TECHNICAL SKILLS</h1>
        <li>
          <p>Proficent:</p>
          <p>
            Javascript, React/Redux, PostgreSQL, Node, Sequelize, Express,
            Tailwind{' '}
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
      </div>
      <div>
        <h1>EMPLOYMENT</h1>
        <div>
          <p>Artichoke Basiles, New York, NY</p>
          <p>Assistant Director of Operations</p>
          <p>JUNE, 2014- FEBRUARY, 2022</p>
          <div>
            <li>mangaed multiple locations across several states.</li>
            <li>Assembled, trained and managed a workforce that contributed to nearly 30% of total revenue.</li>
            <li>Developed a training program that was implemented throughout the company.</li>
            <li>Increased total revenuse, by establishing guidlelines and procedures focused on P/L.</li>
          </div>
        </div>
        <div>
          <p>Eataly, New York, NY</p>
          <p>management</p>
          <p>SEPTEMBER, 2016-OCTOBER, 2017</p>
          <div>
            <li>Demonstrated multi-disciplinary industry expertise by increasing employee productivity and statisfaction.</li>
            <li>Rebuilt a team, utilizing a decisive management style, which generated the branches first $10 million annual revenue.</li>
            <li>Introduced new management techniques used in the building of the company's second location</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume