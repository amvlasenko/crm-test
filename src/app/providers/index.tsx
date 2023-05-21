import {withRouter} from '@app/providers/withRouter';
import compose from 'compose-function';
export const withProviders = compose(withRouter);