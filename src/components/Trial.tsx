import React from 'react';
import { withTranslation } from 'react-i18next';

const Trial = (props) => {
  return <div>Trial {props.t('pages.index.title')}dfsfsdf</div>;
};

export default withTranslation()(Trial);
