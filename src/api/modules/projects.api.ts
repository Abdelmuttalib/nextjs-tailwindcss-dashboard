import { AxiosResponse } from 'axios';

import { fetchAPI } from '@/lib/api';

import { ProjectT } from '@/components/@pages/server-status-overview-page/types';

const getAllProjects = (): Promise<AxiosResponse<ProjectT[]>> =>
  fetchAPI.get('/status-overview');

const getProjectDeviceConfigurations = (projectUnionId: ProjectT['unionId']) =>
  fetchAPI.post('/device-configurations', { unionId: projectUnionId });

const projects = {
  getAllProjects,
  getProjectDeviceConfigurations,
};

export default projects;
