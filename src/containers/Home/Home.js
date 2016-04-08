import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { update } from 'redux/modules/form';

@connect(
  state => ({form: state.form}),
  {update})
export default class Home extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired
  };
  onChange(e) {
    this.props.update('givenName', e.target.value);
  }
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.leftColumn}>
          <h2>hCard Builder</h2>
          <form>
            <fieldset>
              <legend>PERSONAL DETAILS</legend>
              <div className={styles.formGroup}>
                <label htmlFor="given-name">GIVEN NAME</label>
                <input value={this.props.form.givenName} onChange={this.onChange.bind(this)} type="name" className="form-control" id="given-name"/>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="surname">SURNAME</label>
                <input type="name" className="form-control" id="surname"/>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">EMAIL</label>
                <input type="email" className="form-control" id="email"/>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="given-name">PHONE</label>
                <input type="phone" className="form-control" id="phone"/>
              </div>
            </fieldset>
            <fieldset>
              <legend>ADDRESS</legend>
              <div className={styles.formGroup}>
                <label htmlFor="given-name">GIVEN NAME</label>
                <input type="name" className="form-control" id="given-name"/>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="given-name">GIVEN NAME</label>
                <input type="name" className="form-control" id="given-name"/>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="given-name">GIVEN NAME</label>
                <input type="name" className="form-control" id="given-name"/>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="given-name">GIVEN NAME</label>
                <input type="name" className="form-control" id="given-name"/>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="given-name">GIVEN NAME</label>
                <input type="name" className="form-control" id="given-name"/>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="given-name">GIVEN NAME</label>
                <input type="name" className="form-control" id="given-name"/>
              </div>
            </fieldset>
          </form>
        </div>
        <div className={styles.rightColumn}>
          Form
        </div>
        <div className={styles.clearfix}></div>
      </div>
    );
  }
}
