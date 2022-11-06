import React from 'react';
import { Link } from 'react-router-dom';
import Degree from '../resume/Degree';
import InformationPoint from '../resume/InformationPoint';
import ResumeSection from '../resume/ResumeSection';
import WorkExperience from '../resume/WorkExperience';
import Page from './Page';

const Resume = () => {
  const subtitle = (
    <div className="mt-2">
      For research, see <Link to="/research">research</Link>.
    </div>
  );

  return (
    <Page title="Resume" subtitle={subtitle}>
      <ResumeSection name="Education">
        <Degree
          name="B.A. Economics &amp; B.A. Data Science"
          university="University of California, Berkeley"
          years="2017–2021"
          notes="Phi Beta Kappa, with High Distinction in General Scholarship and High Honors in Economics"
        />
      </ResumeSection>
      <ResumeSection name="Research Experience">
        <WorkExperience
          company="Microsoft Research New England"
          location="Cambridge, MA"
          position="Predocotral Research Fellow, Economics &amp; Computation"
          dates="July 2021–Present"
          bullets={[
            'Worked with Dr. Hunt Allcott and Dr. Dmitry Taubinsky on a jointly authored paper estimating the welfare effects and targeting of "nudges"',
            'Worked with Dr. David Rothschild and Dr. Elad Yom-Tov on a jointly authored paper studying the movement and proliferation of medical hoaxes during the COVID-19 pandemic.',
            'Worked with Dr. Hunt Allcott and Dr. Matt Gentzkow on a paper estimating the tradeoff between commitment and flexibility when disincentivizing use of social media platforms.',
          ]}
        />
        <WorkExperience
          company="Department of Economics at the University of California, Berkeley"
          location="Berkeley, CA"
          position="Summer Undergraduate Research Fellow under Professor Danny Yagan"
          dates="May 2020–September 2020"
          bullets={[
            'Received $5,000 stipend to spend summer developing Economics honors thesis. Research question: what is the elasticity of retirement investing with respect to marginal income tax rates?',
            'Leveraged large-scale IRS data and granular tax simulations to develop a difference-in-differences methodology estimating the extent to which retirement investing habits depend on changes in marginal income tax rates.',
          ]}
        />
        <WorkExperience
          company="School of Information at the University of California, Berkeley"
          location="Berkeley, CA"
          position="Research Assistant under Associate Professor Josh Blumenstock"
          dates="January 2020–February 2021"
          bullets={[
            'Performed machine-learning causal and heterogeneity analyses of digital credit program effectiveness in Nigeria.',
          ]}
        />
        <WorkExperience
          company="Haas School of Business at the University of California, Berkeley"
          location="Berkeley, CA"
          position="Research Assistant under Assistant Professor Raúl Sánchez de la Sierra"
          dates="February 2018-November 2019"
          bullets={[
            'Produced automated animations of corruption indicators and warlord territory growth in the Democratic Republic of the Congo (DRC), revealing how humans interact in the absence of government.',
            'August - September, 2019: Conducted field work in DRC/Rwanda involving experimental design and survey methodology to pilot new study examining who joins armed groups and how participants are affected over time.',
          ]}
        />
      </ResumeSection>
      <ResumeSection name="Professional Experience">
        <WorkExperience
          company="VMware"
          location="Palo Alto, CA"
          position="Data Science Intern, Competitive Intelligence Department"
          dates="June 2019-August 2019"
          bullets={[
            'Built macroeconomic prediction model that continually trains boosted regression trees on automatically-updated federal economic data to predict running recession probabilities and produce biweekly LaTeX reports informing sales forecasts.',
          ]}
        />
        <WorkExperience
          company="Vacasa"
          location="Portland, OR"
          position="Data Analyst Intern, Operations Team"
          dates="June 2018-September 2018"
          bullets={[
            'Developed automated pipeline to clean and geographically categorize 3 years of supplies purchasing data, pinpointing financially unstable regions and communicating the Central Office’s concerns to the correct field team.',
          ]}
        />
        <WorkExperience
          company="The Berkeley Group"
          location="Berkeley, CA"
          position="Senior Consultant"
          dates="September 2017-May 2019"
          bullets={[
            'Worked on and led three project teams providing pro-bono business advice to local and national nonprofits.',
          ]}
        />
      </ResumeSection>
      <ResumeSection name="Teaching">
        <WorkExperience
          company="STAT 88: Probability and Mathematical Statistics in Data Science"
          location="University of California, Berkeley"
          position="Head Teaching Assistant"
          dates="August 2020-June 2021"
          bullets={[
            'Supervised 23 GSIs and Group Tutors serving 330 students per semester.',
            'Authored exams, managed course logistics, and developed & disseminated pedagogical instruction in addition to routine teaching.',
          ]}
        />
        <WorkExperience
          company="STAT 88: Probability and Mathematical Statistics in Data Science"
          location="University of California, Berkeley"
          position="Teaching Assistant"
          dates="January 2020–May 2020"
          bullets={[
            'Served as primary non-faculty instructor for 30-student group meeting twice weekly.',
            'Held office hours, graded exams, & developed homework assignments.',
          ]}
        />
        <WorkExperience
          company="STAT 140: Probability Theory for Data Science"
          location="University of California, Berkeley"
          position="Group Tutor"
          dates="August 2019-December 2019"
          bullets={[
            'Held weekly drop-in tutoring sessions for students & planned mini-lessons covering difficult concepts.',
          ]}
        />
      </ResumeSection>
      <ResumeSection name="Additional Information" last>
        <InformationPoint heading="Technical Skills">
          Fluent in: Python, Stata, R, C#, JavaScript, Java, SQL, &amp; LaTeX;
          AWS/Azure cloud compute
        </InformationPoint>
        <InformationPoint heading="Languages">
          English and Spanish (native), German (conversational)
        </InformationPoint>
        <InformationPoint heading="Personal Interests">
          Hiking, snowboarding, backpacking, climbing, pottery, scuba, tennis,
          cycling, gemology, personal finance, cooking, coffee
        </InformationPoint>
      </ResumeSection>
    </Page>
  );
};

export default Resume;
