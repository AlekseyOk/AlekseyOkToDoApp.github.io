import { CHANGE_FILTER } from '../constants';

const BASE_FILTER = 'new';

const filters = (state = BASE_FILTER, { type, activeFilter }) => {
  switch (type) {
    case CHANGE_FILTER:
      return activeFilter;
    default:
      return state;
  }
}

export default filters;
