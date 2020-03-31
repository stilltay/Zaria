import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
    CREATE_USER_ERROR,
    CREATE_USER_SUCCESS,
    CREATE_USER_REQUEST,
    // FETCH_JOURNALS,
    ADD_JOURNAl_REQUEST,
    ADD_JOURNAL_ERROR,
    ADD_JOURNAL_SUCCESS,
  } from "../actions/";

  export default (
    state = {
      isLoggingIn: false,
      isLoggingOut: false,
      isVerifying: false,
      isCreatingUser: false,
      loginError: false,
      logoutError: false,
      createUserError: false,
      isAuthenticated: false,
      user: {},
      journal: "",
      error: '',
    },
    action
  ) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          isLoggingIn: true,
          loginError: false
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggingIn: false,
          isAuthenticated: true,
          user: action.user
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isLoggingIn: false,
          isAuthenticated: false,
          loginError: true
        };
      case LOGOUT_REQUEST:
        return {
          ...state,
          isLoggingOut: true,
          logoutError: false
        };
      case LOGOUT_SUCCESS:
        return {
          ...state,
          isLoggingOut: false,
          isAuthenticated: false,
          user: {}
        };
      case LOGOUT_FAILURE:
        return {
          ...state,
          isLoggingOut: false,
          logoutError: true
        };
      case VERIFY_REQUEST:
        return {
          ...state,
          isVerifying: true,
          verifyingError: false
        };
      case VERIFY_SUCCESS:
        return {
          ...state,
          isVerifying: false
        };
      case CREATE_USER_REQUEST:
        return {
            ...state,
            isCreatingUser: true,
            createUserError: false
        }
      case CREATE_USER_SUCCESS:
        return {
            ...state,
            isCreatingUser: false,
            isAuthenticated: true,
            user: action.user
        }
      case CREATE_USER_ERROR:
        return {
            ...state,
            isCreatingUser: false,
            isAuthenticated: false,
            createUserError: true
        }
      case ADD_JOURNAL_SUCCESS:
            return {
                ...state,
                journal: action.journal
            }
       case ADD_JOURNAl_REQUEST:
            return {
                ...state,
            }
        case ADD_JOURNAL_ERROR:
            return {
                ...state,
                error: action.error
            }

    //   case FETCH_JOURNALS:
    //         return action.payload;
      default:
        return state;
    }
  };