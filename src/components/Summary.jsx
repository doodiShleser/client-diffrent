import React, { Component, Fragment } from "react";

class Summary extends Component {
  constructor(props){
    super(props);
    this.state = {
      // mobileToggleStep3: false,
      // buttonsCount: get(this.props, "user.checked_users.length", 1)
  };
}
  // componentWillUpdate(nextProps, nextState) {
  //   const checkedUserProps = get(this.props, "user.checked_users.length", 1);
  //   const checkedUserNext = get(nextProps, "user.checked_users.length", 1);
  //   if (checkedUserProps !== checkedUserNext) {
  //     this.setState({ buttonsCount: checkedUserNext });
  //   }
  // }
  render() {
    // const { activeStep, step1, step2, step3, step4 } = this.props.stepper;
    // const buttonsCount = get(this.props, "user.checked_users.length", 1);

    return (
      <Fragment>
        <section className="personal-summary-block">
          <header className="personal-summary-header">
            <h2 className="personal-summary-header-title">
              בעל דירה,
              <br />
              מגיע לך שקט נפשי.
            </h2>
            <div className="personal-summary-header-subtitle">
              DiffeRent מבטיחה לך
              <br />
              את שכר הדירה.
            </div>
          </header>
          <div className="personal-summary-inner-content">
            {/* Step 1*/}
            <div
              // className={cn({
              //   "personal-summary": true,
              //   "personal-summary-1": true,
              //   "personal-summary-active": activeStep === STEPPER_STEP1,
              //   "personal-summary-default":
              //     !step1.edit && activeStep !== STEPPER_STEP1,
              //   "personal-summary-edit":
              //     step1.edit && activeStep !== STEPPER_STEP1
              // })}
            >
              <Link href={"/personal-info/step1"}>
                <div
                  className="personal-summary-icon"
                  onClick={() => {
                    this.props.onSetStepper({
                      activeStep: 1
                    });
                  }}
                ></div>
              </Link>

              <h2 className="personal-summary-title">
                פרטים אישיים של בעל הדירה
              </h2>
              <div className="personal-summary-subtitle">
                מהם פרטיו של בעל הדירה?
              </div>
              <div className="personal-summary-content">
                <p className="personal-summary-text">
                  <span className="personal-summary-text-name">שם:</span>&nbsp;
                  {this.props.user.fname} {this.props.user.lname}
                </p>
              </div>
              <div className="personal-summary-content">
                <p className="personal-summary-text">
                  <span className="personal-summary-text-name">ת.ז:</span>&nbsp;
                  {this.props.user.id}
                </p>
              </div>
              <div className="personal-summary-content">
                <p className="personal-summary-text">
                  <span className="personal-summary-text-name">
                    מספר טלפון:
                  </span>
                  &nbsp;
                  <strong dir="ltr">{this.props.user.phone}</strong>
                </p>
              </div>
            </div>
            {/* Step 2*/}
            <div
              // className={cn({
              //   "personal-summary": true,
              //   "personal-summary-2": true,
              //   "personal-summary-active": activeStep === STEPPER_STEP2,
              //   "personal-summary-default":
              //     !step2.edit && activeStep !== STEPPER_STEP2,
              //   "personal-summary-edit":
              //     step2.edit && activeStep !== STEPPER_STEP2
              // })}
            >
              <Link href={"/personal-info/step2"}>
                <div
                  className="personal-summary-icon"
                  onClick={() => {
                    this.props.onSetStepper({
                      activeStep: 2
                    });
                  }}
                ></div>
              </Link>

              <h2 className="personal-summary-title">פרטי הדירה</h2>
              <div className="personal-summary-subtitle">
                מהם פרטי הדירה
                <br />
                שתרצה להשכיר?
              </div>
              <div className="personal-summary-content">
                <p className="personal-summary-text">
                  <span className="personal-summary-text-name">כתובת:</span>
                  &nbsp;
                  {this.props.user.street} , {this.props.user.street_no}{" "}
                  דירה {this.props.user.apt_no} {this.props.user.city}
                </p>
              </div>
            </div>
            {/* Step 3*/}
            <div
              // className={cn({
              //   "personal-summary-with-nav": true,
              //   "personal-summary": true,
              //   "personal-summary-3": true,
              //   "personal-summary-active": activeStep === STEPPER_STEP3,
              //   "personal-summary-default":
              //     !step3.edit && activeStep !== STEPPER_STEP3,
              //   "personal-summary-edit":
              //     step3.edit && activeStep !== STEPPER_STEP3
              // })}
            >
              <Link href={"/personal-info/step3"}>
                <div
                  className="personal-summary-icon"
                  onClick={() => {
                    this.props.onSetStepper({ activeStep: 3 });
                  }}
                ></div>
              </Link>

              <h2 className="personal-summary-title">
                מיהו הדייר שתרצה שנבדוק עבורך?
              </h2>
              <div
                // className={cn("personal-summary-nav-content", {
                //   "personal-summary-nav-content-hide":
                //     this.props.stepper.mobileToggleStep3 ||
                //     this.props.width >= MOBILE_VIEW_SIZE
                // })}
              >
                <div className="personal-summary-subtitle">
                  ניתן לבדוק דייר שגר בדירה כרגע או דייר פוטנציאלי.
                </div>
                <div className="personal-summary-subtitle">
                  <strong>
                    DiffeRent מבטיחה רק את תשלומי שכר הדירה של הדיירים שאושרה
                    בדיקתם ושיופיעו בהסכם השכירות.
                  </strong>
                </div>
                <div className="personal-summary-subtitle">
                  בחרו את מספר הדיירים המופיעים
                  <br />
                  בהסכם השכירות
                </div>
                <nav className="personal-summary-nav">
                  <button
                    type="button"
                    // className={cn("personal-summary-button", {
                    //   "personal-summary-button-checked": buttonsCount >= 1
                    // })}
                    onClick={() => {
                      this.props.onSetUserData({
                        buttonsCount: 1
                      });

                      this.setState({ buttonsCount: 1 });
                    }}
                  >
                    1
                  </button>
                  <button
                    type="button"
                    // className={cn("personal-summary-button", {
                    //   "personal-summary-button-checked": buttonsCount >= 2
                    // })}
                    onClick={() => {
                      this.props.onSetUserData({
                        buttonsCount: 2
                      });

                      this.setState({ buttonsCount: 2 });
                    }}
                  >
                    2
                  </button>
                  <button
                    type="button"
                    // className={cn("personal-summary-button", {
                    //   "personal-summary-button-checked": buttonsCount >= 3
                    // })}
                    onClick={() => {
                      this.props.onSetUserData({
                        buttonsCount: 3
                      });

                      this.setState({ buttonsCount: 3 });
                    }}
                  >
                    3
                  </button>
                  <button
                    type="button"
                    // className={cn("personal-summary-button", {
                    //   "personal-summary-button-checked": buttonsCount >= 4
                    // })}
                    onClick={() => {
                      this.props.onSetUserData({
                        buttonsCount: 4
                      });

                      this.setState({ buttonsCount: 4 });
                    }}
                  >
                    +4
                  </button>
                </nav>
                <div className="btn-block">
                  <button
                    className="btn-blue btn-small btn-bold"
                    onClick={e => {
                      this.props.onSetStepper({ mobileToggleStep3: true });
                    }}
                  >
                    המשך
                  </button>
                </div>
              </div>
            </div>
            {/* Step 4*/}
            <div
              // className={cn({
              //   "personal-summary-footer": true,
              //   "personal-summary": true,
              //   "personal-summary-4": true,
              //   "personal-summary-active": activeStep === STEPPER_STEP4,
              //   "personal-summary-default": activeStep !== STEPPER_STEP4,
              //   "personal-summary-edit":
              //     step4.edit && activeStep !== STEPPER_STEP4
              // })}
            >
              <Link href={"/personal-info/step4"}>
                <div
                  className="personal-summary-icon"
                  onClick={() => {
                    this.props.onSetStepper({ activeStep: 4 });
                  }}
                ></div>
              </Link>

              <h2 className="personal-summary-title">פרטי הסכם שכירות</h2>
              <div className="personal-summary-subtitle">
                מהם פרטי הסכם השכירות
                <br />
                בינך לבין הדייר?
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     user: state.user,
//     stepper: state.forms.stepper
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onSetStepper: action => {
//       dispatch(stepper_toggle(action));
//     },
//     onSetUserData: action => {
//       dispatch(UserActions.setChangedUsersCount(action));
//     }
//   };
// };

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PersonalInfoSummary);

export default Summary;
