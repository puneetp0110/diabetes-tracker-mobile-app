/* 
 * combines all th existing reducers
 */
import * as loginReducer from 'app/features/login/reducers';
import * as signupReducer from 'app/features/signup/reducers';
import * as verificationReducer from 'app/features/validateemail/reducers';
import * as showBloodSugarReducer from 'app/features/showbloodsugar/reducers';
import * as showHistoryReducer from 'app/features/showhistory/reducers';
export default {...loginReducer,...signupReducer,...verificationReducer,...showBloodSugarReducer,...showHistoryReducer};
