import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { update } from 'redux/modules/form';
import FormInput from '../../components/FormInput/FormInput';

@connect(
  state => ({form: state.form}),
  {update})
export default class Home extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired
  };

  onChange(event) {
    this.props.update('givenName', event.target.value);
  }

  triggerUpload() {
    this.refs.imageUploader.click();
  }

  upload() {
    const input = this.refs.imageUploader;
    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = (event) => {
        this.props.update('avatar', event.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
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
              <FormInput id="given-name"
                         name="givenName"
                         value={this.props.form.givenName}
                         labelText="GIVEN NAME"
                         onChange={this.props.update}
              />
              <FormInput id="surname"
                         name="surname"
                         value={this.props.form.surname}
                         labelText="SURNAME"
                         onChange={this.props.update}
              />
              <FormInput id="email"
                         name="email"
                         type="email"
                         value={this.props.form.email}
                         labelText="EMAIL"
                         onChange={this.props.update}
              />
              <FormInput id="phone"
                         name="phone"
                         type="tel"
                         value={this.props.form.phone}
                         labelText="PHONE"
                         onChange={this.props.update}
              />
            </fieldset>
            <fieldset>
              <legend>ADDRESS</legend>
              <FormInput id="house-name"
                         name="houseName"
                         value={this.props.form.houseName}
                         labelText="HOUSE NAME OR #"
                         onChange={this.props.update}
              />
              <FormInput id="street"
                         name="street"
                         value={this.props.form.street}
                         labelText="STREET"
                         onChange={this.props.update}
              />
              <FormInput id="suburb"
                         name="suburb"
                         value={this.props.form.suburb}
                         labelText="SUBURB"
                         onChange={this.props.update}
              />
              <FormInput id="state"
                         name="state"
                         value={this.props.form.state}
                         labelText="STATE"
                         onChange={this.props.update}
              />
              <FormInput id="postcode"
                         name="postcode"
                         value={this.props.form.postcode}
                         labelText="POSTCODE"
                         onChange={this.props.update}
              />
              <FormInput id="country"
                         name="country"
                         value={this.props.form.country}
                         labelText="COUNTRY"
                         onChange={this.props.update}
              />
            </fieldset>
            <div className={styles.buttons}>
              <button type="button" onClick={this.triggerUpload.bind(this)} className={styles.blue + ' btn'}>Upload
                Avatar
              </button>
              <button type="button" className={styles.grey + ' btn'}>Create hCard</button>
              <input style={{display: 'none'}} type="file" accept="image/*" ref="imageUploader"
                     onChange={this.upload.bind(this)}/>
            </div>
          </form>
        </div>
        <div className={styles.rightColumn}>
          <h3>HCARD PREVIEW</h3>
          <div className="vcard">
            <div className={styles.header}>
              <span className="n">
                <span className="given-name">{this.props.form.givenName}</span>
                &nbsp;
                <span className="family-name">{this.props.form.surname}</span>
              </span>
              <div className={styles.avatarPlaceholder}>
                {this.props.form.avatar ? <img className="photo" src={this.props.form.avatar}/> : null}
              </div>
            </div>
            <div className={styles.body}>
              <table>
                <tbody>
                <tr>
                  <th>Email</th>
                  <td colSpan="3"><span className="email">{this.props.form.email}</span></td>
                </tr>
                <tr>
                  <th>PHONE</th>
                  <td colSpan="3"><span className="tel">{this.props.form.phone}</span></td>
                </tr>
                <tr>
                  <th>ADDRESS</th>
                  <td colSpan="3">{this.props.form.houseName} {this.props.form.street}</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td colSpan="3">{this.props.form.suburb} {this.props.form.state}</td>
                </tr>
                <tr>
                  <th>POSTCODE</th>
                  <td>{this.props.form.postcode}</td>
                  <th>COUNTRY</th>
                  <td>{this.props.form.country}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.clearfix}></div>
      </div>
    );
  }
}
