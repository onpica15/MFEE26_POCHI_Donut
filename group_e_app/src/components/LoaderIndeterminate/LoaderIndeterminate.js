import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

const LoaderIndeterminate = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader indeterminate>轉得我頭好暈呀</Loader>
      </Dimmer>


    </Segment>
  </div>
);

export default LoaderIndeterminate;
