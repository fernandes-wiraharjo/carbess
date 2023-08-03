import Sticky from 'react-stickynode';
import './stickyEl.css';

export default () => (
  <div className='sticky_cont'>
    <Sticky top={50}>
        <div>This should be sticky</div>
    </Sticky>
  </div>
);
