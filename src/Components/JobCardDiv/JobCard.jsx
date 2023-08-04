import React from 'react';
import { ClockCircleOutlined, WeiboCircleOutlined } from "@ant-design/icons";

const data = [
  {
    id: '1',
    title: 'Web Developer',
    time: 'Now',
    location: 'Pune',
    desc: 'Front- or Backend apps using Nodejs * HTML, CSS & JavaScript * Underst of database techn and SQL Oppti * Strong in Data Struct, Algo n problem solving * Addit. underst. of PHP is a plus * Exp using Postgres, MySQL * Exp AngularJS, NestJS Fresher-OK',
    company: 'Web Corporation',
  },
  {
    id: '2',
    title: 'Software Developer',
    time: '2 days',
    location: 'Chennai ',
    desc: 'Front- or Backend apps using Nodejs * HTML, CSS & JavaScript * Underst of database techn and SQL Oppti * Strong in Data Struct, Algo n problem solving * Addit. underst. of PHP is a plus * Exp using Postgres, MySQL * Exp AngularJS, NestJS Fresher-OK',
    company: 'Flipkart',
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    time: '15 days',
    location: 'Bangalore',
    desc: 'Front- or Backend apps using Nodejs * HTML, CSS & JavaScript * Underst of database techn and SQL Oppti * Strong in Data Struct, Algo n problem solving * Addit. underst. of PHP is a plus * Exp using Postgres, MySQL * Exp AngularJS, NestJS Fresher-OK',
    company: 'Google',
  },
  {
    id: '4',
    title: 'Java Developer',
    time: '10 days',
    location: 'Indore',
    desc: 'Front- or Backend apps using Nodejs * HTML, CSS & JavaScript * Underst of database techn and SQL Oppti * Strong in Data Struct, Algo n problem solving * Addit. underst. of PHP is a plus * Exp using Postgres, MySQL * Exp AngularJS, NestJS Fresher-OK',
    company: 'Accolite',
  },
  {
    id: '5',
    title: 'Fronted Developer',
    time: '1 months',
    location: 'Bangalore',
    desc: 'Front- or Backend apps using Nodejs * HTML, CSS & JavaScript * Underst of database techn and SQL Oppti * Strong in Data Struct, Algo n problem solving * Addit. underst. of PHP is a plus * Exp using Postgres, MySQL * Exp AngularJS, NestJS Fresher-OK',
    company: 'Oracle',
  },
  {
    id: '6',
    title: 'Backend Developer',
    time: 'Now',
    location: 'Pune',
    desc: 'Front- or Backend apps using Nodejs * HTML, CSS & JavaScript * Underst of database techn and SQL Oppti * Strong in Data Struct, Algo n problem solving * Addit. underst. of PHP is a plus * Exp using Postgres, MySQL * Exp AngularJS, NestJS Fresher-OK',
    company: 'Nvdia',
  },
];

const JobCard = () => {
  return (
    <div>
      <div className='job-container'>

        {
          data.map(({ id, title, time, location, desc, company }) => {
            return (
              <div className='job-items'>

                <span className='job-container-span'>
                  <span className='job-container-heading'>{title}</span>

                  <span className='job-container-subheading'>
                    <ClockCircleOutlined />{time}
                  </span>

                </span>

                <span className='job-container-location'>{location}</span>

                <span className='job-container-content'>{desc}</span>

                <div className='job-container-company-name'>
                  <WeiboCircleOutlined style={{ color: "black" }} />{company}
                </div>

                <button className='job-container-button'> Apply Now</button>
              </div>

            )

          })
        }


      </div>
    </div>
  )
}

export default JobCard