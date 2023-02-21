import { withTranslation } from 'react-i18next';

import Project from './Project';
import { ProjectT } from './types';

const Projects = ({
  data,
  withDetailsButton,
}: {
  data: ProjectT[];
  withDetailsButton: boolean;
}) => {
  return (
    <div className='mt-5 grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-2'>
      {data &&
        data.map &&
        data.map((project: ProjectT) => (
          <Project
            key={project._id}
            project={project}
            withDetailsButton={withDetailsButton}
          />
        ))}
    </div>
  );
};

export default withTranslation()(Projects);
