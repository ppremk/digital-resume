import avatar from './images/avatar.jpg';

const ResumeData = {
  myName: 'Vikas Pandey',
  
  avatar: avatar,

  tabLabels: ['Skills','Experience'],
  
  profileSummary: `A "Smart Creative" who sees the bigger picture and concurrently focuses on minute details to contribute to the success of the team and the organization. email me : vikpande@gmail.com. Mobile # - +31-651557726`,
  
  buttonList: [
    {
      label: 'GitHub',
      link: 'https://github.com/vikpande'
    },
    {
      label: 'StackOverflow',
      link: 'https://stackoverflow.com/users/story/6938475'
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/vikpande/'
    },
    {
      label: 'DETAILED CV',
      link: 'https://docs.google.com/document/d/1xblMm9fhuTT_LEWVx1-sXEen4J9oR-aKt_kNmgsCvuw/edit#heading=h.gjdgxs'
    },
    {
      label: 'Social project',
      link: 'http://globalowls.com/about/'
    }
  ],

  skillsList: [
    'Architecture - Good understanding of the modern architecture patterns and ability to apply them to develop applications', 
    'Transformation and Change - DevOps practitioner involved in evaluating and implementing modern tooling, technology and processes for continual improvement',
    'Continuous Delivery - Multiple years of experience in implementing Continuous Delivery practices within teams and organization', 
    'Relationship management - Strong interpersonal skills to create a conducive environment and connect with people across different levels',    
    'React & Nodejs - Developed multiple web-apps, mobile app and PWA using React framework & Nodejs', 
    'Java - Developed a banking app with Java as back-end and Polymer as front-end consuming external API',
    'Containers - Prefer containerizing my applications for better management and good developer experience using Docker',
    'Kubernetes - A natural choice for automating deployment, scaling and managing applications',
    'Cloud - Experience in deploying applications on Azure, Now.sh, Heroku, AWS, among others',
  ],

  experienceList: [
    {
      company: 'Exact - (May 2016 till date)',
      projects: [
        {
          id: 1,
          value: `Transformation and architecture - Part of the transformation group that is involved in extracting microservices from a monolithic product. Set up a Continuous Delivery team, designed new framework involving Architecture, Security, Quality, Infrastructure, Legal.`
        },
        {
          id: 2,
          value: `Continuous Delivery portal - Developed an internal portal capturing the continuous delivery metrics such as lead time, cycle time to measure the effectiveness of the projects`
        },
        {
          id: 3,
          value: `Implemented multiple tools in the new technology department : RFI preparation, Vendor evaluation, cost-benefit analysis, PoC, board presentations among others`
        },
        {
          id: 4,
          value: `Consulting - Provided consulting services to a new "lean startup team" on development, quality, security and public cloud infrastructure (Azure)`
        }
      ]
    },

    {
      company: 'ING Bank - (Apr 2015 to May 2016)',
      projects: [
        {
          id: 1,
          value: `Coaching teams in the adoption of Continuous Delivery and agile development processes within the Security Guild team at ING. Set up a new team and coordinating with multiple stakeholders in the department`
        },
        {
          id: 2,
          value: `Development of a dashboard tool for monitoring the maturity and performance of teams in adoption of Continuous Delivery and Agile development processes`
        },
        ]
    },

    {
      company: 'Cybage - (Feb 2007 to Apr 2015)',
      projects: [
        {
          id: 1,
          value: `Managed multiple application development and maintenance projects in different roles such as Technical Lead, Business Analyst & Technical Manager `
        },
        {
          id: 2,
          value: `Lead various projects into application development and maintenance for customers such as TheRubiconGroup, Athenahealth, HotelsCombined & Google` 
        },
      ] // end projects array
    } // end project object
  ] // end experienceList array
} // end ResumeData

export default ResumeData;