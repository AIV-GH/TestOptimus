import { FunctionComponent, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./css/Payment1.module.css";

export const Payment1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer21Click = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  const onGroupContainer23Click = useCallback(() => {
    navigate("/payment2");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/downloadscreen");
  }, [navigate]);

  const onCOMPETITORSTextClick = useCallback(() => {
    // Please sync "Competitors" to the project
  }, []);

  const onLOGOTextClick = useCallback(() => {
    // Please sync "Page 1 Home" to the project
  }, []);

  return (
    <div className={styles.paymentDiv}>
      <div className={styles.rectangleDiv} />
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.rectangleDiv2} />
        <div className={styles.rectangleDiv3} />
        <div className={styles.rectangleDiv4} />
        <div className={styles.rectangleDiv5} />
        <div className={styles.rectangleDiv6} />
      </div>
      <div className={styles.homeBannerDiv}>
        <div className={styles.rectangleDiv7} />
        <img className={styles.ellipseIcon} alt="" src="ellipse-42.svg" />
        <img className={styles.groupIcon} alt="" src="group-163.svg" />
        <div className={styles.groupDiv1}>
          <div className={styles.image48Div} />
          <img className={styles.groupIcon1} alt="" src="group-253.svg" />
          <div className={styles.groupDiv2}>
            <img className={styles.iconlyLightNotification} alt="" />
            <div className={styles.jumpStartDiv}>{`Jump start `}</div>
            <div className={styles.yourPortfolioLooksGreatTod}>
              Your portfolio looks great today
            </div>
          </div>
          <div className={styles.groupDiv3}>
            <div className={styles.groupDiv4}>
              <div className={styles.portfolioBalanceDiv}>
                Portfolio balance
              </div>
              <div className={styles.div}>$12,175.11</div>
              <div className={styles.groupDiv5}>
                <img className={styles.vectorIcon} alt="" src="vector-1.svg" />
                <div className={styles.div1}>$24.74 (3.79%)</div>
              </div>
              <div className={styles.todayMay222021}>Today (May 22,2021)</div>
            </div>
            <div className={styles.groupDiv6}>
              <div className={styles.availableBalanceDiv}>
                Available balance
              </div>
              <div className={styles.div2}>$173.21</div>
              <div className={styles.groupDiv7}>
                <img className={styles.vectorIcon1} alt="" />
                <div className={styles.portfolioBalanceDiv}>More details</div>
              </div>
            </div>
            <div className={styles.groupDiv8}>
              <div className={styles.rectangleDiv8} />
              <div className={styles.hDiv}>1h</div>
            </div>
            <div className={styles.groupDiv9}>
              <div className={styles.rectangleDiv9} />
              <div className={styles.hDiv1}>24h</div>
            </div>
            <div className={styles.groupDiv10}>
              <div className={styles.rectangleDiv9} />
              <div className={styles.wDiv}>1w</div>
            </div>
            <div className={styles.groupDiv11}>
              <div className={styles.rectangleDiv9} />
              <div className={styles.wDiv}>1w</div>
            </div>
            <div className={styles.groupDiv12}>
              <div className={styles.rectangleDiv9} />
              <div className={styles.yDiv}>1y</div>
            </div>
            <div className={styles.groupDiv13}>
              <div className={styles.rectangleDiv9} />
              <div className={styles.wDiv}>All</div>
            </div>
            <div className={styles.rectangleDiv14} />
            <img className={styles.groupIcon2} alt="" src="group-18.svg" />
            <div className={styles.groupDiv14}>
              <div className={styles.rectangleDiv15} />
              <div className={styles.sendDiv}>Send</div>
            </div>
            <div className={styles.groupDiv15}>
              <div className={styles.rectangleDiv16} />
              <div className={styles.withdrawDiv}>Withdraw</div>
            </div>
            <img className={styles.groupIcon3} alt="" />
            <img className={styles.groupIcon4} alt="" src="group-273.svg" />
          </div>
        </div>
        <img className={styles.bluee011Icon} alt="" src="bluee01-1@2x.png" />
      </div>
      <img className={styles.ezgif1Icon} alt="" src="ezgif-1@2x.png" />
      <img className={styles.ezgif3Icon} alt="" src="ezgif-1@2x.png" />
      <img className={styles.ezgif4Icon} alt="" src="ezgif-4@2x.png" />
      <div className={styles.groupDiv16}>
        <img className={styles.ezgif6Icon} alt="" src="ezgif-4@2x.png" />
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.rectangleDiv17} />
        <div className={styles.rectangleDiv18} />
        <div className={styles.logoDiv}><img src="logo.png" height="50" width="50" /></div>
        <div className={styles.transformingLivesOfPeopleA}>
        Transforming lives across the globe by adventuring Artificial Intelligence.
        </div>
        <div
          className={styles.needAnswersNeedHelpJust}
        >{`Need Answers? Need help ? Just email us `}</div>
        <div className={styles.copyright2022Div}>Copyright 2022</div>
        <div className={styles.companyDiv}>Company</div>
        <Link to="/product"><div className={styles.productDiv}>Product</div></Link>
        <Link to="/competitors"><div className={styles.competitorsDiv}>Competitors</div></Link>
        <div className={styles.pricingDiv}>Pricing</div>
        <div className={styles.contactDiv}>Contact</div>
        <div className={styles.linksDiv}>Links</div>
        <div className={styles.followUsDiv}>{`Follow Us `}</div>
        <div className={styles.getInTouchWithUs}>Get In touch with Us</div>
        <div className={styles.groupDiv17}>
          <div className={styles.fbcomaaaDiv}>https://twitter.com/AiTensors</div>
            <a href="https://twitter.com/AiTensors"><img
              className={styles.featherfacebookIcon}
              alt=""
              src="twitter.svg"
            /></a>
        </div>
        <div className={styles.groupDiv19}>
          <div className={styles.fbcomaaaDiv}>https://www.linkedin.com/company/82789169/</div>
            <a href="https://www.linkedin.com/company/82789169/"><img
              className={styles.featherfacebookIcon}
              alt=""
              src="linkedin.svg"
            /></a>
        </div>
        
      </div>
      <div className={styles.categoryDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.helperTextDiv}>Free</div>
          <b className={styles.b}>$0</b>
        </div>
        <div className={styles.frameDiv2}>
          <div className={styles.pointsDiv}>
            <img className={styles.feathersendIcon} alt="" />
            <div className={styles.visitorsDiv}>Loreum</div>
          </div>
          <div className={styles.pointsDiv}>
            <img className={styles.feathersendIcon} alt="" />
            <div className={styles.visitorsDiv}>Ipsum</div>
          </div>
          <div className={styles.pointsDiv}>
            <img className={styles.feathersendIcon} alt="" />
            <div className={styles.visitorsDiv}>Dolor</div>
          </div>
        </div>
        <div className={styles.buttonDiv}>
          <div className={styles.downloadNowDiv}>Download Now</div>
        </div>
      </div>
      
      <b className={styles.trackAnyHashtags}>Choose your payment method</b>
      <b className={styles.premimumPlanWorth99WasSe}>
      Premium Plan is Ready
      </b>
      <div className={styles.groupDiv20}>
        <div className={styles.groupDiv21}>
          <div className={styles.rectangleDiv20} />
          <b className={styles.debitCreditCard}>Debit /Credit Card</b>
        </div>
        <div className={styles.groupDiv22} onClick={onGroupContainer21Click}>
          <div className={styles.rectangleDiv20} />
          <b className={styles.debitCreditCard}>Wallet</b>
        </div>
        <div className={styles.groupDiv23}>
          <div className={styles.rectangleDiv22} />
        </div>
        <div className={styles.groupDiv24} onClick={onGroupContainer23Click}>
          <div className={styles.rectangleDiv20} />
          <b className={styles.debitCreditCard}>Net Banking</b>
        </div>
        <div className={styles.formDiv}>
          <div className={styles.buttonDiv1} onClick={onButtonContainer2Click}>
            <div className={styles.elementsButtonsPrimary}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv} />
                <div className={styles.buttonTextDiv}>Proceed</div>
              </div>
            </div>
          </div>
          <div className={styles.formDiv1}>
            <div className={styles.elementsInputsLarge60px}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv1} />
                <div className={styles.typeYourEMail}>Valid through</div>
              </div>
            </div>
            <div className={styles.elementsInputsLarge60px1}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv1} />
                <div className={styles.typeYourEMail1}>
                  <span className={styles.cSpan}>C</span>V
                  <span className={styles.cSpan}>V</span>
                </div>
              </div>
            </div>
            <div className={styles.elementsInputsLarge60px2}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv1} />
                <div className={styles.typeYourEMail1}>
                  <span className={styles.cSpan}>Card N</span>u
                  <span className={styles.cSpan}>mber</span>
                </div>
              </div>
            </div>
            <div className={styles.registrationPayment}>
              <span>{`Registration -   `}</span>
              <span className={styles.paymentSpan}>Payment</span>
              <span> - Download</span>
            </div>
            <div className={styles.typeYourEMail3}>Note :</div>
            <div className={styles.elementsInputsLarge60px3}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv1} />
                <div className={styles.typeYourEMail1}>
                  <span className={styles.cSpan}>Name on</span>
                  {` `}
                  <span className={styles.cSpan}>Card</span>
                </div>
              </div>
            </div>
            <div className={styles.typeYourEMail5}>
              Is billing address same as residence address
            </div>
            <div className={styles.rectangleDiv24} />
          </div>
        </div>
      </div>
      <div className={styles.rectangleDiv25} />
      <div className={styles.navBarDiv}>
        <div className={styles.cONTACTDiv}>CONTACT</div>
        <div className={styles.pRICINGDiv}>PRICING</div>
        <div className={styles.tESTIMONIALSDiv}>TESTIMONIALS</div>
        <div className={styles.cOMPETITORSDiv} onClick={onCOMPETITORSTextClick}>
          COMPETITORS
        </div>
        <div className={styles.pRODUCTDiv}>PRODUCT</div>
        <div className={styles.cOMPANYDiv}>COMPANY</div>
        <Link to="/"><div className={styles.logomain}>
          <img src="logo.png" height="50" width="50" />
        </div></Link>
      </div>
    </div>
  );
};
